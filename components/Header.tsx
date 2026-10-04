"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Work", href: "#work" },
  { name: "Fun", href: "#fun" },
  { name: "About", href: "#about" },
  { name: "Resume", href: "#resume" },
];

export function Header({ onChatClick }: { onChatClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-[var(--color-border-light)]"
          : "bg-transparent",
      )}
      role="banner"
    >
      <nav
        className="mx-auto max-w-[1360px] px-6"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Exact from Figma: "Rachel Chen" + "Product Designer + Engineer" */}
          <Link
            href="#"
            className="flex flex-col items-start"
            aria-label="Rachel Chen Portfolio - Home"
          >
            <span className="text-h4 font-medium text-primary uppercase">
              Rachel Chen
            </span>
            <span className="text-h4 font-normal text-secondary uppercase">
              Product Designer + Engineer
            </span>
          </Link>

          {/* Desktop Navigation - Exact from Figma */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-h4 font-normal uppercase whitespace-nowrap transition-colors",
                  item.name === "Work"
                    ? "text-accent"
                    : "text-secondary hover:text-accent"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={onChatClick}
              className="hidden sm:flex items-center justify-center gap-2 rounded-sm bg-[var(--color-text-primary)] px-4 py-2 text-button font-normal text-white uppercase hover:bg-[var(--color-text-accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-text-accent)] focus-visible:ring-offset-2"
              aria-label="Open chat with AI assistant"
            >
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
              <span>RacheLLM</span>
            </button>

            <button
              className="md:hidden p-2 rounded-sm text-secondary hover:text-primary hover:bg-[var(--color-bg-tertiary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-text-accent)]"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
          )}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="py-4 space-y-2 border-t border-[var(--color-border-light)]">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-2 py-3 text-h4 font-normal uppercase transition-colors",
                  item.name === "Work"
                    ? "text-accent"
                    : "text-secondary hover:text-accent"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                onChatClick();
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 rounded-sm bg-[var(--color-text-primary)] px-4 py-3 text-button font-normal text-white uppercase hover:bg-[var(--color-text-accent)] transition-colors"
            >
              <MessageSquare className="h-5 w-5" aria-hidden="true" />
              <span>RacheLLM</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}