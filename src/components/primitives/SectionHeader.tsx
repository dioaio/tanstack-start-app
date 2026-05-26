"use client";
import { motion } from "framer-motion";
import { Eyebrow } from "./Eyebrow";
import { reveal, revealStagger, viewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  number,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow?: string;
  number?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <motion.div
      variants={revealStagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={cn(
        "max-w-3xl space-y-6",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <motion.div variants={reveal} className={cn(align === "center" && "justify-center flex")}>
          <Eyebrow number={number}>{eyebrow}</Eyebrow>
        </motion.div>
      )}
      <motion.h2
        variants={reveal}
        className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl"
      >
        {title}
      </motion.h2>
      {lead && (
        <motion.p
          variants={reveal}
          className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {lead}
        </motion.p>
      )}
    </motion.div>
  );
}
