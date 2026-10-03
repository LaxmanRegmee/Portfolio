"use client";

import { useState } from "react";
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

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 20);
    });
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800"
          : "bg-transparent",
      )}
      role="banner"
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="#"
              className="text-xl font-semibold text-neutral-100 hover:text-accent-400 transition-colors"
              aria-label="Laxman Portfolio - Home"
            >
              LR
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-neutral-300 hover:text-accent-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={onChatClick}
              className="hidden sm:flex items-center gap-2 rounded-lg bg-accent-500 px-4 py-2 text-sm font-medium text-neutral-950 hover:bg-accent-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              aria-label="Open chat with AI assistant"
            >
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
              <span>Chat</span>
            </button>

            <button
              className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-neutral-100 hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
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
          <div className="py-4 space-y-2 border-t border-neutral-800">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-2 py-3 text-base font-medium text-neutral-300 hover:text-accent-400 transition-colors"
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
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-4 py-3 text-base font-medium text-neutral-950 hover:bg-accent-400 transition-colors"
            >
              <MessageSquare className="h-5 w-5" aria-hidden="true" />
              <span>Chat with AI</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
