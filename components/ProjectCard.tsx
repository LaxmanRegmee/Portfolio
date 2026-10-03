"use client";

import Image from "next/image";
import { ExternalLink, Play, Eye } from "lucide-react";
import { FaGithub } from "react-icons/fa";
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
}

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const isVideo = project.type === "video";

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-neutral-900",
        "border border-neutral-800 hover:border-neutral-700",
        "transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/5",
        priority ? "md:col-span-2 md:row-span-2" : "",
      )}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.thumbnail && (
          <Image
            src={project.thumbnail}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
        )}

        {/* Video play indicator */}
        {isVideo && (
          <button
            className="absolute inset-0 flex items-center justify-center bg-neutral-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label={`Play video for ${project.title}`}
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent-500 text-neutral-950 shadow-xl">
              <Play className="h-8 w-8 ml-1" aria-hidden="true" />
            </div>
          </button>
        )}

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-accent-500 px-2.5 py-1 text-xs font-medium text-neutral-950">
              Featured
            </span>
          </div>
        )}

        {/* Year badge */}
        <div className="absolute bottom-3 right-3">
          <span className="rounded-full bg-neutral-950/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-neutral-300">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-800 px-2.5 py-0.5 text-xs text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="rounded-full bg-neutral-800 px-2.5 py-0.5 text-xs text-neutral-500">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-neutral-100 mb-2 group-hover:text-accent-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded bg-neutral-800 px-2 py-0.5 text-[11px] font-medium text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-neutral-800">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-neutral-400 hover:text-accent-400 transition-colors"
              aria-label={`View demo for ${project.title}`}
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              <span>Demo</span>
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-neutral-400 hover:text-accent-400 transition-colors"
              aria-label={`View code for ${project.title}`}
            >
              <FaGithub className="h-4 w-4" aria-hidden="true" />
              <span>Code</span>
            </a>
          )}
          {project.links.caseStudy && (
            <a
              href={project.links.caseStudy}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-neutral-400 hover:text-accent-400 transition-colors"
              aria-label={`Read case study for ${project.title}`}
            >
              <Eye className="h-4 w-4" aria-hidden="true" />
              <span>Case Study</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
