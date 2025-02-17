"use client";

import { useEffect, useRef } from "react";

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<number[]>([]); // Store drops persistently

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const columns = Math.floor(canvas.width / 20);
      dropsRef.current = Array(columns).fill(1); // Reset drops on resize
    };

    // Set initial size
    setCanvasSize();

    // Binary characters
    const binary = "01";

    // Draw function
    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Dark overlay
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(255, 255, 255, 0.2)"; // Green color with reduced opacity
      ctx.font = "15px monospace";

      // Loop through drops
      for (let i = 0; i < dropsRef.current.length; i++) {
        const text = binary[Math.floor(Math.random() * binary.length)];
        ctx.fillText(text, i * 20, dropsRef.current[i] * 20);

        if (dropsRef.current[i] * 20 > canvas.height && Math.random() > 0.975) {
          dropsRef.current[i] = 0;
        }

        dropsRef.current[i]++;
      }
    };

    // Animation loop
    const interval = setInterval(draw, 50);

    // Resize event listener
    window.addEventListener("resize", setCanvasSize);

    // Cleanup
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