"use client";

import { cn } from "@/lib/utils";
import { LottieThumbnail } from "./LottieThumbnail";

interface Project {
  _id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string; // Now used for Lottie animation URL
  images: string[];
  tags: string[];
  technologies: string[];
  year: string;
  featured: boolean;
  type: "lottie" | "image" | "video";
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
}

export function ProjectCard({ project }: ProjectCardProps) {
  const company = project.company || "Personal Project";
  const meta = project.meta || `${project.year}`;

  return (
    <a
      href={
        project.links.caseStudy ||
        project.links.demo ||
        project.links.github ||
        `#${project.slug}`
      }
      className={cn(
        "group block relative overflow-hidden",
        
        "transition-colors duration-200",
        "focus-visible:outline-none",
      )}
      aria-label={`View project: ${project.title}`}
    >
      {/* Thumbnail - Lottie Animation - Exact from Figma: 668px wide, varying heights */}
      <div className="relative w-full overflow-hidden bg-bg-tertiary">
        {project.thumbnail && (
          <LottieThumbnail src={project.thumbnail} className="w-full h-full" />
        )}
      </div>

      {/* Meta Bar - Exact from Figma: 29.5px height, pt-1 (4px), H3 title + H4 meta */}
      <div className="flex items-start justify-between w-full h-auto
       pt-3 bg-white">
        <h3 className="text-h3 font-normal text-primary leading-[25.5px] whitespace-nowrap truncate font-heading m-0">
          {project.title}
        </h3>
        <span className="text-h4 font-normal text-secondary uppercase whitespace-nowrap leading-[22.5px] shrink-0 font-mono">
          {company} • {meta}
        </span>
      </div>
    </a>
  );
}
