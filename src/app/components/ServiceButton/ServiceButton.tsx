import styles from "./ServiceButton.module.scss";

const ServiceButton = ({ title, japaneseTitle }: Props) => {
  return (
    <div data-testid="service-button" className={styles.ServiceButton}>
      <div className={styles.inner}>
        <label className={styles.title}>{title}</label>
        <label className={styles.japaneseTitle}>{japaneseTitle}</label>
      </div>
    </div>
  );
};

interface Props {
  title: string;
  japaneseTitle: string;
}

export default ServiceButton;
