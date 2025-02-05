"use client";
import { useSearchParams } from "next/navigation";
import styles from "./grind.module.scss";
import { useEffect, useState } from "react";
import fetchJsonDictionary from "@/app/service/fetchJsonDictionary";
import mapWordsFromDto from "@/app/utils/mapWordsFromDto";
import Word from "@/app/types/Word";
import shuffleArray from "@/app/utils/shuffleArray";
import Link from "next/link";
import { Suspense } from "react";
import BackButton from "@/app/components/BackButton/BackButton";

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
          <h1 className={styles.loading}>Loading...</h1>
        ) : (
          <>
            {words.length == 0 ? (
              <div className={styles.column}>
                <h1 className={styles.finished}>Congratulations!!!</h1>
                <h1 className={styles.finishedJapanese}>おめでとう!</h1>
                <h1 className={styles.finishedMessage}>
                  You’ve successfully completed this lesson! 🎉 Keep up the
                  great work and continue your journey toward mastering
                  Japanese. Ready for the next challenge?
                </h1>
                <Link className={styles.returnButton} href="/vocabulary">
                  はい！
                </Link>
              </div>
            ) : (
              <>
                <div className={styles.column}>
                  <div className={styles.row}>
                    <BackButton routingPath="/vocabulary" />
                  </div>
                  {isChecked ? (
                    <div className={styles.column}>
                      <label className={styles.answerLabel}>
                        {words[wordIndex].Kanji}
                      </label>
                      <hr className={styles.divider} />
                      <label className={styles.answerLabel}>
                        {words[wordIndex].Kana}
                      </label>
                    </div>
                  ) : (
                    <div className={styles.column}>
                      {words[wordIndex].EnglishTranslations.map((t) => (
                        <label className={styles.meaningLabel} key={t}>
                          {t}
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                <div className={styles.row}>
                  {!isChecked ? (
                    <button
                      className={`${styles.button} ${styles.checkButton}`}
                      onClick={handleCheckOnClick}
                    >
                      Check
                    </button>
                  ) : (
                    <div className={styles.buttonsRow}>
                      <button
                        className={`${styles.button} ${styles.mistakeButton}`}
                        onClick={handleMistakeOnClick}
                      >
                        Incorrect
                      </button>
                      <button
                        className={`${styles.button} ${styles.correctButton}`}
                        onClick={handleCorrectOnClick}
                      >
                        Correct
                      </button>
                    </div>
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
