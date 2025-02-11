"use client";
import { useForm } from "react-hook-form";
import styles from "./vocabulary.module.scss";
import BackButton from "../components/BackButton/BackButton";
import { useRouter } from "next/navigation";
import ErrorMessages from "../components/ErrorMessages/ErrorMessage";

type FormData = {
  downIndex: number;
  upIndex: number;
};

const Page = () => {
  const { register, getValues, handleSubmit, formState } = useForm({
    defaultValues: {
      downIndex: 1,
      upIndex: 10,
    },
  });
  const router = useRouter();

  console.log(formState.errors);

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
                {...register("downIndex", {
                  valueAsNumber: true,
                  required: { value: true, message: "This field is required" },
                  min: { value: 1, message: "Min value is 1" },
                  max: { value: 4458, message: "Max value is 4458" },
                  validate: (value) =>
                    value <= getValues("upIndex") ||
                    "Min must be equal or lower than Max",
                })}
              />
            </div>

            <div className={styles.inputContainer}>
              <label>to</label>
              <input
                type="number"
                {...register("upIndex", {
                  required: { value: true, message: "This field is required" },
                  min: { value: 1, message: "Min value is 1" },
                  max: { value: 4458, message: "Max value is 4458" },
                  validate: (value) =>
                    value >= getValues("downIndex") ||
                    "Min must be equal or lower than Max",
                })}
              />
            </div>
          </div>

          <div className={styles.errors}>
            <ErrorMessages error={formState.errors.downIndex} />
            <ErrorMessages error={formState.errors.upIndex} />
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
