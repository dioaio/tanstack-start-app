"use client";
import { motion } from "framer-motion";

/** Multiple angled god-rays with drifting intensity — cinematic factory lighting. */
export function LightShafts() {
  const shafts = [
    { left: "12%", width: "22%", rotate: 6, delay: 0, opacity: 0.10, duration: 14 },
    { left: "38%", width: "16%", rotate: 4, delay: 2, opacity: 0.07, duration: 18 },
    { left: "62%", width: "26%", rotate: 8, delay: 1, opacity: 0.12, duration: 12 },
    { left: "82%", width: "18%", rotate: 5, delay: 3, opacity: 0.08, duration: 16 },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {shafts.map((s, i) => (
        <motion.div
          key={i}
          className="absolute -top-[20%] h-[160%]"
          style={{
            left: s.left,
            width: s.width,
            transform: `rotate(${s.rotate}deg)`,
            transformOrigin: "top center",
            background: `linear-gradient(180deg, oklch(1 0 0 / ${s.opacity}) 0%, oklch(1 0 0 / ${s.opacity * 0.4}) 30%, transparent 80%)`,
            filter: "blur(28px)",
          }}
          animate={{ opacity: [0.5, 1, 0.7, 0.9, 0.5] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
