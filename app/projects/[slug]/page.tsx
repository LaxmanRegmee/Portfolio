"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Project data matching Figma design
const projectData = {
  slug: "pokergpt",
  title: "PokerGPT",
  subtitle: "Shipped 2023",
  headline: "The world's first AI poker coach",
  thumbnail: "https://assets10.lottiefiles.com/packages/lf20_3rwasyjy.json",
  videoUrl: "https://example.com/pokergpt.mp4",
  meta: {
    role: "Product Designer & Frontend Engineer",
    timeline: "May - August 2023",
    team: ["1 PM", "2 Engineers", "1 Designer (me!)"],
    skills: ["Product Design", "Frontend Engineering", "User Research"],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      content: [
        {
          type: "heading2",
          text: "What if we leveraged AI to provide personalized poker coaching at scale?",
        },
        {
          type: "paragraph",
          text: "There is no convenient and low-cost solution to support poker players in improving their game. Traditional solvers are complex and expensive, while personal coaching is inaccessible to most players.",
        },
        {
          type: "heading3",
          text: "Solution",
        },
        {
          type: "paragraph",
          text: "PokerGPT: An AI-powered poker coach providing tailored guidance through natural conversation. Players can ask questions, input hand histories, and receive structured, actionable feedback.",
        },
      ],
    },
    {
      id: "initial-observations",
      title: "Initial Observations",
      content: [
        {
          type: "paragraph",
          text: "There is no convenient and low-cost solution to support poker players in improving their game.",
        },
        {
          type: "paragraph",
          text: "Poker solvers are hard to interpret and usually require deep technical knowledge to use effectively.",
        },
        {
          type: "heading3",
          text: "Pain Points",
        },
        {
          type: "paragraph",
          text: "1. Solvers are hard to use - Poker solvers are hard to interpret and usually require extensive study to understand the output.",
        },
        {
          type: "paragraph",
          text: "2. Coaching is not accessible - Poker coaching is expensive and generally not accessible to recreational players.",
        },
        {
          type: "paragraph",
          text: "Key Insight: Some players are prompting ChatGPT in creative ways to get poker advice, showing demand for conversational AI coaching.",
        },
      ],
    },
    {
      id: "market-research",
      title: "Market Research",
      content: [
        {
          type: "heading3",
          text: "Poker Solvers",
        },
        {
          type: "paragraph",
          text: "Platforms like GTO Wizard, Deepsolver, and more recently PioSolver Cloud provide powerful solving capabilities but have steep learning curves.",
        },
        {
          type: "heading3",
          text: "Courses & Bootcamps",
        },
        {
          type: "paragraph",
          text: "Poker bootcamps and online courses provide structured learning but lack personalization and real-time feedback.",
        },
        {
          type: "heading3",
          text: "Personal Coaching",
        },
        {
          type: "paragraph",
          text: "One-on-one personalized coaching can be highly effective but costs $100-500/hour, making it inaccessible to most.",
        },
        {
          type: "heading3",
          text: "How might we create an intuitive, convenient, and affordable poker learning experience?",
        },
      ],
    },
    {
      id: "becoming-my-users",
      title: "Becoming My Users",
      content: [
        {
          type: "paragraph",
          text: "I didn't know how to play poker... so I learned!",
        },
        {
          type: "paragraph",
          text: "Starting with YouTube videos, playing online, and studying solver outputs, I immersed myself in the user's journey to understand the pain points firsthand.",
        },
      ],
    },
    {
      id: "competitor-research",
      title: "Competitor Research",
      content: [
        {
          type: "paragraph",
          text: "Competitor interfaces are highly complex and not beginner-friendly. The current poker solvers on the market are highly technical tools built for experts, not learners.",
        },
      ],
    },
    {
      id: "design-process",
      title: "Design Process",
      content: [
        {
          type: "paragraph",
          text: "A poker-tailored chatbot, with bespoke features for hand analysis and learning.",
        },
        {
          type: "paragraph",
          text: "The concept of an AI chatbot for poker solving had been explored, but we needed to make it practical and accessible.",
        },
        {
          type: "heading3",
          text: "How might we provide a better poker learning experience?",
        },
        {
          type: "paragraph",
          text: "I started by exploring a design for a more structured conversation flow that guides users through hand analysis step by step.",
        },
        {
          type: "paragraph",
          text: "Next, our team looked into streamlining the flow of inputting hand histories with templates and smart defaults.",
        },
        {
          type: "heading3",
          text: "What if we bring in a game simulation?",
        },
        {
          type: "paragraph",
          text: "We found that some players use ChatGPT to simulate poker scenarios. While this was an interesting direction, we decided to focus on the core chat experience first.",
        },
      ],
    },
    {
      id: "final-designs",
      title: "Final Designs",
      content: [
        {
          type: "paragraph",
          text: "We prioritized a simple, familiar, and clean interface that feels like chatting with a knowledgeable friend.",
        },
        {
          type: "paragraph",
          text: "Our main interface is a chat with structured responses that include hand visualizations, equity calculations, and actionable recommendations.",
        },
      ],
    },
    {
      id: "reflection",
      title: "Reflection",
      content: [
        {
          type: "heading3",
          text: "What I learned",
        },
        {
          type: "paragraph",
          text: "Keep cutting it down to the MLP. We were laser-focused on shipping a Minimum Lovable Product.",
        },
        {
          type: "paragraph",
          text: "User research is not enough. Observing user stories and conducting interviews is valuable, but nothing replaces building and shipping to real users.",
        },
      ],
    },
  ],
};

