"use client";
import { motion } from "framer-motion";

export function GiamLogoReveal({ className }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center gap-3 ${className ?? ""}`}>
      {/* Mark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, filter: "blur(6px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="relative grid h-10 w-10 place-items-center border border-border-strong bg-surface-raised shadow-inset-edge"
      >
        <span className="font-display text-base font-black tracking-tight text-foreground">G</span>
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, transparent 35%, oklch(1 0 0 / 0.55) 50%, transparent 65%)",
          }}
          initial={{ x: "-120%" }}
          animate={{ x: "120%" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        />
        <span className="absolute -inset-px border border-accent/30" />
      </motion.div>

      {/* Wordmark with metallic sheen sweep */}
      <div className="relative overflow-hidden">
        <motion.span
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="relative block font-display text-xl font-black uppercase tracking-[0.18em] text-foreground"
        >
          GIAM
          <span className="ml-1 text-accent">SAC</span>
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, transparent 40%, oklch(1 0 0 / 0.7) 50%, transparent 60%)",
              mixBlendMode: "overlay",
            }}
            initial={{ x: "-120%" }}
            animate={{ x: "120%" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
          />
        </motion.span>
      </div>

      {/* subtle glow under */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -inset-4 -z-10 rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.118 88 / 0.18), transparent 70%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.8 }}
      />
    </div>
  );
}
