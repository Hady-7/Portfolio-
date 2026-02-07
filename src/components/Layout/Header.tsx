import { motion } from "framer-motion";
import { ThemeToggle } from "../ThemeToggle.tsx";
import { portfolio } from "../../data/portfolio.ts";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-zinc-200/80 dark:border-zinc-700/50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors duration-200 ease-out"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
    >
      <div className="mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#hero"
          className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-[200ms] ease-out"
        >
          {portfolio.name}
        </a>
        <nav className="hidden sm:flex items-center gap-1" aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 rounded-lg transition-colors duration-[200ms] ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/30"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
