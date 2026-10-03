"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const projects = useQuery(api.projects.queries.getProjects);

  if (projects === undefined) {
    return (
      <section
        id="work"
        className="py-20 sm:py-28 lg:py-32"
        aria-labelledby="work-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="work-heading"
              className="text-3xl sm:text-4xl font-bold text-neutral-100 mb-4"
            >
              Selected Work
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              A collection of projects I've designed and built over the years.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="aspect-[16/10] rounded-2xl bg-neutral-900 animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="work"
      className="py-20 sm:py-28 lg:py-32"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="work-heading"
            className="text-3xl sm:text-4xl font-bold text-neutral-100 mb-4"
          >
            Selected Work
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            A collection of projects I've designed and built over the years.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-neutral-400">
              No projects yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project._id}
                project={project}
                priority={index === 0 && projects.length > 1}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
