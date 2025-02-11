"use client";
import { useForm } from "react-hook-form";
import styles from "./vocabulary.module.scss";
import BackButton from "../components/BackButton/BackButton";
import { useRouter } from "next/navigation";

type FormData = {
  downIndex: number;
  upIndex: number;
};

const Page = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      downIndex: 1,
      upIndex: 10,
    },
  });
  const router = useRouter();

  const onSubmit = ({ downIndex, upIndex }: FormData) => {
    router.push(`/vocabulary/grind?downIndex=${downIndex}&upIndex=${upIndex}`);
  };

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

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.row}>
            <div className={styles.inputContainer}>
              <label>from</label>
              <input
                type="number"
                placeholder="1"
                {...register("downIndex", {
                  valueAsNumber: true,
                  required: true,
                })}
              />
            </div>

            <div className={styles.inputContainer}>
              <label>to</label>
              <input
                type="number"
                placeholder="10"
                {...register("upIndex", {
                  valueAsNumber: true,
                  required: true,
                })}
              />
            </div>
          </div>
          <div className={styles.grindLink}>
            <button type="submit" className={styles.grindButton}>
              GRIND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
