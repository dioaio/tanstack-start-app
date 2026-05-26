"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeIndustrial } from "@/lib/motion";

export function WireframeBlock({ className }: { className?: string }) {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 200 160"
      className={cn("absolute text-accent/40", className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: easeIndustrial }}
    >
      {/* isometric cube */}
      <g fill="none" stroke="currentColor" strokeWidth="0.8">
        <polygon points="100,20 170,60 170,130 100,170 30,130 30,60" />
        <line x1="100" y1="20" x2="100" y2="95" />
        <line x1="100" y1="95" x2="30" y2="60" />
        <line x1="100" y1="95" x2="170" y2="60" />
        <line x1="100" y1="95" x2="100" y2="170" />
      </g>
      <g stroke="currentColor" strokeWidth="0.4" opacity="0.5">
        <line x1="100" y1="10" x2="100" y2="20" strokeDasharray="2 2" />
        <text x="105" y="14" fontSize="5" fill="currentColor" fontFamily="monospace">A1</text>
        <line x1="180" y1="60" x2="190" y2="60" strokeDasharray="2 2" />
      </g>
    </motion.svg>
  );
}
