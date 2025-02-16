import Image from "next/image";
import styles from "./IconButton.module.scss";

interface Props {
  iconPath: string;
  className?: string;
  action: () => void;
}

const IconButton = ({ iconPath, className, action }: Props) => {
  return (
    <button className={`${className} ${styles.IconButton}`} onClick={action}>
      <Image src={iconPath} alt="icon" fill={true} className={styles.icon} />
    </button>
  );
};

export default IconButton;
