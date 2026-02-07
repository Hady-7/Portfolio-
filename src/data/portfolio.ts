export const portfolio = {
  name: "Hady Hesham",
  title: "Senior Front-End Developer",
  summary:
    "Software Engineer with a track record in E-commerce, Government, Startups, and Education. Proficient in HTML, CSS, JavaScript, Angular, and React with expertise in responsive design, cross-browser compatibility, and user experience. Strong collaboration and problem-solving skills, committed to delivering high-quality, visually appealing user experiences.",
  ctaPrimary: "View my work",
  ctaSecondary: "Get in touch",
} as const;

export const experience = [
  {
    id: "1",
    company: "Binder",
    roles: [
      {
        role: "Senior Front-End Developer",
        period: "Oct 2025 – Present",
        bullets: [
          "Drive performance optimization across the app and ERP systems for scalability under growing usage.",
          "Launch and lead frontend development of an RMS built as a SaaS solution, from initial setup to core feature delivery.",
          "Lead and mentor frontend developers through code reviews and technical guidance.",
          "Work cross-functionally to ship scalable, user-focused solutions.",
        ],
        tags: ["Angular", "RxJS", "TypeScript", "SaaS", "Responsive" , "Tailwind CSS" ],
      },
      {
        role: "Front-End Developer",
        period: "Apr 2024 – Oct 2025",
        bullets: [
          "Develop responsive user interfaces for ERP systems.",
          "Collaborate with designers and back-end teams for seamless app and ERP integration.",
          "Integrate front-end with APIs for ERP functionalities.",
          "Optimize app and ERP performance for speed and scalability.",
          "Build and maintain core features (search, filtering, procurement workflows).",
          "Test and debug ERP system issues; ensure cross-platform compatibility and accessibility on mobile and web.",
        ],
        tags: ["Angular", "RxJS", "TypeScript", "Tailwind CSS" ,"ERP", "APIs" , "Prime NG"],
      },
    ],
    tags: ["React", "TypeScript", "ERP", "APIs", "Responsive"],
  },
  {
    id: "2",
    role: "Front-End Developer",
    company: "VIJUA",
    period: "Apr 2022 – Apr 2024",
    bullets: [
      "Architect and develop scalable, performant web applications.",
      "Design and format ebooks with Figma and Calibre for multiple platforms.",
      "Build responsive, mobile-first interfaces.",
      "Drive coding standards, code reviews, and automated testing.",
      "Collaborate with UX/UI and back-end teams; conduct performance optimizations and participate in Agile processes.",
    ],
    tags: ["React", "Javascript", "Figma", "Calibre", "Responsive", "Agile"],
  },
  {
    id: "4",
    role: "Front-End Developer",
    company: "Vega Data",
    period: "Oct 2021 – Apr 2022",
    bullets: [
      "Create interactive data visualizations with HTML, CSS, and JavaScript.",
      "Build responsive interfaces for data analysis tools.",
      "Render complex data into dynamic visual representations; optimize for performance and integrate with back-end systems.",
      "Conduct code reviews and collaborate with UX designers.",
    ],
    tags: ["React", "JavaScript", "Chart JS", "Visualization"],
  },
  {
    id: "5",
    role: "Front-End Developer",
    company: "SEJALL84",
    period: "Apr 2021 – Oct 2021",
    bullets: [
      "Translate design concepts into functional UIs with HTML, CSS, and JavaScript.",
      "Develop responsive, mobile-friendly websites.",
      "Ensure cross-browser compatibility, optimize performance, and implement interactive features and animations.",
      "Collaborate with back-end developers and stakeholders for seamless delivery.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Responsive" , "Bootstrap"],
  },
] as const;

export const projects = [
  {
    id: "1",
    title: "Binder",
    description:
      "Binder is a B2B procurement and supply-chain platform operating in Saudi Arabia, built to help small and medium-sized enterprises (SMEs) streamline and optimize their purchasing. It connects businesses directly with product and service suppliers, creating an efficient trading ecosystem with integrated ERP-style workflows. The platform supports sourcing, ordering, and procurement management so companies can reduce costs, improve visibility, and scale their operations with a single, user-focused SaaS experience.",
    tech: ["React", "TypeScript", "ERP", "SaaS"],
    liveUrl: "https://binder-sa.com/",
    image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fbinder-sa.com%2F/opengraph/",
  },
  {
    id: "2",
    title: "Kotobee",
    description:
      "Kotobee is a full suite for creating, publishing, and reading interactive ebooks and digital content. Kotobee Author lets authors and publishers design rich ebooks with multimedia, quizzes, and custom layouts; Kotobee Publisher turns them into web-ready or app-ready outputs. The platform supports multiple formats and devices so educators, enterprises, and publishers can deliver engaging, interactive learning and reading experiences.",
    tech: ["Web", "Ebooks", "Interactive content"],
    liveUrl: "https://www.kotobee.com/",
    image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fwww.kotobee.com%2F/opengraph/",
  },
  {
    id: "3",
    title: "LinkTalent",
    description:
      "LinkTalent is an HR and talent-management platform that helps organizations maximize workforce productivity and digital engagement. It streamlines hiring, onboarding, and personnel workflows in one place while keeping a consistent, user-friendly experience across the app. The product focuses on connecting teams with the right talent and tools so companies can scale their people operations efficiently.",
    tech: ["React", "Mobile", "HR Management" , "Tailwind CSS"],
    liveUrl: "https://www.linktalent.io/",
    image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fwww.linktalent.io%2F/opengraph/",
  },
] as const;

export const skills = [
  "Angular",
  "React",
  "TypeScript",
  "JavaScript (ESNext)",
  "HTML5",
  "CSS3",
  "SCSS",
  "RxJS",
  "NgRx",
  "REST API",
  "Tailwind CSS",
  "Bootstrap",
  "PrimeNG",
  "Responsive Design",
  "Git & GitHub",
  "Component-Based Architecture",
  "Reusable UI Components",
  "Agile/Scrum",
] as const;

export const certifications = [
  { name: "Web Design for Everybody: Basics of Web Development & Coding Specialization", issuer: "Coursera – Meta" },
  { name: "Foundations of User Experience (UX) Design", issuer: "Coursera – Google" },
  { name: "Web Design for Everybody: Basics of Web Development & Coding", issuer: "Coursera – University of Michigan" },
  { name: "React (Basic)", issuer: "HackerRank" },
  { name: "Diploma in Frontend and Cross-Platform Mobile Application", issuer: "Information Technology Institute (ITI)" },
  { name: "Diploma in Web Development using Angular and Node.js", issuer: "National Telecommunications Institute (NTI)" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hady-hesham-011084159/", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/Hady-7", icon: "github" },
] as const;
