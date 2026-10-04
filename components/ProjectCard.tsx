"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  _id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  technologies: string[];
  year: string;
  featured: boolean;
  type: "image" | "video";
  videoUrl?: string;
  links: {
    demo?: string;
    github?: string;
    caseStudy?: string;
  };
  order: number;
  company?: string;
  meta?: string;
}

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const isVideo = project.type === "video";
  const company = project.company || "Personal Project";
  const meta = project.meta || `${project.type === "video" ? "Video" : "Image"} ${project.year}`;

  return (
    <a
      href={project.links.caseStudy || project.links.demo || project.links.github || `#${project.slug}`}
      className={cn(
        "group block relative overflow-hidden",
        "border border-[var(--color-border-light)] hover:border-[var(--color-border-medium)]",
        "transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-text-accent)] focus-visible:ring-offset-2",
      )}
      aria-label={`View project: ${project.title}`}
    >
      {/* Thumbnail - Exact from Figma: 666x373.75 or 666x415.5 or 666x465.59375 */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-bg-tertiary)]">
        {project.thumbnail && (
          <Image
            src={project.thumbnail}
            alt={`Project thumbnail for ${project.title}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
        )}

        {/* Video play indicator - Exact from Figma */}
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-white/90 backdrop-blur-sm text-black shadow-xl">
              <Play className="h-7 w-7 ml-1" aria-hidden="true" />
            </div>
          </div>
        )}
      </div>

      {/* Meta Bar - Exact from Figma: 29.5px height, H3 title + H4 meta */}
      <div className="flex items-center justify-between px-0 py-0 h-[29.5px] border-t border-[var(--color-border-light)] bg-white transition-colors duration-200 group-hover:bg-[var(--color-bg-secondary)]">
        <h3 className="text-h3 font-normal text-primary leading-[25.5px] tracking-[-0.34px] whitespace-nowrap truncate pr-4">
          {project.title}
        </h3>
        <span className="text-h4 font-normal text-secondary uppercase whitespace-nowrap leading-[22.5px] flex-shrink-0">
          {company} • {meta}
        </span>
      </div>
    </a>
  );
}