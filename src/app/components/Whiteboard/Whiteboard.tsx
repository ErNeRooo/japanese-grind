import { useEffect, useRef, useState } from "react";
import styles from "./Whiteboard.module.scss";

const Whiteboard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const buttons = buttonsRef.current;

    if (!canvas || !buttons) return;
    const parent = canvas.parentElement;

    if (!parent) return;

    // Function to update canvas and buttons position
    const updateCanvasAndButtons = () => {
      const parentWidth = parent.clientWidth;
      const size = parentWidth;

      const context = canvas.getContext("2d");
      if (!context) return;
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const canvasTop = canvas.getBoundingClientRect().bottom;

      // Resize the canvas
      canvas.width = size;
      canvas.height = size * 1.2;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size * 1.2}px`;

      // Resize the buttons
      buttons.style.width = `${size * 0.9}px`;
      buttons.style.bottom = `${canvasTop - size * 1.2 + 20}px`;

      // Restore the canvas drawing state
      context.putImageData(imageData, 0, 0);
      context.lineCap = "round";
      context.lineWidth = 3;

      const computedStyle = getComputedStyle(canvas);
      context.strokeStyle = computedStyle
        .getPropertyValue("--color-main-font")
        .trim();

      contextRef.current = context;
    };

    // Call the function on mount
    updateCanvasAndButtons();

    // Then observe resizing
    const resizeObserver = new ResizeObserver(updateCanvasAndButtons);
    resizeObserver.observe(parent);

    return () => resizeObserver.disconnect();
  }, []);

  const startDrawing = ({
    nativeEvent: { offsetX, offsetY },
  }: React.MouseEvent<HTMLCanvasElement>) => {
    contextRef.current?.beginPath();
    contextRef.current?.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const stopDrawing = () => {
    contextRef.current?.closePath();
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

  return (
    <div className={styles.Whiteboard}>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />

      <div className={styles.buttons} ref={buttonsRef}>
        <button className={styles.rejectButton} onClick={stopDrawing}>
          ❌
        </button>
        <button className={styles.button} onClick={stopDrawing}>
          🧹
        </button>
        <button className={styles.button} onClick={stopDrawing}>
          ↩️
        </button>
        <button className={styles.confirmButton} onClick={stopDrawing}>
          ✅
        </button>
      </div>
    </div>
  );
};

export default Whiteboard;
