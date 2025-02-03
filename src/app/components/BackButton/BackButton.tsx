import Link from "next/link";
import styles from "./BackButton.module.scss";
import Image from "next/image";

const BackButton = ({ routingPath }: Props) => {
  return (
    <Link href={routingPath} className={styles.backLink}>
      <button className={styles.backButton}>
        <Image
          src="/back.svg"
          alt="back"
          fill={true}
          className={styles.backIcon}
        />
      </button>
    </Link>
  );
};

interface Props {
  routingPath: string;
}

export default BackButton;
