"use client";

import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  onChatClick: () => void;
}

export function Hero({ onChatClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-neutral-950 via-neutral-900 to-neutral-950" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23ffffff' fillOpacity='0.4'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-4 py-1.5 mb-8">
            <Sparkles className="h-4 w-4 text-accent-400" aria-hidden="true" />
            <span className="text-sm font-medium text-accent-300">
              Product & UI/UX Designer
            </span>
          </div>

          {/* Main heading */}
          <h1
            id="hero-heading"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-100 tracking-tight mb-6"
          >
            Shaping ideas into
            <br />
            <span className="text-accent-400">product</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            I'm Laxman Regmi — a designer who transforms complex problems into
            intuitive, beautiful products. Let's build something meaningful
            together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onChatClick}
              className={cn(
                "group flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-8 py-4",
                "text-base font-semibold text-neutral-950 hover:bg-accent-400",
                "transition-all duration-200 focus-visible:outline-none",
                "focus-visible:ring-2 focus-visible:ring-accent-500",
                "focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
              )}
              aria-label="Start chatting with my AI assistant"
            >
              <MessageSquare className="h-5 w-5" aria-hidden="true" />
              <span>Chat with my AI</span>
              <ArrowRight
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>

            <a
              href="#work"
              className={cn(
                "flex items-center justify-center gap-2 rounded-lg border border-neutral-700",
                "px-8 py-4 text-base font-semibold text-neutral-100",
                "hover:bg-neutral-800 hover:border-neutral-600",
                "transition-all duration-200 focus-visible:outline-none",
                "focus-visible:ring-2 focus-visible:ring-accent-500",
                "focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
              )}
            >
              <span>View Work</span>
              <ArrowRight
                className="h-5 w-5 transition-transform hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Stats / Social proof */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-neutral-100">5+</span>
              <span>Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-neutral-100">20+</span>
              <span>Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-neutral-100">10+</span>
              <span>Happy Clients</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="h-6 w-6 text-neutral-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
