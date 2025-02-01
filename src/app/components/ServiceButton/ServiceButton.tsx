import styles from "./ServiceButton.module.scss";

const ServiceButton = ({ title }: Props) => {
  return (
    <div className={styles.ServiceButton}>
      <label>{title}</label>
    </div>
  );
};

interface Props {
  title: string;
}

export default ServiceButton;
