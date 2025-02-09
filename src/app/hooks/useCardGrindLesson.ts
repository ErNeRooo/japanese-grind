import { useEffect, useState } from "react";
import Word from "../types/Word";
import { useSearchParams } from "next/navigation";
import shuffleArray from "../utils/shuffleArray";
import mapWordsFromDto from "../utils/mapWordsFromDto";
import fetchJsonDictionary from "../service/fetchJsonDictionary";

export interface CardGrindLesson {
  isLoading: boolean;
  isChecked: boolean;
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

  const turnCard = () => {
    setIsChecked((prev) => !prev);
  };

  const correctClick = () => {
    setCorrectWords(prev => [...prev, words[currentWordIndex]]);
  };

  const mistakeClick = () => {
    setMistakenWords(prev => [...prev, words[currentWordIndex]]);
  };

  const setNextWord = () => {
    setCurrentWordIndex(prev => prev + 1);
    setIsChecked(false);
  };

  const setNextIteration = () => {
    setCurrentWordIndex(() => 0);
    setWords(() => {
      return shuffleArray(mistakenWords)
    });
    setMistakenWords([]);
    setCorrectWords([]);
    setIsChecked(false);
  };

  useEffect(() => {
    if(correctWords.length + mistakenWords.length === words.length && words.length > 0) {
      setNextIteration();
    } else if(words.length > 0 && (correctWords.length > 0 || mistakenWords.length > 0)) {
      setNextWord();
    }
  }, [correctWords, mistakenWords]);

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
    currentWord,
    turnCard,
    correctClick,
    mistakeClick,
  };
};
