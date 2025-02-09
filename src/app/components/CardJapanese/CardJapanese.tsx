import Word from "@/app/types/Word";
import styles from "./CardJapanese.module.scss";

interface Props {
  currentWord: Word;
}

const CardJapanese = ({ currentWord }: Props) => {
  return (
    <div className={styles.column}>
      <label className={styles.answerLabel}>{currentWord.Kanji}</label>
      <hr className={styles.divider} />
      <label className={styles.answerLabel}>{currentWord.Kana}</label>
    </div>
  );
};

export default CardJapanese;
