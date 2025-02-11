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
  setLessonInfo: Dispatch<SetStateAction<LessonInfo>>;
  turnCard: () => void;
  correctClick: () => void;
  mistakeClick: () => void;
}

const Card = ({
  isChecked,
  currentWord,
  lessonInfo,
  setLessonInfo,
  turnCard,
  correctClick,
  mistakeClick,
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
          turnCard={turnCard}
        />
      ) : (
        <CardBack
          currentWord={currentWord}
          lessonInfo={lessonInfo}
          correctClick={correctClick}
          mistakeClick={mistakeClick}
          turnCardClick={turnCard}
        />
      )}
    </div>
  );
};

export default Card;
