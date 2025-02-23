import Word from "@/app/types/Word";
import styles from "./CardBack.module.scss";
import BackButton from "../BackButton/BackButton";
import CardJapanese from "../CardJapanese/CardJapanese";
import CardButton from "../CardButton/CardButton";
import LessonInfo from "@/app/types/LessonInfo";
import LessonInfoBar from "../LessonInfoBar/LessonInfoBar";
import KanjiDrawing from "../KanjiDrawing/KanjiDrawing";

interface Props {
  currentWord: Word;
  lessonInfo: LessonInfo;
  kanjiDrawings: string[];
  correctClick: () => void;
  mistakeClick: () => void;
  turnCardClick: () => void;
}

const CardBack = ({
  currentWord,
  lessonInfo,
  kanjiDrawings,
  correctClick,
  mistakeClick,
  turnCardClick,
}: Props) => {
  return (
    <div className={styles.CardBack}>
      <div className={styles.column}>
        <div className={styles.row}>
          <BackButton routingPath="/vocabulary" />
          <LessonInfoBar lessonInfo={lessonInfo} className={styles.toRight} />
        </div>
        <CardJapanese currentWord={currentWord} />
      </div>

      <div className={styles.column}>
        <div className={styles.drawings}>
          {kanjiDrawings.map((path) => (
            <KanjiDrawing key={path} path={path} />
          ))}
        </div>
        <div className={styles.row}>
          <div className={styles.row}>
            <div className={styles.buttons}>
              <CardButton
                text="Mistake"
                style={styles.mistakeButton}
                action={mistakeClick}
              />
              <CardButton
                text="Correct"
                style={styles.correctButton}
                action={correctClick}
              />
              <CardButton
                text="Hide"
                style={styles.turnCardButton}
                action={turnCardClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBack;
