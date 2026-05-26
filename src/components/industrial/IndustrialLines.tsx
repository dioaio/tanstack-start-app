"use client";
import { motion } from "framer-motion";
import { drawLine, viewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function IndustrialLines({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-x-0", className)}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="h-px origin-left bg-border"
          variants={drawLine}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ delay: i * 0.15 }}
          style={{ marginTop: i === 0 ? 0 : 32 }}
        />
      ))}
    </div>
  );
}
