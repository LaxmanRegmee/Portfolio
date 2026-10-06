"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Work", href: "#work" },
  { name: "Fun", href: "#fun" },
  { name: "About", href: "#about" },
  { name: "Resume", href: "#resume" },
];

export function Header({ onChatClick }: { onChatClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "w-full transition-all duration-300",
        scrolled ? "bg-white/80" : "bg-transparent",
      )}
      role="banner"
    >
      <nav
        className="flex justify-center px-6 py-5 z-50 bg-background gap-6 border-b border-border-light lg:h-16 align-center items-center relative min-h-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center w-full justify-between">
          {/* Logo - Exact from Figma: "Rachel Chen" + "Product Designer + Engineer" */}
          <Link
            href="#"
            className="flex items-center gap-4"
            aria-label="Laxman Regmi Portfolio - Home"
          >
            <span className="text-h4 font-medium text-primary uppercase font-mono">
              Laxman Regmi
            </span>
            <span className="text-h4 font-normal text-secondary uppercase font-mono">
              Product Designer + Engineer
            </span>
          </Link>

          {/* Desktop Navigation - Exact from Figma: 32px gap between items */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-h4 font-normal uppercase whitespace-nowrap transition-colors font-mono",
                  item.name === "Work"
                    ? "text-accent"
                    : "text-secondary hover:text-accent",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Chat icon only on mobile, full button on desktop */}
          <div className="flex items-center gap-4">
            {/* Mobile: Icon only button */}
            <button
              onClick={onChatClick}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-text-primary text-white hover:bg-text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-accent focus-visible:ring-offset-2"
              aria-label="Open chat with AI assistant"
            >
              <MessageSquare className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* Desktop: Full button with text */}
            <button
              onClick={onChatClick}
              className="hidden lg:flex items-center justify-center gap-2 rounded-full bg-text-primary px-4 py-2 text-button font-normal text-white uppercase hover:bg-text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-accent focus-visible:ring-offset-2"
              aria-label="Open chat with AI assistant"
            >
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
              <span className="font-mono">LxmnLLM</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
