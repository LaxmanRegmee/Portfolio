import { Mail, ExternalLink, Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { cn } from "@/lib/utils";

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/rachelchen", icon: FaLinkedin },
  { name: "Email", href: "mailto:hello@rachelchen.com", icon: Mail },
  { name: "X", href: "https://x.com/rachelchen", icon: FaTwitter },
  { name: "GitHub", href: "https://github.com/rachelchen", icon: FaGithub },
  { name: "Devpost", href: "https://devpost.com/rachelchen", icon: ExternalLink },
];

export function Footer() {
  return (
    <footer
      className="border-t border-[var(--color-border-light)] bg-white"
      role="contentinfo"
    >
      <div className="mx-auto max-w-[1360px] px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: "Designed + Coded with" + Heart + "by Rachel" - Exact from Figma */}
          <div className="flex items-center gap-2 text-h4 font-normal text-secondary uppercase">
            <span>Designed + Coded with</span>
            <Heart className="h-4 w-4 text-[var(--color-text-accent)]" aria-hidden="true" />
            <span>by Rachel</span>
          </div>

          {/* Right: Social Links - Exact from Figma */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center justify-center",
                  "text-h4 font-normal text-secondary uppercase hover:text-accent",
                  "transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-[var(--color-text-accent)] focus-visible:ring-offset-2",
                )}
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}