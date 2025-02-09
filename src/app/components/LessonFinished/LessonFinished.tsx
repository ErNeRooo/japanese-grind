import Link from "next/link";
import styles from "./LessonFinished.module.scss";

interface Props {
  routingPath: string;
}

const LessonFinished = ({ routingPath }: Props) => {
  return (
    <div className={styles.column}>
      <h1 className={styles.finished}>Congratulations!!!</h1>
      <h1 className={styles.finishedJapanese}>おめでとう!</h1>
      <h1 className={styles.finishedMessage}>
        You’ve successfully completed this lesson! 🎉 Keep up the great work and
        continue your journey toward mastering Japanese. Ready for the next
        challenge?
      </h1>
      <Link className={styles.returnButton} href={routingPath}>
        はい！
      </Link>
    </div>
  );
};

export default LessonFinished;
