import { useState, useCallback, useEffect } from "react";
import { Button, Input, Textarea } from "@heroui/react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionHeading } from "../components/SectionHeading.tsx";
import { ScrollReveal } from "../components/motion/ScrollReveal.tsx";
import { socialLinks } from "../data/portfolio.ts";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "";

type FormStatus = "idle" | "loading" | "success" | "error";

const initialForm = { name: "", email: "", message: "" };

function validateEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const VALIDATION = {
  nameMinLength: 2,
  nameMaxLength: 100,
  messageMinLength: 10,
  messageMaxLength: 2000,
} as const;

function validateForm(form: typeof initialForm): Partial<Record<keyof typeof initialForm, string>> {
  const errors: Partial<Record<keyof typeof initialForm, string>> = {};
  const name = form.name.trim();
  if (!name) errors.name = "Name is required";
  else if (name.length < VALIDATION.nameMinLength) errors.name = `Name must be at least ${VALIDATION.nameMinLength} characters`;
  else if (name.length > VALIDATION.nameMaxLength) errors.name = `Name must be at most ${VALIDATION.nameMaxLength} characters`;

  if (!form.email.trim()) errors.email = "Email is required";
  else if (!validateEmail(form.email)) errors.email = "Please enter a valid email address";

  const message = form.message.trim();
  if (!message) errors.message = "Message is required";
  else if (message.length < VALIDATION.messageMinLength) errors.message = `Message must be at least ${VALIDATION.messageMinLength} characters`;
  else if (message.length > VALIDATION.messageMaxLength) errors.message = `Message must be at most ${VALIDATION.messageMaxLength} characters`;

  return errors;
}

const inputClassNames = {
  base: "flex flex-col gap-1.5 w-full",
  label: "text-zinc-800 dark:text-zinc-200 font-medium text-sm mb-0 order-first",
  inputWrapper: [
    "border border-zinc-300 dark:border-zinc-600 rounded-lg min-h-[3.25rem]",
    "bg-white dark:bg-zinc-900/70",
    "data-[hover=true]:border-zinc-400 dark:data-[hover=true]:border-zinc-500",
    "group-data-[focus=true]:border-violet-500 dark:group-data-[focus=true]:border-violet-400",
    "group-data-[focus=true]:shadow-none",
    "transition-[border-color] duration-[200ms] ease-out",
  ].join(" "),
  input: "bg-transparent py-3.5 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-0 border-0",
  errorMessage: "text-red-600 dark:text-red-400 text-xs mt-1",
};

const iconClass = "size-5 shrink-0 text-zinc-500 dark:text-zinc-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200";

const SocialIcons: Record<string, React.ReactNode> = {
  linkedin: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  github: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  twitter: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof typeof initialForm, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }
  }, []);

  const updateField = useCallback((field: keyof typeof initialForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (status !== "idle") setStatus("idle");
  }, [status]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const nextErrors = validateForm(form);
      setErrors(nextErrors);
      if (Object.keys(nextErrors).length > 0) return;

      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        setStatus("error");
        setErrors({
          message:
            "Email service not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env (see .env.example), then restart the dev server.",
        });
        return;
      }

      setStatus("loading");
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
          },
          { publicKey: EMAILJS_PUBLIC_KEY }
        );
        setStatus("success");
        setForm(initialForm);
        setErrors({});
      } catch (err: unknown) {
        setStatus("error");
        const status = typeof err === "object" && err !== null && "status" in err ? (err as { status: number }).status : 0;
        let msg =
          status === 412
            ? "EmailJS 412 (Precondition Failed). Fix at dashboard.emailjs.com: 1) Account → add your origin (e.g. http://localhost:5173) to the allowlist; 2) Email Services → reconnect Gmail and enable “Send on your behalf”. Then try again."
            : typeof err === "object" && err !== null && "text" in err
              ? (err as { text: string }).text || "Something went wrong. Please try again or email directly."
              : err instanceof Error
                ? err.message
                : "Something went wrong. Please try again or email directly.";
        setErrors({ message: msg });
      }
    },
    [form]
  );

  const isDisabled = status === "loading";

  return (
    <section
      id="contact"
      className="scroll-mt-20 py-16 sm:py-24 section-alt relative"
    >
      <div className="section-divider absolute top-0 left-0 right-0" aria-hidden />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 relative">
        <ScrollReveal>
          <SectionHeading
            title="Contact"
            subtitle="Get in touch for opportunities or a chat."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start">
          <ScrollReveal delay={0.08}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
                <div className="space-y-2">
                  <Input
                    label="Name"
                    labelPlacement="outside-top"
                    placeholder="e.g. Jane Smith"
                    value={form.name}
                    onValueChange={(v) => updateField("name", v)}
                    isInvalid={!!errors.name}
                    errorMessage={errors.name}
                    isDisabled={isDisabled}
                    isRequired
                    variant="bordered"
                    maxLength={VALIDATION.nameMaxLength}
                    classNames={inputClassNames}
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    label="Email"
                    labelPlacement="outside-top"
                    placeholder="e.g. you@example.com"
                    value={form.email}
                    onValueChange={(v) => updateField("email", v)}
                    isInvalid={!!errors.email}
                    errorMessage={errors.email}
                    isDisabled={isDisabled}
                    isRequired
                    variant="bordered"
                    classNames={inputClassNames}
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    label="Message"
                    labelPlacement="outside-top"
                    placeholder="Type your message here…"
                    value={form.message}
                    onValueChange={(v) => updateField("message", v)}
                    isInvalid={!!errors.message}
                    errorMessage={errors.message}
                    isDisabled={isDisabled}
                    isRequired
                    variant="bordered"
                    minRows={4}
                    maxLength={VALIDATION.messageMaxLength}
                    classNames={{
                      ...inputClassNames,
                      inputWrapper: [
                        inputClassNames.inputWrapper,
                        "min-h-[8rem]",
                      ].join(" "),
                      input: "bg-transparent py-3.5 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-0 border-0",
                    }}
                  />
                </div>
                {status === "success" && (
                  <motion.p
                    className="text-green-600 dark:text-green-400 text-sm leading-relaxed"
                    role="status"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Message sent. I'll get back to you soon.
                  </motion.p>
                )}
                {status === "error" && errors.message && (
                  <motion.p
                    className="text-red-600 dark:text-red-400 text-sm leading-relaxed"
                    role="alert"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {errors.message}
                  </motion.p>
                )}
                <div className="pt-1">
                  <Button
                    type="submit"
                    color="primary"
                    size="lg"
                    radius="lg"
                    isLoading={isDisabled}
                    isDisabled={isDisabled}
                    className="w-full sm:w-auto min-w-[140px] font-medium py-3.5 rounded-3xl bg-violet-600 text-white hover:bg-violet-700 active:bg-violet-800 focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950 disabled:opacity-60 disabled:pointer-events-none transition-colors duration-[200ms] ease-out"
                  >
                    {status === "loading" ? "Sending…" : "Send message"}
                  </Button>
                </div>
              </form>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="lg:pt-0 lg:pl-8 lg:border-l border-zinc-200/80 dark:border-zinc-700/70 lg:min-w-[220px]">
              <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-6">
                Find me elsewhere
              </h3>
              <ul className="flex flex-col gap-4" role="list">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-zinc-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/30 rounded"
                    >
                      {SocialIcons[link.icon] ?? null}
                      <span className="underline-offset-2 group-hover:underline">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
