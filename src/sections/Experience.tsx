import { Card, CardBody, CardHeader, Chip } from "@heroui/react";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading.tsx";
import { ScrollReveal } from "../components/motion/ScrollReveal.tsx";
import { experience } from "../data/portfolio.ts";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            title="Experience"
            subtitle="Roles and impact over the years."
          />
        </ScrollReveal>
        <ul className="grid gap-6 sm:grid-cols-1" role="list">
          {experience.map((job, i) => (
            <ScrollReveal key={job.id} delay={i * 0.06}>
              <motion.li
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="h-full"
              >
                <Card className="card-base card-hover card-gradient-edge h-full shadow-none p-0 overflow-hidden">
                  <CardHeader className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 px-6 pt-6 pb-4">
                    <div className="min-w-0 flex-1">
                      {"roles" in job && job.roles?.length ? (
                        <>
                          <p className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
                            {job.company}
                          </p>
                          {/* <div className="mt-1.5 flex flex-wrap items-baseline gap-x-2 sm:block">
                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                              {job.roles[0].role}
                            </h3>
                            <span className="text-sm text-violet-600 dark:text-violet-400 font-medium sm:hidden">
                              {job.roles[0].period}
                            </span>
                          </div> */}
                        </>
                      ) : "role" in job ? (
                        <>
                          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                            {job.role}
                          </h3>
                          <p className="text-sm font-bold text-zinc-700 dark:text-zinc-300 mt-0.5">
                            {job.company}
                          </p>
                          <span className="text-sm text-violet-600 dark:text-violet-400 font-medium whitespace-nowrap shrink-0 block mt-1 sm:hidden">
                            {job.period}
                          </span>
                        </>
                      ) : null}
                    </div>
                    {"roles" in job && job.roles?.length ? (
                      <span className="text-sm text-violet-600 dark:text-violet-400 font-medium whitespace-nowrap shrink-0 hidden sm:block">
                        {/* {job.roles[0].period} */}
                      </span>
                    ) : "period" in job ? (
                      <span className="text-sm text-violet-600 dark:text-violet-400 font-medium whitespace-nowrap shrink-0 hidden sm:block">
                        {job.period}
                      </span>
                    ) : null}
                  </CardHeader>
                  <CardBody className="px-6 pt-0 pb-6 flex flex-col">
                    {"roles" in job && job.roles?.some((r) => "bullets" in r && r.bullets?.length) ? (
                      <div className="space-y-5 mb-4">
                        {job.roles.map((r) =>
                          "bullets" in r && r.bullets?.length ? (
                            <div key={r.role}>
                              <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5 mb-2">
                                <p className="text-md  font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                                  {r.role}
                                </p>
                                <span className="text-xs text-violet-600 dark:text-violet-400 font-medium whitespace-nowrap">
                                  {r.period}
                                </span>
                              </div>
                              <ul className="list-disc list-inside space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                                {r.bullets.map((b, idx) => (
                                  <li key={idx}>{b}</li>
                                ))}
                              </ul>
                              {"tags" in r && r.tags?.length ? (
                                <div className="flex flex-wrap gap-2">
                                  {r.tags.map((tag) => (
                                    <Chip key={tag} size="sm" variant="flat" className="rounded-lg">
                                      {tag}
                                    </Chip>
                                  ))}
                                </div>
                              ) : null}
                            </div>
                          ) : null
                        )}
                      </div>
                    ) : "bullets" in job && job.bullets?.length ? (
                      <>
                        <ul className="list-disc list-inside space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                          {job.bullets.map((b, idx) => (
                            <li key={idx}>{b}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {job.tags.map((tag) => (
                            <Chip key={tag} size="sm" variant="flat" className="rounded-lg">
                              {tag}
                            </Chip>
                          ))}
                        </div>
                      </>
                    ) : null}
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
