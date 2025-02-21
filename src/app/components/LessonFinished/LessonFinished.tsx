import Link from "next/link";
import styles from "./LessonFinished.module.scss";
import formatTimeFromSeconds from "@/app/utils/formatTimeFromSeconds";

interface Props {
  routingPath: string;
  lessonDurationInSeconds: number;
}

const LessonFinished = ({ routingPath, lessonDurationInSeconds }: Props) => {
  const formattedTime = formatTimeFromSeconds(lessonDurationInSeconds);

  return (
    <div className={styles.column}>
      <h1 className={styles.finished}>Congratulations!!!</h1>
      <h1 className={styles.finishedJapanese}>おめでとう!</h1>
      <h1 className={styles.finishedMessage}>
        You’ve successfully completed this lesson in{" "}
        <span>{formattedTime}</span>! 🎉 Keep up the great work and continue
        your journey toward mastering Japanese. Ready for the next challenge?
      </h1>
      <Link className={styles.returnButton} href={routingPath}>
        はい！
      </Link>
    </div>
  );
};

export default LessonFinished;
