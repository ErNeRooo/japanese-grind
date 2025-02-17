import Word from "@/app/types/Word";
import BackButton from "../BackButton/BackButton";
import CardButton from "../CardButton/CardButton";
import CardMeaning from "../CardMeaning/CardMeaning";
import styles from "./CardFront.module.scss";
import LessonInfo from "@/app/types/LessonInfo";
import LessonInfoBar from "../LessonInfoBar/LessonInfoBar";
import { Dispatch, SetStateAction, useState } from "react";
import Whiteboard from "../Whiteboard/Whiteboard";
import IconButton from "../IconButton/IconButton";
import KanjiDrawing from "../KanjiDrawing/KanjiDrawing";

interface Props {
  currentWord: Word;
  lessonInfo: LessonInfo;
  kanjiDrawings: string[];
  turnCard: () => void;
  setKanjiDrawings: Dispatch<SetStateAction<string[]>>;
}

const CardFront = ({
  currentWord,
  lessonInfo,
  kanjiDrawings,
  turnCard,
  setKanjiDrawings,
}: Props) => {
  const [isWhiteboardVisible, setIsWhiteboardVisible] = useState(false);

  return (
    <div className={styles.CardFront}>
      <div className={styles.column}>
        <div className={styles.row}>
          <BackButton routingPath="/vocabulary" />

          <span className={styles.toRight}></span>
          <LessonInfoBar lessonInfo={lessonInfo} />
        </div>

        <CardMeaning currentWord={currentWord} />
      </div>

      <div className={styles.row}>
        {isWhiteboardVisible && (
          <Whiteboard
            setIsWhiteboardVisible={setIsWhiteboardVisible}
            setKanjiDrawings={setKanjiDrawings}
          />
        )}
      </div>

      <div className={styles.column}>
        <div className={styles.drawings}>
          {kanjiDrawings.map((kanjiDrawing, index) => (
            <KanjiDrawing key={index} path={kanjiDrawing} />
          ))}
        </div>
        <div className={styles.row}>
          {kanjiDrawings.length < 10 && (
            <IconButton
              iconPath="/draw.svg"
              className={styles.whiteboardButton}
              action={() => setIsWhiteboardVisible(true)}
            />
          )}
          {kanjiDrawings.length > 0 && (
            <IconButton
              iconPath="/backspace.svg"
              className={styles.whiteboardButton}
              action={() => setKanjiDrawings((prev) => prev.slice(0, -1))}
            />
          )}
        </div>
        <div className={styles.row}>
          <CardButton
            text="Check"
            style={styles.checkButton}
            action={turnCard}
          />
        </div>
      </div>
    </div>
  );
};

export default CardFront;
