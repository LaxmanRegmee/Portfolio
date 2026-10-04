"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { ProjectCard } from "./ProjectCard";

// Static projects from Figma design - Exact match
const figmaProjects = [
  {
    _id: "1",
    title: "The future of AI & hardware",
    slug: "openai-hardware",
    description: "OpenAI x Hardware concept project",
    thumbnail: "/projects/openai-hardware.jpg",
    images: [],
    tags: ["AI", "Hardware", "Concept"],
    technologies: ["Figma", "Prototyping"],
    year: "2025",
    featured: true,
    type: "video" as const,
    videoUrl: "https://example.com/openai-hardware.mp4",
    links: { caseStudy: "#openai-hardware" },
    order: 0,
    company: "OpenAI x Hardware",
    meta: "Concept 2025",
  },
  {
    _id: "2",
    title: "Novel consumer AI experiences",
    slug: "amazon-alexa",
    description: "Amazon Alexa+ contract work",
    thumbnail: "/projects/amazon-alexa.jpg",
    images: [],
    tags: ["AI", "Voice", "Consumer"],
    technologies: ["Figma", "Voice Design"],
    year: "2025",
    featured: true,
    type: "video" as const,
    videoUrl: "https://example.com/amazon-alexa.mp4",
    links: { caseStudy: "#amazon-alexa" },
    order: 1,
    company: "Amazon Alexa+",
    meta: "Contract 2025",
  },
  {
    _id: "3",
    title: "Mobile-first for Figma",
    slug: "figma-mobile",
    description: "Figma mobile concept",
    thumbnail: "/projects/figma-mobile.jpg",
    images: [],
    tags: ["Mobile", "Design Tools", "Concept"],
    technologies: ["Figma", "React Native"],
    year: "2025",
    featured: false,
    type: "video" as const,
    videoUrl: "https://example.com/figma-mobile.mp4",
    links: { caseStudy: "#figma-mobile" },
    order: 2,
    company: "Figma",
    meta: "Concept 2025",
  },
  {
    _id: "4",
    title: "Patent-pending AI",
    slug: "rbc-ai",
    description: "Royal Bank of Canada AI project",
    thumbnail: "/projects/rbc-ai.jpg",
    images: [],
    tags: ["AI", "FinTech", "Patent"],
    technologies: ["Python", "React"],
    year: "2024",
    featured: false,
    type: "video" as const,
    videoUrl: "https://example.com/rbc-ai.mp4",
    links: { caseStudy: "#rbc-ai" },
    order: 3,
    company: "Royal Bank of Canada",
    meta: "Handed off 2024",
  },
  {
    _id: "5",
    title: "The world's first AI poker coach",
    slug: "pokergpt",
    description: "PokerGPT shipped product",
    thumbnail: "/projects/pokergpt.jpg",
    images: [],
    tags: ["AI", "Gaming", "Product"],
    technologies: ["React", "Node.js", "OpenAI"],
    year: "2023",
    featured: true,
    type: "video" as const,
    videoUrl: "https://example.com/pokergpt.mp4",
    links: { caseStudy: "#pokergpt" },
    order: 4,
    company: "PokerGPT",
    meta: "Shipped 2023",
  },
  {
    _id: "6",
    title: "The future of software development",
    slug: "cognition-ai",
    description: "Cognition AI contract work",
    thumbnail: "/projects/cognition-ai.jpg",
    images: [],
    tags: ["AI", "Developer Tools", "Contract"],
    technologies: ["TypeScript", "React"],
    year: "2026",
    featured: false,
    type: "video" as const,
    videoUrl: "https://example.com/cognition-ai.mp4",
    links: { caseStudy: "#cognition-ai" },
    order: 5,
    company: "Cognition AI",
    meta: "Contract 2026",
  },
  {
    _id: "7",
    title: "Bringing autofill to macOS",
    slug: "1password-autofill",
    description: "1Password macOS autofill feature",
    thumbnail: "/projects/1password-autofill.jpg",
    images: [],
    tags: ["macOS", "Security", "Product"],
    technologies: ["Swift", "AppKit"],
    year: "2025",
    featured: false,
    type: "video" as const,
    videoUrl: "https://example.com/1password-autofill.mp4",
    links: { caseStudy: "#1password-autofill" },
    order: 6,
    company: "1Password",
    meta: "Shipped 2025",
  },
  {
    _id: "8",
    title: "Innovation management for Fortune 500s",
    slug: "earth-innovation",
    description: "Earth innovation platform",
    thumbnail: "/projects/earth-innovation.jpg",
    images: [],
    tags: ["Enterprise", "Innovation", "Platform"],
    technologies: ["React", "Node.js"],
    year: "2023",
    featured: false,
    type: "video" as const,
    videoUrl: "https://example.com/earth-innovation.mp4",
    links: { caseStudy: "#earth-innovation" },
    order: 7,
    company: "Earth",
    meta: "Shipped 2023",
  },
];

export function ProjectsSection() {
  const projects = useQuery(api.projects.queries.getProjects);

  // Use Figma projects as fallback when Convex data is loading or empty
  const displayProjects = (projects && projects.length > 0) ? projects : figmaProjects;

  return (
    <section
      id="work"
      className="py-16 md:py-20 lg:py-24"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-[1360px] px-6">
        <div className="text-center mb-12">
          <h2
            id="work-heading"
            className="text-h3 font-normal text-primary mb-4"
          >
            Selected Work
          </h2>
          <p className="text-body text-secondary max-w-2xl mx-auto">
            A collection of projects I've designed and built over the years.
          </p>
        </div>

        {displayProjects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-secondary">
              No projects yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {displayProjects.map((project, index) => (
              <ProjectCard
                key={project._id}
                project={{
                  ...project,
                  company: project.company || "Personal Project",
                }}
                priority={index === 0 && displayProjects.length > 1}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}