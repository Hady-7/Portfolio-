import { Card, CardBody, CardFooter, CardHeader, Button, Chip } from "@heroui/react";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading.tsx";
import { ScrollReveal } from "../components/motion/ScrollReveal.tsx";
import { projects } from "../data/portfolio.ts";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 py-16 sm:py-24 section-alt relative"
    >
      <div className="section-divider absolute top-0 left-0 right-0" aria-hidden />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 relative">
        <ScrollReveal>
          <SectionHeading
            title="Projects"
            subtitle="Selected work and side projects."
          />
        </ScrollReveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.08}>
              <motion.div
                className="h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Card className="card-base card-hover card-gradient-edge h-full flex flex-col shadow-none p-0 overflow-hidden">
                  {"image" in project && project.image ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full min-h-[10rem] overflow-hidden rounded-t-xl bg-zinc-100 dark:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-inset"
                      aria-label={`View ${project.title} live site`}
                    >
                      <img
                        src={project.image}
                        alt=""
                        className="h-40 w-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </a>
                  ) : null}
                  <CardHeader className="px-6 pt-6 pb-4 shrink-0">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {project.title}
                    </h3>
                  </CardHeader>
                  <CardBody className="px-6 pt-0 pb-4 flex-1 min-h-0">
                    <p className="prose-body text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <Chip key={t} size="sm" variant="flat" color="secondary" className="rounded-lg">
                          {t}
                        </Chip>
                      ))}
                    </div>
                  </CardBody>
                  <CardFooter className="px-6 pb-6 pt-0 gap-2 shrink-0">
                    <Button
                      as="a"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      variant="flat"
                      color="primary"
                      radius="lg"
                      className="font-medium py-3 rounded-3xl"
                    >
                      Live
                    </Button>

                  </CardFooter>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
