"use client";
import { useState } from "react";
import styles from "./vocabulary.module.scss";
import Link from "next/link";
import BackButton from "../components/BackButton/BackButton";

const Page = () => {
  const [downIndex, setDownIndex] = useState(1);
  const [upIndex, setUpIndex] = useState(10);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Vocabulary Learning</h1>
      <div className={styles.container}>
        <div className={styles.row}>
          <BackButton routingPath="/" />
          <h2 className={styles.subtitle}>Create your study</h2>
        </div>

        <p className={styles.description}>
          Choose the range of words you want to study!
        </p>

        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <label>from</label>
            <input
              type="number"
              placeholder="1"
              onChange={(e) => setDownIndex(Number(e.target.value))}
            />
          </div>

          <div className={styles.inputContainer}>
            <label>to</label>
            <input
              type="number"
              placeholder="10"
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
