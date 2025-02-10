import Word from "@/app/types/Word";
import styles from "./Card.module.scss";
import CardFront from "../CardFront/CardFront";
import CardBack from "../CardBack/CardBack";
import LessonInfo from "@/app/types/LessonInfo";

interface Props {
  isChecked: boolean;
  currentWord: Word;
  lessonInfo: LessonInfo;
  turnCard: () => void;
  correctClick: () => void;
  mistakeClick: () => void;
}

const Card = ({
  isChecked,
  currentWord,
  lessonInfo,
  turnCard,
  correctClick,
  mistakeClick,
}: Props) => {
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
