import styles from "./CardButton.module.scss";

interface Props {
  text: string;
  style: string;
  action: () => void;
}

const CardButton = ({ text, style = "", action }: Props) => {
  return (
    <button className={`${styles.CardButton} ${style}`} onClick={action}>
      {text}
    </button>
  );
};

export default CardButton;
