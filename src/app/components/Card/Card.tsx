import Word from "@/app/types/Word";
import styles from "./Card.module.scss";
import CardFront from "../CardFront/CardFront";
import CardBack from "../CardBack/CardBack";

interface Props {
  isChecked: boolean;
  currentWord: Word;
  turnCard: () => void;
  correctClick: () => void;
  mistakeClick: () => void;
}

const Card = ({
  isChecked,
  currentWord,
  turnCard,
  correctClick,
  mistakeClick,
}: Props) => {
  return (
    <div className={styles.Card}>
      {!isChecked ? (
        <CardFront currentWord={currentWord} turnCard={turnCard} />
      ) : (
        <CardBack
          currentWord={currentWord}
          correctClick={correctClick}
          mistakeClick={mistakeClick}
        />
      )}
    </div>
  );
};

export default Card;
