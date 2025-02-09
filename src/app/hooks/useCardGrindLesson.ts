import { useEffect, useState } from "react";
import Word from "../types/Word";
import { useSearchParams } from "next/navigation";
import shuffleArray from "../utils/shuffleArray";
import mapWordsFromDto from "../utils/mapWordsFromDto";
import fetchJsonDictionary from "../service/fetchJsonDictionary";

export interface CardGrindLesson {
  isLoading: boolean;
  isChecked: boolean;
  isLessonFinished: boolean;
  currentWord: Word;
  turnCard: () => void;
  correctClick: () => void;
  mistakeClick: () => void;
}

export const useCardGrindLesson = (): CardGrindLesson => {
  const params = useSearchParams();
  const down = params.get("downIndex");
  const up = params.get("upIndex");

  const [words, setWords] = useState<Word[]>([]);
  const [correctWords, setCorrectWords] = useState<Word[]>([]);
  const [mistakenWords, setMistakenWords] = useState<Word[]>([]);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const currentWord = words[currentWordIndex];

  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLessonFinished, setIsLessonFinished] = useState(false);

  const turnCard = () => {
    setIsChecked((prev) => !prev);
  };

  const correctClick = () => {
    setCorrectWords([...correctWords, words[currentWordIndex]]);
    setNextWord();
  };

  const mistakeClick = () => {
    setMistakenWords([...mistakenWords, words[currentWordIndex]]);
    setNextWord();
  };

  const setNextWord = () => {
    if (currentWordIndex == words.length - 1) {
      setNextIteration();
    } else {
      setCurrentWordIndex(currentWordIndex + 1);
    }
    setIsChecked(false);
  };

  const setNextIteration = () => {
    if (mistakenWords.length === 0) {
      setIsLessonFinished(true);
    } else {
      setCurrentWordIndex(0);
      setWords(shuffleArray(mistakenWords));
      setMistakenWords([]);
    }
  };

  useEffect(() => {
    if (down === null || up === null)
      throw new Error("Invalid index" + down + up);

    fetchJsonDictionary("/FilteredDictionary.json")
      .then((data) => {
        setWords(
          shuffleArray(
            mapWordsFromDto(data).slice(Number(down) - 1, Number(up))
          )
        );
      })
      .then(() => setIsLoading(false));
  }, []);

  return {
    isLoading,
    isChecked,
    isLessonFinished,
    currentWord,
    turnCard,
    correctClick,
    mistakeClick,
  };
};
