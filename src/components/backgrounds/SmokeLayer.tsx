"use client";
import { motion } from "framer-motion";

export function SmokeLayer() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      <motion.div
        className="absolute -top-40 left-[10%] h-[600px] w-[600px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.4 0.02 240 / 0.35), transparent 70%)" }}
        animate={{ x: [0, 80, -40, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[5%] h-[500px] w-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.32 0.01 240 / 0.4), transparent 70%)" }}
        animate={{ x: [0, -60, 30, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
