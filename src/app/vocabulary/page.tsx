"use client";
import { useState } from "react";
import styles from "./vocabulary.module.scss";
import Link from "next/link";

const Page = () => {
  const [downIndex, setDownIndex] = useState(0);
  const [upIndex, setUpIndex] = useState(0);

  return (
    <div className={styles.page}>
      <h1>Vocabulary Learning</h1>
      <div className={styles.container}>
        <h2>Word Index range</h2>
        <div className={styles.row}>
          <h3>from</h3>
          <input
            type="number"
            value={downIndex}
            onChange={(e) => setDownIndex(Number(e.target.value))}
          />
        </div>
        <div className={styles.row}>
          <h3>to</h3>
          <input
            type="number"
            value={upIndex}
            onChange={(e) => setUpIndex(Number(e.target.value))}
          />
        </div>
        <Link
          href={{
            pathname: "/vocabulary/grind",
            query: { downIndex: downIndex, upIndex: upIndex },
          }}
        >
          <button className={styles.grindButton}>GRIND</button>
        </Link>

        <Link href="/">
          <button className={styles.backButton}>BACK</button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
