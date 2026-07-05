"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  z: number;
  r: number;
  tw: number;
  sp: number;
};

export default function BackgroundLayers() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orbARef = useRef<HTMLDivElement>(null);
  const orbBRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouse.current = { x, y };
      if (orbARef.current) orbARef.current.style.transform = `translate(${x * -22}px,${y * -22}px)`;
      if (orbBRef.current) orbBRef.current.style.transform = `translate(${x * 16}px,${y * 16}px)`;
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let dpr = 1;
    let stars: Star[] = [];
    let raf = 0;

    const reset = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.width = window.innerWidth * dpr;
      H = cv.height = window.innerHeight * dpr;
      const n = Math.round((window.innerWidth * window.innerHeight) / 5200);
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        z: Math.random(),
        r: (Math.random() * 1.3 + 0.3) * dpr,
        tw: Math.random() * Math.PI * 2,
        sp: Math.random() * 0.015 + 0.004,
      }));
    };

    reset();
    window.addEventListener("resize", reset);

    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      const sx = mouse.current.x * 30 * dpr;
      const sy = mouse.current.y * 30 * dpr;
      for (const s of stars) {
        s.tw += s.sp;
        const a = 0.35 + Math.abs(Math.sin(s.tw)) * 0.65;
        const px = s.x + sx * s.z;
        const py = s.y + sy * s.z;
        ctx.beginPath();
        ctx.arc(px, py, s.r * (0.6 + s.z * 0.7), 0, 7);
        ctx.fillStyle = `rgba(${(200 + s.z * 55) | 0},${(215 + s.z * 40) | 0},255,${a * (0.5 + s.z * 0.5)})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("resize", reset);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0 h-screen w-screen"
      />
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 12%,rgba(40,70,160,.18),transparent 70%),radial-gradient(45% 40% at 82% 78%,rgba(90,60,160,.13),transparent 70%),radial-gradient(40% 35% at 12% 70%,rgba(20,90,140,.1),transparent 70%)",
        }}
      />
      <div
        ref={orbARef}
        className="pointer-events-none fixed -left-[39vw] -top-[22vw] z-0 h-[78vw] w-[78vw] rounded-full border border-[rgba(170,190,230,.08)]"
        style={{ left: "50%", marginLeft: "-39vw", animation: "spin 120s linear infinite" }}
      />
      <div
        ref={orbBRef}
        className="pointer-events-none fixed -top-[10vw] z-0 h-[54vw] w-[54vw] rounded-full border border-[rgba(190,205,240,.06)]"
        style={{ left: "50%", marginLeft: "-27vw", animation: "spin-r 90s linear infinite" }}
      />
    </>
  );
}
