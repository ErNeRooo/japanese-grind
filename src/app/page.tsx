import ServiceButton from "./components/ServiceButton/ServiceButton";
import styles from "./page.module.sass";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Welcome to Japanese Grind</h1>
      <div className={styles.container}>
        <ServiceButton title="Vocabulary Learning" />
        <ServiceButton title="Kana Learning" />
      </div>
    </div>
  );
}
