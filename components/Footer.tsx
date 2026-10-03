import { Mail, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { cn } from "@/lib/utils";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/laxmanregmi", icon: FaGithub },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/laxmanregmi",
    icon: FaLinkedin,
  },
  { name: "Twitter", href: "https://twitter.com/laxmanregmi", icon: FaTwitter },
  { name: "Email", href: "mailto:hello@laxmanregmi.com", icon: Mail },
];

const footerLinks = {
  navigate: [
    { name: "Work", href: "#work" },
    { name: "Fun", href: "#fun" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
  ],
  resources: [
    { name: "Design System", href: "/design-system" },
    { name: "Blog", href: "/blog" },
    { name: "Open Source", href: "https://github.com/laxmanregmi" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer
      className="bg-neutral-950 border-t border-neutral-800"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-xl font-semibold text-neutral-100 mb-4">
              LR
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Product & UI/UX Designer shaping ideas into product. Building
              thoughtful digital experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center justify-center h-10 w-10 rounded-lg",
                    "bg-neutral-900 border border-neutral-800",
                    "text-neutral-400 hover:text-accent-400",
                    "hover:border-accent-500/50 hover:bg-neutral-800",
                    "transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-accent-500 focus-visible:ring-offset-2",
                    "focus-visible:ring-offset-neutral-950",
                  )}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <nav aria-label="Main navigation">
            <h4 className="font-semibold text-neutral-100 mb-4">Navigate</h4>
            <ul className="space-y-3">
              {footerLinks.navigate.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-accent-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Resources">
            <h4 className="font-semibold text-neutral-100 mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-accent-400 transition-colors"
                  >
                    {link.name}
                    {link.href.startsWith("http") && (
                      <ExternalLink
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal">
            <h4 className="font-semibold text-neutral-100 mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-accent-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} Laxman Regmi. All rights reserved.
            </p>
            <p className="text-sm text-neutral-500">
              Built with Next.js, Convex, and AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
