import styles from "./ServiceButton.module.scss";

const ServiceButton = ({ title, japaneseTitle }: Props) => {
  return (
    <div className={styles.ServiceButton}>
      <div className={styles.inner}>
        <label>{japaneseTitle}</label>
        <label>{title}</label>
      </div>
    </div>
  );
};

interface Props {
  title: string;
  japaneseTitle: string;
}

export default ServiceButton;
