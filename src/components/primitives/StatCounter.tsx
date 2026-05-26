"use client";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function StatCounter({
  value,
  label,
  unit,
  className,
}: {
  value: number;
  label: string;
  unit?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, value, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, mv, value]);

  return (
    <div ref={ref} className={cn("space-y-3", className)}>
      <div className="flex items-baseline gap-2">
        <motion.span className="font-display text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          {rounded}
        </motion.span>
        {unit && <span className="font-mono text-sm text-accent">{unit}</span>}
      </div>
      <div className="ember-rule w-12" />
      <div className="text-eyebrow">{label}</div>
    </div>
  );
}
