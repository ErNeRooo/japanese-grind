import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Word from "../types/Word";
import { useSearchParams } from "next/navigation";
import shuffleArray from "../utils/shuffleArray";
import mapWordsFromDto from "../utils/mapWordsFromDto";
import fetchJsonDictionary from "../service/fetchJsonDictionary";
import LessonInfo from "../types/LessonInfo";

export interface CardGrindLesson {
  isLoading: boolean;
  isChecked: boolean;
  currentWord: Word;
  lessonInfo: LessonInfo;
  kanjiDrawings: string[];
  setLessonInfo: Dispatch<SetStateAction<LessonInfo>>;
  turnCard: () => void;
  correctClick: () => void;
  mistakeClick: () => void;
  setKanjiDrawings: Dispatch<SetStateAction<string[]>>;
}

export const useCardGrindLesson = (): CardGrindLesson => {
  const params = useSearchParams();
  const down = params.get("downIndex");
  const up = params.get("upIndex");

  const [words, setWords] = useState<Word[]>([]);
  const [correctWords, setCorrectWords] = useState<Word[]>([]);
  const [mistakenWords, setMistakenWords] = useState<Word[]>([]);

  const [kanjiDrawings, setKanjiDrawings] = useState<string[]>([]);

  const [lessonInfo, setLessonInfo] = useState<LessonInfo>({
    iterationCount: 0,
    wordsCount: 0,
    mistakesCount: 0,
    correctCount: 0,
    passedTimeInSeconds: 0,
  });

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const currentWord = words[currentWordIndex];

  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const turnCard = () => {
    setIsChecked((prev) => !prev);
  };

  const correctClick = () => {
    setCorrectWords((prev) => [...prev, words[currentWordIndex]]);
  };

  const mistakeClick = () => {
    setMistakenWords((prev) => [...prev, words[currentWordIndex]]);
  };

  const setNextWord = () => {
    setCurrentWordIndex((prev) => prev + 1);
    setLessonInfo((prev) => ({
      ...prev,
      wordsCount: words.length - (mistakenWords.length + correctWords.length),
      mistakesCount: mistakenWords.length,
      correctCount: correctWords.length,
    }));
    setKanjiDrawings([]);
    setIsChecked(false);
  };

  const setNextIteration = () => {
    setCurrentWordIndex(() => 0);
    setWords(() => {
      return shuffleArray(mistakenWords);
    });
    setLessonInfo((prev) => ({
      ...prev,
      iterationCount: prev.iterationCount + 1,
      wordsCount: mistakenWords.length,
      mistakesCount: 0,
      correctCount: 0,
    }));
    setMistakenWords([]);
    setCorrectWords([]);
    setKanjiDrawings([]);
    setIsChecked(false);
  };

  useEffect(() => {
    if (
      correctWords.length + mistakenWords.length === words.length &&
      words.length > 0
    ) {
      setNextIteration();
    } else if (
      words.length > 0 &&
      (correctWords.length > 0 || mistakenWords.length > 0)
    ) {
      setNextWord();
    }
  }, [correctWords, mistakenWords]);

  useEffect(() => {
    if (down === null || up === null)
      throw new Error("Invalid index" + down + up);

    fetchJsonDictionary("/FilteredDictionary.json")
      .then((data) => {
        const selectedWords = mapWordsFromDto(data).slice(
          Number(down) - 1,
          Number(up)
        );

        setWords(shuffleArray(selectedWords));
        setLessonInfo((prev) => ({
          ...prev,
          iterationCount: 0,
          wordsCount: selectedWords.length,
          mistakesCount: 0,
          correctCount: 0,
        }));
      })
      .then(() => setIsLoading(false));
  }, []);

  return {
    isLoading,
    isChecked,
    currentWord,
    lessonInfo,
    kanjiDrawings,
    setLessonInfo,
    turnCard,
    correctClick,
    mistakeClick,
    setKanjiDrawings,
  };
};
