"use client";

import { cn } from "@/lib/utils";

// Experience data from Figma
const experience = [
  { year: "2026", company: "Notion", role: "Design Engineering Intern" },
  { year: "2025", company: "Bloomberg", role: "Software Engineering Intern" },
  { year: "2025", company: "1Password", role: "Product Design Intern" },
  {
    year: "2024",
    company: "Royal Bank of Canada",
    role: "Software Engineering Intern",
  },
  {
    year: "2023",
    company: "Onova",
    role: "Product Design + Engineering Intern",
  },
];

export function Hero({ onChatClick }: { onChatClick: () => void }) {
  return (
    <section id="hero" className="px-0 w-full" aria-labelledby="hero-heading">
      <div className="flex w-full flex-col laptop:flex-row gap-x-6 gap-y-6 pt-8 laptop:pt-[208px] pb-[32px]">
        {/* Left Column: Title/Heading - Exact Figma: w-[668px] on desktop, full width on mobile */}
        <div className="w-full laptop:w-[668px] flex flex-col items-start shrink-0">
          <h1
            id="hero-heading"
            className=" w-full text-[40px] leading-[44px] laptop:text-[56px] laptop:leading-[61.6px] tracking-[-1.12px] max-w-175 font-hero"
          >
            <span className="not-italic">
              I&apos;m Laxman, a product designer who{" "}
            </span>
            <span className="italic">engineers</span>
            <span className="not-italic">.</span>
          </h1>
        </div>

        {/* Right Column: Experience Timeline - Exact Figma: min-w-[668px], gap-[4px] */}
        <div className="w-full laptop:flex-1 flex flex-col gap-1">
          {experience.map((exp, index) => (
            <div
              key={`${exp.year}-${exp.company}-${index}`}
              className="flex items-start gap-2 w-full"
            >
              {/* Year - Exact Figma: w-[110px], Geist Mono, 15px, uppercase, secondary */}
              <p className=" m-0 w-26 min-26 shrink-0 text-[15px] leading-[22.5px] font-normal text-secondary uppercase font-mono">
                {exp.year}
              </p>
              {/* Company & Role - Exact Figma: flex-[1_0_0], gap-[8px], items-center, min-w-[400px] */}
              <div className="flex w-full flex-1 flex-col items-start gap-0.5 max-w-[400px] laptop:flex-row laptop:items-center laptop:gap-2">
                {/* Company - Exact Figma: w-[228px], Geist, 15px, primary */}
                <p className="m-0 w-full max-w-57 shrink-0 text-[15px] leading-[22.5px] font-normal text-primary whitespace-nowrap font-sans">
                  {exp.company}
                </p>
                {/* Role - Exact Figma: Geist, 15px, secondary, whitespace-nowrap */}
                <p className="m-0 text-[15px]  w-full leading-[22.5px] font-normal text-secondary whitespace-nowrap font-sans">
                  {exp.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
