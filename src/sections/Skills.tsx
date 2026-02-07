import { Chip } from "@heroui/react";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading.tsx";
import { ScrollReveal } from "../components/motion/ScrollReveal.tsx";
import { skills } from "../data/portfolio.ts";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 py-16 sm:py-24 section-alt relative"
    >
      <div className="section-divider absolute top-0 left-0 right-0" aria-hidden />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 relative">
        <ScrollReveal>
          <SectionHeading
            title="Technologies & Skills"
            subtitle="Tools and practices I use day to day."
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.22,
                  delay: i * 0.02,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.03 }}
              >
                <Chip
                  variant="flat"
                  size="lg"
                  radius="lg"
                  className="font-medium border border-zinc-200/80 dark:border-zinc-700/80 bg-white/80 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 hover:border-violet-400/40 dark:hover:border-violet-400/40 hover:bg-violet-50/80 dark:hover:bg-violet-900/20 transition-colors duration-[200ms] ease-out"
                >
                  {skill}
                </Chip>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
