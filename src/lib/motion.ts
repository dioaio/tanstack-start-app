import type { Variants, Transition } from "framer-motion";

// Industrial easings — weighty, restrained. No bounce.
export const easeIndustrial: Transition["ease"] = [0.22, 1, 0.36, 1];
export const easeTransition: Transition["ease"] = [0.65, 0, 0.35, 1];

export const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeIndustrial },
  },
};

export const revealStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: easeIndustrial } },
};

export const drawLine: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.1, ease: easeIndustrial },
  },
};

export const viewport = { once: true, margin: "-80px" } as const;
