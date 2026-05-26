"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

type Spark = {
  id: number;
  left: number; // %
  top: number; // %
  size: number; // px
  dx: number; // travel x
  dy: number; // travel y
  delay: number;
  duration: number;
};

export function SparksLayer({
  count = 36,
  originX = 60,
  originY = 70,
  className,
}: {
  count?: number;
  originX?: number;
  originY?: number;
  className?: string;
}) {
  const sparks = useMemo<Spark[]>(() => {
    return Array.from({ length: count }).map((_, i) => {
      const angle = (Math.random() * Math.PI) - Math.PI / 2; // upward fan
      const distance = 80 + Math.random() * 260;
      return {
        id: i,
        left: originX + (Math.random() - 0.5) * 6,
        top: originY + (Math.random() - 0.5) * 4,
        size: 1 + Math.random() * 2.2,
        dx: Math.cos(angle) * distance,
        dy: -Math.abs(Math.sin(angle)) * distance - 60,
        delay: Math.random() * 4,
        duration: 1.4 + Math.random() * 2.2,
      };
    });
  }, [count, originX, originY]);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className ?? ""}`}
    >
      {sparks.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            background:
              "radial-gradient(circle, oklch(0.96 0.087 88 / 1) 0%, oklch(0.72 0.112 88 / 0.9) 45%, transparent 75%)",
            boxShadow:
              "0 0 6px oklch(0.82 0.112 88 / 0.8), 0 0 14px oklch(0.62 0.112 88 / 0.5)",
          }}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: [0, s.dx * 0.4, s.dx],
            y: [0, s.dy * 0.45, s.dy + 120],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: [0.16, 0.84, 0.44, 1],
            times: [0, 0.35, 1],
          }}
        />
      ))}
    </div>
  );
}
