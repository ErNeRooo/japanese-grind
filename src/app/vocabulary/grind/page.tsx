"use client";
import { useSearchParams } from "next/navigation";
import styles from "./grind.module.sass";
import { useEffect, useState } from "react";
import fetchJsonDictionary from "@/app/utils/fetchJsonDictionary";
import mapWordsFromDto from "@/app/utils/mapWordsFromDto";
import Word from "@/app/types/Word";
import shuffleArray from "@/app/utils/shuffleArray";
import Link from "next/link";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense>
      <GrindPage />
    </Suspense>
  );
};

const GrindPage = () => {
  const params = useSearchParams();
  const down = params.get("downIndex");
  const up = params.get("upIndex");
  const [words, setWords] = useState<Word[]>([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [correctWords, setCorrectWords] = useState<Word[]>([]);
  const [mistakenWords, setMistakenWords] = useState<Word[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  const handleCheckOnClick = () => {
    setIsChecked(true);
  };

  const handleCorrectOnClick = () => {
    setCorrectWords([...correctWords, words[wordIndex]]);
    switchToNextWord();
  };

  const handleMistakeOnClick = () => {
    setMistakenWords([...mistakenWords, words[wordIndex]]);
    switchToNextWord();
  };

  const switchToNextWord = () => {
    if (wordIndex == words.length - 1) {
      setWordIndex(0);
      setWords(shuffleArray(mistakenWords));
    } else {
      setWordIndex(wordIndex + 1);
    }
    setIsChecked(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {words.length == 0 ? (
              <>
                <h1>Finished</h1>
                <Link href="/vocabulary">Back</Link>
              </>
            ) : (
              <>
                {isChecked ? (
                  <>
                    <h1>{words[wordIndex].Kanji}</h1>
                    <h1>{words[wordIndex].Kana}</h1>
                  </>
                ) : (
                  <h1>{words[wordIndex].EnglishTranslations.map((t) => t)}</h1>
                )}

                <div className={styles.row}>
                  {!isChecked ? (
                    <button onClick={handleCheckOnClick}>Check</button>
                  ) : (
                    <>
                      <button onClick={handleMistakeOnClick}>Incorrect</button>
                      <button onClick={handleCorrectOnClick}>Correct</button>
                    </>
                  )}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
