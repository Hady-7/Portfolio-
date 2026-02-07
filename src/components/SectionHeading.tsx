import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export function SectionHeading({ title, subtitle, children }: SectionHeadingProps) {
  return (
    <header className="mb-10 md:mb-14">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      <div className="section-heading-accent mt-2" aria-hidden />
      {subtitle && (
        <p className="mt-2 text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      {children}
    </header>
  );
}
