import { useEffect, useRef, useState } from "react";
import styles from "./Whiteboard.module.scss";
import IconButton from "../IconButton/IconButton";

interface Props {
  setIsWhiteboardVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Whiteboard = ({ setIsWhiteboardVisible }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [history, setHistory] = useState<ImageData[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const buttons = buttonsRef.current;

    if (!canvas || !buttons) return;
    const parent = canvas.parentElement;

    if (!parent) return;

    const updateCanvasAndButtons = () => {
      const parentWidth = parent.clientWidth;
      const width = parentWidth;
      const height = parentWidth * 1.2;

      const context = canvas.getContext("2d");
      if (!context) return;
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const canvasTop = canvas.getBoundingClientRect().bottom;

      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      buttons.style.width = `${width * 0.9}px`;
      buttons.style.bottom = `${canvasTop - height + 20}px`;

      context.putImageData(imageData, 0, 0);
      context.lineCap = "round";
      context.lineWidth = 3;

      const computedStyle = getComputedStyle(canvas);
      context.strokeStyle = computedStyle
        .getPropertyValue("--color-main-font")
        .trim();

      contextRef.current = context;
    };

    updateCanvasAndButtons();

    const resizeObserver = new ResizeObserver(updateCanvasAndButtons);
    resizeObserver.observe(parent);

    return () => resizeObserver.disconnect();
  }, []);

  const saveCanvasToHistory = () => {
    const context = contextRef.current;
    const canvas = canvasRef.current;
    if (!context || !canvas) return;

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    setHistory((prevHistory) => [...prevHistory, imageData]);
  };

  const startDrawing = ({
    nativeEvent: { offsetX, offsetY },
  }: React.MouseEvent<HTMLCanvasElement>) => {
    contextRef.current?.beginPath();
    contextRef.current?.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const stopDrawing = () => {
    contextRef.current?.closePath();

    saveCanvasToHistory();

    setIsDrawing(false);
  };

  const draw = ({
    nativeEvent: { offsetX, offsetY },
  }: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDrawing) {
      contextRef.current?.lineTo(offsetX, offsetY);
      contextRef.current?.stroke();
    }
  };

  const clear = () => {
    const context = contextRef.current;
    if (!context) return;

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  };

  const undo = () => {
    const context = contextRef.current;
    const canvas = canvasRef.current;
    if (!context || !canvas || history.length === 0) return;

    const newHistory = [...history];
    newHistory.pop();

    setHistory(newHistory);

    context.clearRect(0, 0, canvas.width, canvas.height);
    if (newHistory.length > 0) {
      const lastImageData = newHistory[newHistory.length - 1];
      context.putImageData(lastImageData, 0, 0);
    }
  };

  const cancel = () => {
    setIsWhiteboardVisible(false);
  };

  const confirm = () => {
    setIsWhiteboardVisible(false);
  };

  return (
    <div className={styles.Whiteboard}>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />

      <div className={styles.buttons} ref={buttonsRef}>
        <IconButton
          iconPath="/cancel.svg"
          className={styles.cancelButton}
          action={cancel}
        />
        <IconButton iconPath="/clear.svg" action={clear} />
        <IconButton iconPath="/undo.svg" action={undo} />
        <IconButton
          iconPath="/confirm.svg"
          className={styles.confirmButton}
          action={confirm}
        />
      </div>
    </div>
  );
};

export default Whiteboard;
