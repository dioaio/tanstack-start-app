"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FloatingGear({
  size = 120,
  rpm = 60,
  reverse = false,
  className,
  teeth = 12,
}: {
  size?: number;
  rpm?: number;
  reverse?: boolean;
  className?: string;
  teeth?: number;
}) {
  const r = 40;
  const toothH = 10;
  const innerR = 14;
  const toothPaths = Array.from({ length: teeth }).map((_, i) => {
    const a = (i * 360) / teeth;
    return (
      <rect
        key={i}
        x={50 - 4}
        y={50 - r - toothH}
        width={8}
        height={toothH}
        fill="currentColor"
        transform={`rotate(${a} 50 50)`}
      />
    );
  });

  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cn("absolute text-foreground/40", className)}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration: rpm, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="50" cy="50" r={r} fill="none" stroke="currentColor" strokeWidth="1.2" />
      {toothPaths}
      <circle cx="50" cy="50" r={r - 6} fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      <circle cx="50" cy="50" r={innerR} fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="50" cy="50" r="3" fill="currentColor" />
      {Array.from({ length: 6 }).map((_, i) => (
        <line
          key={i}
          x1="50"
          y1={50 - innerR}
          x2="50"
          y2={50 - r + 8}
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.4"
          transform={`rotate(${i * 60} 50 50)`}
        />
      ))}
    </motion.svg>
  );
}