const navigationItems = [
  { id: "overview", label: "Overview" },
  { id: "initial-observations", label: "Initial Observations" },
  { id: "market-research", label: "Market Research" },
  { id: "becoming-my-users", label: "Becoming My Users" },
  { id: "competitor-research", label: "Competitor Research" },
  { id: "design-process", label: "Design Process" },
  { id: "final-designs", label: "Final Designs" },
  { id: "reflection", label: "Reflection" },
];

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  // In a real app, you'd fetch project data based on slug
  const project = projectData;

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>

      <main id="main-content" className="flex min-h-screen">
        {/* Sticky Sidebar Navigation - Left Side */}
        <aside
          className="hidden lg:block w-[264px] flex-shrink-0 sticky top-[80px] h-[calc(100vh-80px)] overflow-y-auto border-r border-border-light bg-white pt-12 px-6"
          aria-label="Project navigation"
        >
          {/* Back Link */}
          <Link
            href="/"
            className="flex items-center gap-2 w-full mb-8 text-h4 font-normal text-secondary uppercase font-mono hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-accent focus-visible:ring-offset-2 rounded-sm"
            aria-label="Back to portfolio"
          >
            <ArrowLeft className="h-4.5 w-4.5 shrink-0" aria-hidden="true" />
            <span>Back</span>
          </Link>

          {/* Navigation Menu */}
          <nav aria-label="Project sections">
            <ul className="space-y-8" role="list">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={cn(
                      "block text-h4 font-normal text-secondary uppercase font-mono hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-accent focus-visible:ring-offset-2 rounded-sm px-1 py-0.5",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content Area - Right Side */}
        <div className="flex-1 min-w-0 lg:pl-0">
          <div className="max-w-[768px] mx-auto px-6 py-12 lg:px-12 lg:py-16">
            {/* Project Header */}
            <div className="mb-12 lg:mb-16">
              <h4 className="text-h4 font-normal text-primary uppercase font-mono mb-4">
                {project.title} • {project.subtitle}
              </h4>
              <h1 className="text-h1 font-normal text-primary leading-[61.6px] tracking-[-1.12px] font-heading">
                {project.headline}
              </h1>
            </div>

            {/* Project Thumbnail/Video */}
            <div className="relative w-full aspect-[3:2] rounded-xl overflow-hidden bg-bg-tertiary mb-12 lg:mb-16">
              {/* Placeholder for video/thumbnail */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-bg-tertiary to-bg-secondary">
                <div className="text-center text-secondary">
                  <svg
                    className="mx-auto h-16 w-16 mb-4 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9zm-9 5.5c-3.03 0-5.5-2.47-5.5-5.5S12 6.5 15 6.5s5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z"
                    />
                  </svg>
                  <p className="text-h4 font-normal uppercase font-mono">Video Preview</p>
                  <p className="text-body text-secondary mt-1">PokerGPT Demo</p>
                </div>
              </div>
            </div>

            {/* Meta Information Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8 mb-16 lg:mb-20">
              <div className="lg:col-span-1">
                <h4 className="text-h4 font-normal text-primary uppercase font-mono mb-3">Role</h4>
                <p className="text-body text-secondary leading-[22.5px]">{project.meta.role}</p>
              </div>
              <div className="lg:col-span-1">
                <h4 className="text-h4 font-normal text-primary uppercase font-mono mb-3">Timeline</h4>
                <p className="text-body text-secondary leading-[22.5px]">{project.meta.timeline}</p>
              </div>
              <div className="lg:col-span-1">
                <h4 className="text-h4 font-normal text-primary uppercase font-mono mb-3">Team</h4>
                <ul className="space-y-2 text-body text-secondary leading-[22.5px]">
                  {project.meta.team.map((member, index) => (
                    <li key={index}>{member}</li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-1">
                <h4 className="text-h4 font-normal text-primary uppercase font-mono mb-3">Skills</h4>
                <ul className="space-y-2 text-body text-secondary leading-[22.5px]">
                  {project.meta.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-20 lg:space-y-24">
              {project.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24"
                  aria-labelledby={`${section.id}-heading`}
                >
                  <h2
                    id={`${section.id}-heading`}
                    className="text-h3 font-normal text-primary uppercase font-mono mb-6 lg:mb-8"
                  >
                    {section.title}
                  </h2>

                  <div className="space-y-6 lg:space-y-8">
                    {section.content.map((block, index) => (
                      <div key={`${section.id}-${index}`}>
                        {block.type === "heading2" && (
                          <h3 className="text-h1 font-normal text-primary leading-[61.6px] tracking-[-1.12px] font-heading mb-4">
                            {block.text}
                          </h3>
                        )}
                        {block.type === "heading3" && (
                          <h3 className="text-h3 font-normal text-primary uppercase font-mono mb-4">
                            {block.text}
                          </h3>
                        )}
                        {block.type === "paragraph" && (
                          <p className="text-body text-secondary leading-[22.5px] max-w-none">
                            {block.text}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}