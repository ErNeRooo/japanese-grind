import Word from "@/app/types/Word";
import BackButton from "../BackButton/BackButton";
import CardButton from "../CardButton/CardButton";
import CardMeaning from "../CardMeaning/CardMeaning";
import styles from "./CardFront.module.scss";
import LessonInfo from "@/app/types/LessonInfo";
import LessonInfoBar from "../LessonInfoBar/LessonInfoBar";

interface Props {
  currentWord: Word;
  lessonInfo: LessonInfo;
  turnCard: () => void;
}

const CardFront = ({ currentWord, lessonInfo, turnCard }: Props) => {
  return (
    <div className={styles.CardFront}>
      <div className={styles.column}>
        <div className={styles.row}>
          <BackButton routingPath="/vocabulary" />

          <span className={styles.toRight}></span>
          <LessonInfoBar lessonInfo={lessonInfo} />
        </div>
        <CardMeaning currentWord={currentWord} />
      </div>
      <div className={styles.row}>
        <CardButton text="Check" style={styles.checkButton} action={turnCard} />
      </div>
    </div>
  );
};

export default CardFront;
