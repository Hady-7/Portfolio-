import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { Header } from "./components/Layout/Header.tsx";
import { Hero } from "./sections/Hero.tsx";
import { Experience } from "./sections/Experience.tsx";
import { Projects } from "./sections/Projects.tsx";
import { Skills } from "./sections/Skills.tsx";
import { Certifications } from "./sections/Certifications.tsx";
import { Contact } from "./sections/Contact.tsx";

function App() {
  return (
    <ThemeProvider>
      <HeroUIProvider>
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
          <Header />
          <main className="pt-3 pr-3">
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
            <Contact />
          </main>
        </div>
      </HeroUIProvider>
    </ThemeProvider>
  );
}

export default App;
