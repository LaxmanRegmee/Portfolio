"use client";

import { ArrowRight, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  onChatClick: () => void;
}

// Experience data from Figma
const experience = [
  { year: "2026", company: "Notion", role: "Design Engineering Intern" },
  { year: "2025", company: "Bloomberg", role: "Software Engineering Intern" },
  { year: "2025", company: "1Password", role: "Product Design Intern" },
  { year: "2024", company: "Royal Bank of Canada", role: "Software Engineering Intern" },
  { year: "2023", company: "Onova", role: "Product Design + Engineering Intern" },
];

export function Hero({ onChatClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto max-w-[1360px] px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-6">
          {/* Left Column: Hero Content */}
          <div className="pt-12 lg:pt-20">
            {/* Main heading - Exact from Figma: "I'm Rachel, a product designer who engineers." */}
            <h1
              id="hero-heading"
              className="text-h1 text-primary mb-6 max-w-xl"
            >
              I&apos;m Rachel, a product designer
              <br />
              <span className="font-normal not-italic">who engineers.</span>
            </h1>

            {/* Subheading - Exact from Figma */}
            <p className="text-body text-secondary max-w-xl mb-10">
              I think deeply about people, products, and the spaces between them.
              Currently exploring the intersection of AI & hardware.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-16">
              <button
                onClick={onChatClick}
                className={cn(
                  "group flex items-center justify-center gap-2 rounded-sm bg-[var(--color-text-primary)] px-8 py-3",
                  "text-button font-normal text-white hover:bg-[var(--color-text-accent)]",
                  "transition-all duration-200 focus-visible:outline-none",
                  "focus-visible:ring-2 focus-visible:ring-[var(--color-text-accent)] focus-visible:ring-offset-2",
                )}
                aria-label="Start chatting with my AI assistant"
              >
                <MessageSquare className="h-5 w-5" aria-hidden="true" />
                <span className="text-button uppercase">RacheLLM</span>
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>

              <a
                href="#work"
                className={cn(
                  "flex items-center justify-center gap-2 rounded-sm border border-[var(--color-text-primary)]",
                  "px-8 py-3 text-button font-normal text-[var(--color-text-primary)]",
                  "hover:bg-[var(--color-bg-tertiary)]",
                  "transition-all duration-200 focus-visible:outline-none",
                  "focus-visible:ring-2 focus-visible:ring-[var(--color-text-accent)] focus-visible:ring-offset-2",
                )}
              >
                <span className="uppercase">View Work</span>
                <ArrowRight
                  className="h-5 w-5 transition-transform hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* Right Column: Experience Timeline */}
          <div className="hidden lg:block pt-12 lg:pt-20">
            <div className="space-y-7">
              {experience.map((exp, index) => (
                <div
                  key={exp.year}
                  className="flex items-center gap-4 pb-4 last:pb-0 border-b border-[var(--color-border-light)]"
                >
                  <span className="text-h4 font-medium text-primary w-24 shrink-0 uppercase">
                    {exp.year}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-h4 font-medium text-primary truncate">
                      {exp.company}
                    </p>
                    <p className="text-body text-secondary truncate">
                      {exp.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}