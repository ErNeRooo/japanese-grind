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
              {"日本語のグラインドへようこそ"}
            </label>
          </div>

          <div className={styles.buttons}>
            <Link href="/vocabulary" className={styles.link}>
              <ServiceButton title="Vocabulary" japaneseTitle="語彙" />
            </Link>
            <a
              href="https://nihon-go-kaizen.web.app/kana"
              className={styles.link}
            >
              <ServiceButton title="Hiragana" japaneseTitle="ひらがな" />
            </a>
            <a
              href="https://nihon-go-kaizen.web.app/kana"
              className={styles.link}
            >
              <ServiceButton title="Katakana" japaneseTitle="かたかな" />
            </a>
            <a href="https://nihon-go-kaizen.web.app" className={styles.link}>
              <ServiceButton title="Dictionary" japaneseTitle="辞書" />
            </a>
          </div>
        </div>
        <div className={styles.verticalContainer}>
          <Image
            src="/japanese-grind.svg"
            alt="logo"
            height={700}
            width={500}
            className={styles.responsiveImage}
          />
        </div>
      </div>
      <div className={styles.container}></div>
    </div>
  );
}
