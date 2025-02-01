import Link from "next/link";
import ServiceButton from "./components/ServiceButton/ServiceButton";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.englishTitle}>Welcome to Japanese Grind</h1>
      <h1 className={styles.japaneseTitle}>{"日本のグラインドへようこそ"}</h1>
      <h1 className={styles.japaneseTitlee}>日本のグラインドへようこそ</h1>
      <div className={styles.container}>
        <Link href="/vocabulary" className={styles.link}>
          <ServiceButton title="Vocabulary Learning" />
        </Link>
        <Link href="/kana" className={styles.link}>
          <ServiceButton title="Kana Learning" />
        </Link>
        <Link href="/dictionary" className={styles.link}>
          <ServiceButton title="Dictionary" />
        </Link>
      </div>
    </div>
  );
}
