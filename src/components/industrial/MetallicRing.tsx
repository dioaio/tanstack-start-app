"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MetallicRing({
  size = 240,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cn("absolute text-foreground/30", className)}
      animate={{ rotate: 360 }}
      transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 3" />
      <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1 2" />
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1="50"
          y1="2"
          x2="50"
          y2="6"
          stroke="currentColor"
          strokeWidth="0.5"
          transform={`rotate(${i * 15} 50 50)`}
        />
      ))}
    </motion.svg>
  );
}
