import LessonInfo from "@/app/types/LessonInfo";
import styles from "./LessonInfoBar.module.scss";

interface Props {
  lessonInfo: LessonInfo;
  className?: string;
}

const LessonInfoBar = ({
  lessonInfo: { iterationCount, wordsCount, mistakesCount, correctCount },
  className,
}: Props) => {
  return (
    <div className={`${styles.LessonInfoBar} ${className || ""}`}>
      {/* <span>Iteration</span> */}
      <label className={styles.iteration}>{iterationCount}</label>
      {/* <span>Mistakes</span> */}
      <label className={styles.mistakes}>{mistakesCount}</label>
      {/* <span>Words in this iteration</span> */}
      <label className={styles.words}>{wordsCount}</label>
      {/* <span>Correct</span> */}
      <label className={styles.corrects}>{correctCount}</label>
    </div>
  );
};

export default LessonInfoBar;
