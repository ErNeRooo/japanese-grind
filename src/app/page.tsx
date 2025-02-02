import Link from "next/link";
import ServiceButton from "./components/ServiceButton/ServiceButton";
import styles from "./page.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.verticalContainer}>
          <div className={styles.header}>
            <label className={styles.englishTitle}>
              {"Welcome to Japanese Grind"}
            </label>
            <label className={styles.japaneseTitle}>
              {" 日本語のグラインドへようこそ"}
            </label>
          </div>

          <div className={styles.buttons}>
            <Link href="/vocabulary" className={styles.link}>
              <ServiceButton title="Vocabulary" japaneseTitle="語彙" />
            </Link>
            <Link href="/kana" className={styles.link}>
              <ServiceButton title="Hiragana" japaneseTitle="ひらがな" />
            </Link>
            <Link href="/kana" className={styles.link}>
              <ServiceButton title="Katakana" japaneseTitle="かたかな" />
            </Link>
            <Link href="/dictionary" className={styles.link}>
              <ServiceButton title="Dictionary" japaneseTitle="辞書" />
            </Link>
          </div>
        </div>
        <div className={styles.verticalContainer}>
          <Image src="/logo.svg" alt="logo" width={400} height={400} />
        </div>
      </div>
      <div className={styles.container}></div>
    </div>
  );
}
