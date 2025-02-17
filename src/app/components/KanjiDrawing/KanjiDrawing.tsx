import Image from "next/image";
import styles from "./KanjiDrawing.module.scss";

interface Props {
  path: string;
}

const KanjiDrawing = ({ path }: Props) => {
  return (
    <div className={styles.KanjiDrawing}>
      <Image src={path} alt="drawing" fill={true} />
    </div>
  );
};

export default KanjiDrawing;
