import LessonInfo from "@/app/types/LessonInfo";
import styles from "./LessonInfoBar.module.scss";
import formatTimeFromSeconds from "@/app/utils/formatTimeFromSeconds";

interface Props {
  lessonInfo: LessonInfo;
  className?: string;
}

const LessonInfoBar = ({
  lessonInfo: {
    iterationCount,
    wordsCount,
    mistakesCount,
    correctCount,
    passedTimeInSeconds,
  },
  className,
}: Props) => {
  const formattedTime = formatTimeFromSeconds(passedTimeInSeconds);

  return (
    <div className={`${styles.LessonInfoBar} ${className || ""}`}>
      <label className={styles.timer}>{formattedTime}</label>
      <label className={styles.iteration}>{iterationCount}</label>
      <label className={styles.mistakes}>{mistakesCount}</label>
      <label className={styles.words}>{wordsCount}</label>
      <label className={styles.corrects}>{correctCount}</label>
    </div>
  );
};

export default LessonInfoBar;
