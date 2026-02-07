import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { useTheme } from "../context/ThemeContext.tsx";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        isIconOnly
        variant="flat"
        radius="lg"
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        onPress={toggleTheme}
        className="min-w-10 min-h-11 py-2.5 rounded-3xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 disabled:opacity-60 transition-colors"
      >
        {theme === "dark" ? (
          <span className="text-lg" aria-hidden>☀️</span>
        ) : (
          <span className="text-lg" aria-hidden>🌙</span>
        )}
      </Button>
    </motion.div>
  );
}
