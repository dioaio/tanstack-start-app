"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

type Ember = {
  id: number;
  left: number;
  top: number;
  size: number;
  drift: number;
  rise: number;
  delay: number;
  duration: number;
  opacity: number;
};

export function EmberField({
  count = 40,
  className,
}: {
  count?: number;
  className?: string;
}) {
  const embers = useMemo<Ember[]>(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: 60 + Math.random() * 50,
      size: 0.8 + Math.random() * 1.8,
      drift: (Math.random() - 0.5) * 120,
      rise: -(180 + Math.random() * 320),
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 8,
      opacity: 0.35 + Math.random() * 0.45,
    }));
  }, [count]);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className ?? ""}`}
    >
      {embers.map((e) => (
        <motion.span
          key={e.id}
          className="absolute rounded-full"
          style={{
            left: `${e.left}%`,
            top: `${e.top}%`,
            width: e.size,
            height: e.size,
            background:
              "radial-gradient(circle, oklch(0.92 0.099 88 / 1) 0%, oklch(0.7 0.112 88 / 0.7) 50%, transparent 75%)",
            boxShadow:
              "0 0 4px oklch(0.78 0.112 88 / 0.6), 0 0 10px oklch(0.62 0.112 88 / 0.35)",
          }}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: [0, e.drift * 0.4, e.drift],
            y: [0, e.rise * 0.5, e.rise],
            opacity: [0, e.opacity, e.opacity * 0.6, 0],
          }}
          transition={{
            duration: e.duration,
            delay: e.delay,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.2, 0.7, 1],
          }}
        />
      ))}
    </div>
  );
}
