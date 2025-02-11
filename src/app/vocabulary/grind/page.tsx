"use client";
import styles from "./grind.module.scss";
import { Suspense } from "react";
import {
  CardGrindLesson,
  useCardGrindLesson,
} from "@/app/hooks/useCardGrindLesson";
import LessonFinished from "@/app/components/LessonFinished/LessonFinished";
import Card from "@/app/components/Card/Card";

const Page = () => {
  return (
    <Suspense>
      <GrindPage />
    </Suspense>
  );
};

const GrindPage = () => {
  const {
    isLoading,
    isChecked,
    currentWord,
    lessonInfo,
    setLessonInfo,
    turnCard,
    correctClick,
    mistakeClick,
  }: CardGrindLesson = useCardGrindLesson();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {isLoading ? (
          <h1 className={styles.loading}>Loading...</h1>
        ) : (
          <>
            {currentWord == undefined ? (
              <LessonFinished
                routingPath="/vocabulary"
                lessonDurationInSeconds={lessonInfo.passedTimeInSeconds}
              />
            ) : (
              <Card
                isChecked={isChecked}
                currentWord={currentWord}
                lessonInfo={lessonInfo}
                setLessonInfo={setLessonInfo}
                turnCard={turnCard}
                correctClick={correctClick}
                mistakeClick={mistakeClick}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
