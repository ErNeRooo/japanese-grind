import Word from "@/app/types/Word";
import styles from "./Card.module.scss";
import CardFront from "../CardFront/CardFront";
import CardBack from "../CardBack/CardBack";
import LessonInfo from "@/app/types/LessonInfo";
import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
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

const Card = ({
  isChecked,
  currentWord,
  lessonInfo,
  kanjiDrawings,
  setLessonInfo,
  turnCard,
  correctClick,
  mistakeClick,
  setKanjiDrawings,
}: Props) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setLessonInfo((prev) => ({
        ...prev,
        passedTimeInSeconds: prev.passedTimeInSeconds + 1,
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.Card}>
      {!isChecked ? (
        <CardFront
          currentWord={currentWord}
          lessonInfo={lessonInfo}
          kanjiDrawings={kanjiDrawings}
          turnCard={turnCard}
          setKanjiDrawings={setKanjiDrawings}
        />
      ) : (
        <CardBack
          currentWord={currentWord}
          lessonInfo={lessonInfo}
          kanjiDrawings={kanjiDrawings}
          correctClick={correctClick}
          mistakeClick={mistakeClick}
          turnCardClick={turnCard}
        />
      )}
    </div>
  );
};

export default Card;
