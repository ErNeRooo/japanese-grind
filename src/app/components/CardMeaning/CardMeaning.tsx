import Word from "@/app/types/Word";
import styles from "./CardMeaning.module.scss";

interface Props {
  currentWord: Word;
}

const CardMeaning = ({ currentWord }: Props) => {
  return (
    <div className={styles.column}>
      {currentWord.EnglishTranslations.map((translation) => (
        <label className={styles.meaningLabel} key={translation}>
          {translation}
        </label>
      ))}
    </div>
  );
};

export default CardMeaning;
