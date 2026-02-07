import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio.ts";
import { Stagger, StaggerItem } from "../components/motion/Stagger.tsx";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 py-16 sm:py-24 overflow-hidden gradient-mesh"
      aria-label="Introduction"
    >
      <div className="hero-bg" aria-hidden />
      {/* Animated background orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <div
          className="absolute w-[min(80vw,500px)] h-[min(80vw,500px)] rounded-full bg-violet-400/20 dark:bg-violet-500/25 blur-[100px] -top-1/4 -left-1/4"
          style={{ animation: "hero-float-1 18s ease-in-out infinite" }}
        />
        <div
          className="absolute w-[min(60vw,380px)] h-[min(60vw,380px)] rounded-full bg-fuchsia-400/15 dark:bg-fuchsia-500/20 blur-[80px] top-1/2 -right-1/4"
          style={{ animation: "hero-float-2 22s ease-in-out infinite" }}
        />
        <div
          className="absolute w-[min(50vw,320px)] h-[min(50vw,320px)] rounded-full bg-indigo-400/15 dark:bg-indigo-500/20 blur-[90px] bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3"
          style={{ animation: "hero-float-3 20s ease-in-out infinite" }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-violet-500/10 dark:bg-violet-400/15 blur-[60px] top-1/3 right-1/3"
          animate={{
            x: [0, 25, -15, 0],
            y: [0, -20, 20, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-3xl text-center relative z-10">
        <Stagger staggerDelay={0.12} delayChildren={0.15}>
          <StaggerItem>
            <p className="text-sm font-medium text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-4">
              Senior Frontend Developer
            </p>
          </StaggerItem>
          <StaggerItem>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
              Hi, I'm{" "}
              <span className="text-violet-600 dark:text-violet-400">
                {portfolio.name}
              </span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              {portfolio.summary}
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                as="a"
                href="#projects"
                color="primary"
                size="lg"
                radius="lg"
                className="min-w-[160px] py-3 font-medium transition-transform hover:scale-[1.02] active:scale-100"
              >
                {portfolio.ctaPrimary}
              </Button>
              <Button
                as="a"
                href="#contact"
                variant="bordered"
                size="lg"
                radius="lg"
                className="min-w-[160px] py-3 font-medium border-2 border-violet-500/50 dark:border-violet-400/50 text-violet-600 dark:text-violet-400 hover:bg-violet-500/10 dark:hover:bg-violet-400/10 transition-all hover:scale-105 active:scale-100"
              >
                {portfolio.ctaSecondary}
              </Button>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
