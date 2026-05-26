"use client";
import { motion } from "framer-motion";

/** Slow, deep volumetric haze — multiple soft blobs at varied depths. */
export function AtmosphericHaze() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      <motion.div
        className="absolute -top-[10%] left-[5%] h-[700px] w-[900px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, oklch(0.32 0.015 240 / 0.55), transparent 70%)" }}
        animate={{ x: [0, 60, -40, 0], y: [0, 40, -20, 0], opacity: [0.7, 1, 0.85, 0.7] }}
        transition={{ duration: 70, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[20%] right-[-10%] h-[600px] w-[800px] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, oklch(0.38 0.02 240 / 0.4), transparent 70%)" }}
        animate={{ x: [0, -80, 30, 0], y: [0, -30, 50, 0], opacity: [0.6, 0.9, 0.7, 0.6] }}
        transition={{ duration: 90, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[20%] h-[800px] w-[1000px] rounded-full blur-[160px]"
        style={{ background: "radial-gradient(circle, oklch(0.18 0.01 240 / 0.7), transparent 70%)" }}
        animate={{ x: [0, 40, -60, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 80, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* warm weld-side ambient */}
      <motion.div
        className="absolute bottom-[10%] right-[15%] h-[500px] w-[600px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.099 88 / 0.18), transparent 70%)" }}
        animate={{ opacity: [0.5, 0.95, 0.6, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
