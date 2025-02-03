"use client";
import { useState } from "react";
import styles from "./vocabulary.module.scss";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const [downIndex, setDownIndex] = useState(0);
  const [upIndex, setUpIndex] = useState(0);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Vocabulary Learning</h1>
      <div className={styles.container}>
        <div className={styles.row}>
          <Link href="/" className={styles.backLink}>
            <button className={styles.backButton}>
              <Image
                src="/back.svg"
                alt="back"
                layout="fill"
                objectFit="cover"
                className={styles.backIcon}
              />
            </button>
          </Link>
          <h2 className={styles.subtitle}>Create your study</h2>
        </div>

        <p>Choose the range of words you want to study!</p>

        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <label>from</label>
            <input
              type="number"
              value={downIndex}
              onChange={(e) => setDownIndex(Number(e.target.value))}
            />
          </div>

          <div className={styles.inputContainer}>
            <label>to</label>
            <input
              type="number"
              value={upIndex}
              onChange={(e) => setUpIndex(Number(e.target.value))}
            />
          </div>
        </div>
        <Link
          href={{
            pathname: "/vocabulary/grind",
            query: { downIndex: downIndex, upIndex: upIndex },
          }}
          className={styles.grindLink}
        >
          <button className={styles.grindButton}>GRIND</button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
