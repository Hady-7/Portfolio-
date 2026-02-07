import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading.tsx";
import { ScrollReveal } from "../components/motion/ScrollReveal.tsx";
import { certifications } from "../data/portfolio.ts";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-20 py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            title="Certifications"
            subtitle="Relevant credentials and courses."
          />
        </ScrollReveal>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 grid-cols-1" role="list">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={i * 0.08}>
              <motion.li
                className="h-full flex"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Card className="card-base card-hover card-gradient-edge h-full w-full flex flex-col shadow-none p-0 overflow-hidden">
                  <CardBody className="px-6 py-6 flex flex-col justify-center min-h-[120px]">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                      {cert.issuer}
                    </p>
                  </CardBody>
                </Card>
              </motion.li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
