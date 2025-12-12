import type { Transition, Variants } from "framer-motion";

export const baseEase: Transition["ease"] = [0.22, 1, 0.36, 1];

export const pageTransition: Transition = {
  duration: 0.55,
  ease: baseEase,
};

export const pageVariants = (reduceMotion = false): Variants =>
  reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { opacity: 0, y: 12, filter: "blur(4px)" },
        animate: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { ...pageTransition, filter: { duration: 0.4 } },
        },
        exit: { opacity: 0, y: -10, filter: "blur(6px)", transition: pageTransition },
      };

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
      ease: baseEase,
    },
  },
};

export const itemFadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: baseEase } },
};

export const hoverLift = { y: -2, scale: 1.01 };
export const tapPress = { scale: 0.98 };

export const softGlow = "shadow-[0_0_45px_-18px_rgba(0,223,255,0.9)]";
