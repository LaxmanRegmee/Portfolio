"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { ProjectCard } from "./ProjectCard";

// Static projects from Figma design - Exact match
// Using Lottie animation URLs for thumbnails
const figmaProjects = [
  {
    _id: "1",
    title: "The future of AI & hardware",
    slug: "openai-hardware",
    description: "OpenAI x Hardware concept project",
    thumbnail: "https://assets10.lottiefiles.com/packages/lf20_jcikwtux.json", // Lottie animation URL
    images: [],
    tags: ["AI", "Hardware", "Concept"],
    technologies: ["Figma", "Prototyping"],
    year: "2025",
    featured: true,
    type: "lottie" as const,
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
    thumbnail: "https://assets10.lottiefiles.com/packages/lf20_jtbfg2nb.json", // Lottie animation URL
    images: [],
    tags: ["AI", "Voice", "Consumer"],
    technologies: ["Figma", "Voice Design"],
    year: "2025",
    featured: true,
    type: "lottie" as const,
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
    thumbnail: "https://assets10.lottiefiles.com/packages/lf20_uxqw5.json", // Lottie animation URL
    images: [],
    tags: ["Mobile", "Design Tools", "Concept"],
    technologies: ["Figma", "React Native"],
    year: "2025",
    featured: false,
    type: "lottie" as const,
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
    thumbnail: "https://assets10.lottiefiles.com/packages/lf20_5njp3vgg.json", // Lottie animation URL
    images: [],
    tags: ["AI", "FinTech", "Patent"],
    technologies: ["Python", "React"],
    year: "2024",
    featured: false,
    type: "lottie" as const,
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
    thumbnail: "https://assets10.lottiefiles.com/packages/lf20_3rwasyjy.json", // Lottie animation URL
    images: [],
    tags: ["AI", "Gaming", "Product"],
    technologies: ["React", "Node.js", "OpenAI"],
    year: "2023",
    featured: true,
    type: "lottie" as const,
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
    thumbnail: "https://assets10.lottiefiles.com/packages/lf20_4kx2q32n.json", // Lottie animation URL
    images: [],
    tags: ["AI", "Developer Tools", "Contract"],
    technologies: ["TypeScript", "React"],
    year: "2026",
    featured: false,
    type: "lottie" as const,
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
    thumbnail: "https://assets10.lottiefiles.com/packages/lf20_5mhygk.json", // Lottie animation URL
    images: [],
    tags: ["macOS", "Security", "Product"],
    technologies: ["Swift", "AppKit"],
    year: "2025",
    featured: false,
    type: "lottie" as const,
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
    thumbnail: "https://assets10.lottiefiles.com/packages/lf20_3vbhd.json", // Lottie animation URL
    images: [],
    tags: ["Enterprise", "Innovation", "Platform"],
    technologies: ["React", "Node.js"],
    year: "2023",
    featured: false,
    type: "lottie" as const,
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
  const displayProjects =
    projects && projects.length > 0 ? projects : figmaProjects;

  return (
    <section id="work" className="w-full pb-8" aria-labelledby="work-heading">
      <div className="flex flex-col gap-6 w-full">
        {/* 
          Responsive grid matching Figma design:
          - Mobile and tablet (< 1408px): Single column layout
          - Desktop (>= 1408px): Two columns at 668px each with 24px gap
        */}
        <div className="grid grid-cols-1 desktop:grid-cols-[minmax(668px,1fr)_minmax(668px,1fr)] gap-x-6 gap-y-6">
          {displayProjects.map((project) => (
            <ProjectCard
              key={project._id}
              project={{
                ...project,
                company: project.company || "Personal Project",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
