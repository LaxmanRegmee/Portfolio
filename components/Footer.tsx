import { cn } from "@/lib/utils";

const heartIcon =
  "https://www.figma.com/api/mcp/asset/f16c9f69-c04a-48e6-859a-16af92e227d1/6506f.svg";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/laxmanregmi",
    label: "Linkedin",
  },
  {
    name: "Email",
    href: "mailto:hello@laxmanregmi.com",
    label: "EMAIL",
    isEmail: true,
  },
  { name: "X", href: "https://x.com/laxmanregmi", label: "X" },
  { name: "GitHub", href: "https://github.com/laxmanregmi", label: "Github" },
];

export function Footer() {
  return (
    <footer
      className="border-t border-border-light bg-white"
      role="contentinfo"
    >
      <div className="mx-auto max-w-[1360px] px-6 py-5">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-4">
          {/* Left: "Designed + Coded with" + Heart + "by Laxman" - Exact from Figma */}
          <div className="flex items-center gap-2 text-h4 font-normal text-secondary uppercase font-mono">
            <span>Designed + Coded with</span>
            <img
              src={heartIcon}
              alt=""
              className="h-[15px] w-[15px]"
              aria-hidden="true"
            />
            <span>by Laxman</span>
          </div>

          {/* Right: Social Links as Text - Exact from Figma */}
          <div className="flex flex-col md:flex-row items-start md:items-start gap-4 md:gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-h4 font-normal uppercase font-mono transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-[var(--color-text-accent)] focus-visible:ring-offset-2",
                  social.isEmail
                    ? "text-primary opacity-60 text-[16px] leading-[24px] hover:text-accent"
                    : "text-secondary hover:text-accent",
                )}
                aria-label={social.name}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
