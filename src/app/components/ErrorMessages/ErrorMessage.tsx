import { FieldError } from "react-hook-form";
import styles from "./InputErrorLabel.module.scss";

interface Props {
  error?: FieldError;
}

const InputErrorLabel = ({ error }: Props) => {
  return <label className={styles.InputErrorLabel}>{error?.message}</label>;
};

export default InputErrorLabel;
