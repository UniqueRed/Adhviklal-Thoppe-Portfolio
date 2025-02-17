"use client";

import { useEffect, useRef } from "react";

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<number[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const columns = Math.floor(canvas.width / 20);
      dropsRef.current = Array(columns).fill(1);
    };

    setCanvasSize();

    const binary = "01";

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
      ctx.font = "15px monospace";

      for (let i = 0; i < dropsRef.current.length; i++) {
        const text = binary[Math.floor(Math.random() * binary.length)];
        ctx.fillText(text, i * 20, dropsRef.current[i] * 20);

        if (dropsRef.current[i] * 20 > canvas.height && Math.random() > 0.975) {
          dropsRef.current[i] = 0;
        }

        dropsRef.current[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    window.addEventListener("resize", setCanvasSize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
    />
  );
};

export default MatrixRain;