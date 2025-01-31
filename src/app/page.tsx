import Link from "next/link";
import ServiceButton from "./components/ServiceButton/ServiceButton";
import styles from "./page.module.sass";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Welcome to Japanese Grind</h1>
      <div className={styles.container}>
        <Link href="/vocabulary">
          <ServiceButton title="Vocabulary Learning" />
        </Link>
        <Link href="/kana">
          <ServiceButton title="Kana Learning" />
        </Link>
      </div>
    </div>
  );
}
