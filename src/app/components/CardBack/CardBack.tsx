import Word from "@/app/types/Word";
import styles from "./CardBack.module.scss";
import BackButton from "../BackButton/BackButton";
import CardJapanese from "../CardJapanese/CardJapanese";
import CardButton from "../CardButton/CardButton";

interface Props {
  currentWord: Word;
  correctClick: () => void;
  mistakeClick: () => void;
  turnCardClick: () => void;
}

const CardBack = ({
  currentWord,
  correctClick,
  mistakeClick,
  turnCardClick,
}: Props) => {
  return (
    <div className={styles.CardBack}>
      <div className={styles.column}>
        <div className={styles.row}>
          <BackButton routingPath="/vocabulary" />
        </div>
        <CardJapanese currentWord={currentWord} />
      </div>
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
  );
};

export default CardBack;
