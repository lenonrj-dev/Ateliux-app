"use client";

import { LazyMotion, AnimatePresence, domAnimation, m, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

import { pageTransition, pageVariants } from "../motion/presets";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const scrollBehavior = reduceMotion ? "auto" : "smooth";
    window.scrollTo({ top: 0, behavior: scrollBehavior as ScrollBehavior });
  }, [pathname, reduceMotion]);

  if (!mounted) {
    return <main className="relative min-h-screen">{children}</main>;
  }

  const initialVariant = reduceMotion ? false : "initial";

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait" initial={false}>
        <m.main
          key={pathname}
          initial={initialVariant}
          animate="animate"
          exit="exit"
          variants={pageVariants(reduceMotion)}
          transition={pageTransition}
          className="relative min-h-screen"
        >
          {children}
        </m.main>
      </AnimatePresence>
    </LazyMotion>
  );
}
