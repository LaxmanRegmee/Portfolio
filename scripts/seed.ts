import { ConvexHttpClient } from "convex/browser";
import { api } from "../convex/_generated/api";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const sampleProjects = [
  {
    title: "OpenAI x Hardware",
    slug: "openai-hardware",
    description:
      "Concept exploration for AI-powered hardware devices. Exploring the intersection of LLMs and physical computing.",
    longDescription:
      "A concept project exploring how AI models can be embedded into physical hardware devices. Includes industrial design concepts, interaction patterns, and technical feasibility studies for next-generation AI hardware.",
    thumbnail:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=675&fit=crop",
    ],
    tags: ["AI/ML", "Hardware", "Concept", "Industrial Design"],
    technologies: ["Figma", "Python", "Raspberry Pi", "OpenAI API", "CAD"],
    year: "2025",
    featured: true,
    type: "image" as const,
    links: {
      caseStudy: "/case-studies/openai-hardware",
    },
    order: 1,
    company: "OpenAI",
  },
  {
    title: "Notion Redesign",
    slug: "notion-redesign",
    description:
      "A comprehensive redesign of Notion's core workspace experience, focusing on improved navigation and collaboration.",
    longDescription:
      "Redesigned Notion's core workspace with focus on reducing cognitive load, improving team collaboration flows, and creating a more intuitive information architecture. Conducted user research with 50+ power users.",
    thumbnail:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=675&fit=crop",
    ],
    tags: ["SaaS", "Productivity", "Collaboration", "UX Research"],
    technologies: ["Figma", "React", "TypeScript", "UserTesting", "Miro"],
    year: "2024",
    featured: true,
    type: "image" as const,
    links: {
      caseStudy: "/case-studies/notion-redesign",
    },
    order: 2,
    company: "Notion",
  },
  {
    title: "Design System Platform",
    slug: "design-system-platform",
    description:
      "A comprehensive design system platform with component library, documentation, and governance tools for enterprise teams.",
    longDescription:
      "Built a scalable design system platform serving 500+ designers and developers across multiple product teams. Includes Figma integration, automated documentation, version control, and adoption analytics.",
    thumbnail:
      "https://images.unsplash.com/photo-1558655146-9f40138eddee?w=800&h=450&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558655146-9f40138eddee?w=1200&h=675&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop",
    ],
    tags: ["Design Systems", "React", "TypeScript", "Figma"],
    technologies: ["React", "TypeScript", "Storybook", "Figma API", "Node.js"],
    year: "2024",
    featured: true,
    type: "video" as const,
    videoUrl: "https://example.com/demo-video.mp4",
    links: {
      demo: "https://design-system.example.com",
      github: "https://github.com/rachelchen/design-system",
      caseStudy: "/case-studies/design-system",
    },
    order: 3,
    company: "Design Studio Inc.",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    slug: "ai-analytics-dashboard",
    description:
      "Real-time analytics dashboard with AI-powered insights and natural language querying for business metrics.",
    longDescription:
      "Designed and built an intelligent analytics platform that allows non-technical users to query data using natural language. Features automated anomaly detection, predictive forecasting, and customizable reporting.",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop",
    ],
    tags: ["AI/ML", "Data Visualization", "SaaS", "Dashboard"],
    technologies: [
      "React",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "OpenAI API",
      "Recharts",
    ],
    year: "2023",
    featured: false,
    type: "image" as const,
    links: {
      demo: "https://analytics.example.com",
      github: "https://github.com/rachelchen/ai-analytics",
      caseStudy: "/case-studies/ai-analytics",
    },
    order: 4,
    company: "TechStart Labs",
  },
  {
    title: "Collaborative Design Tool",
    slug: "collaborative-design-tool",
    description:
      "Real-time collaborative design tool with multiplayer editing, commenting, and design handoff features.",
    longDescription:
      "A Figma-like collaborative design tool built for product teams. Features real-time multiplayer editing, design token management, component libraries, and seamless developer handoff with code generation.",
    thumbnail:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=675&fit=crop",
    ],
    tags: ["Collaboration", "Design Tools", "Real-time", "WebGL"],
    technologies: [
      "React",
      "TypeScript",
      "WebRTC",
      "Canvas API",
      "Yjs",
      "Node.js",
    ],
    year: "2023",
    featured: false,
    type: "image" as const,
    links: {
      demo: "https://design-tool.example.com",
      github: "https://github.com/rachelchen/collab-design",
      caseStudy: "/case-studies/collab-design",
    },
    order: 5,
    company: "Creative Agency",
  },
  {
    title: "E-commerce Design Overhaul",
    slug: "ecommerce-redesign",
    description:
      "Complete redesign of a major e-commerce platform resulting in 35% conversion increase and improved accessibility.",
    longDescription:
      "Led the end-to-end redesign of a high-traffic e-commerce platform. Conducted user research, created design systems, improved checkout flow, and implemented accessibility standards. Resulted in 35% conversion increase and WCAG 2.1 AA compliance.",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop",
    ],
    tags: ["E-commerce", "UX Research", "Accessibility", "Conversion"],
    technologies: ["Figma", "UserTesting", "Hotjar", "React", "Storybook"],
    year: "2022",
    featured: false,
    type: "image" as const,
    links: {
      caseStudy: "/case-studies/ecommerce-redesign",
    },
    order: 6,
    company: "Creative Agency",
  },
];

const sampleExperience = [
  {
    company: "OpenAI",
    role: "Product Designer",
    description:
      "Designing AI-powered hardware experiences. Exploring the intersection of LLMs and physical computing.",
    startDate: "2024-01",
    endDate: "Present",
    technologies: [
      "Figma",
      "Python",
      "Industrial Design",
      "Prototyping",
      "Research",
    ],
    highlights: [
      "Led concept design for AI hardware devices",
      "Collaborated with research on LLM-hardware integration",
      "Published thought leadership on AI interfaces",
    ],
    order: 1,
  },
  {
    company: "Notion",
    role: "Senior Product Designer",
    description:
      "Led core workspace redesign focusing on navigation, collaboration, and information architecture.",
    startDate: "2022-03",
    endDate: "2023-12",
    technologies: [
      "Figma",
      "User Research",
      "Prototyping",
      "React",
      "Design Systems",
    ],
    highlights: [
      "Redesigned core workspace for 30M+ users",
      "Improved team collaboration metrics by 40%",
      "Established design system governance",
    ],
    order: 2,
  },
  {
    company: "Design Studio Inc.",
    role: "Product Designer",
    description:
      "Designed enterprise SaaS products. Built and maintained design system for 500+ designers.",
    startDate: "2020-01",
    endDate: "2022-02",
    technologies: [
      "Figma",
      "React",
      "Design Systems",
      "User Research",
      "Storybook",
    ],
    highlights: [
      "Built design system adopted by 500+ designers",
      "Improved product NPS by 25 points",
      "Led redesign reducing task time by 40%",
    ],
    order: 3,
  },
  {
    company: "Creative Agency",
    role: "UI/UX Designer",
    description:
      "Worked with diverse clients on web and mobile applications. Specialized in e-commerce and fintech.",
    startDate: "2018-06",
    endDate: "2019-12",
    technologies: [
      "Sketch",
      "InVision",
      "User Testing",
      "Wireframing",
      "Design Systems",
    ],
    highlights: [
      "Delivered 20+ client projects",
      "E-commerce redesign increased conversions 35%",
      "Established accessibility standards",
    ],
    order: 4,
  },
];

const sampleKnowledge = [
  {
    title: "Design Philosophy",
    category: "philosophy",
    tags: ["design-thinking", "principles"],
    source: "personal",
    content:
      "I believe great design comes from deep empathy for users. Every decision should be grounded in understanding real user needs, not assumptions. Design is not just how it looks, but how it works and how it makes people feel. I follow a principle of progressive disclosure - show only what's needed, when it's needed. Consistency builds trust, but thoughtful inconsistency creates delight.",
  },
  {
    title: "Design System Approach",
    category: "process",
    tags: ["design-systems", "components", "tokens"],
    source: "personal",
    content:
      "My design system approach: Start with foundations (colors, typography, spacing, motion) as design tokens. Build primitive components that are flexible and composable. Document everything with live examples. Version like software. Measure adoption. A design system is a product - it needs a roadmap, support, and continuous iteration. The best design systems are invisible - they just make the right thing easy and the wrong thing hard.",
  },
  {
    title: "Project: OpenAI x Hardware",
    category: "projects",
    tags: ["ai", "hardware", "concept", "industrial-design"],
    source: "portfolio",
    content:
      "OpenAI x Hardware is a concept exploration for AI-powered hardware devices. Exploring the intersection of LLMs and physical computing. Includes industrial design concepts, interaction patterns, and technical feasibility studies for next-generation AI hardware. Key challenge: designing trustworthy AI interfaces that feel natural in physical form.",
  },
  {
    title: "Project: Notion Redesign",
    category: "projects",
    tags: ["saas", "productivity", "collaboration", "ux-research"],
    source: "portfolio",
    content:
      "Notion Redesign is a comprehensive redesign of Notion's core workspace experience. Focused on improved navigation, collaboration flows, and information architecture. Conducted user research with 50+ power users. Reduced cognitive load and improved team collaboration metrics by 40%. Key insight: progressive disclosure of complexity.",
  },
  {
    title: "Project: Design System Platform",
    category: "projects",
    tags: ["design-systems", "react", "typescript", "figma"],
    source: "portfolio",
    content:
      "The Design System Platform is a comprehensive solution for managing design systems at scale. It includes a React component library with 60+ components, design token management with Figma sync, automated documentation generation, version control with semantic versioning, and adoption analytics. Built with React, TypeScript, Storybook, and Node.js. Serves 500+ designers and developers across 12 product teams. Key challenge was balancing flexibility with consistency - solved through a token-based theming system and composable component architecture.",
  },
  {
    title: "Project: AI Analytics Dashboard",
    category: "projects",
    tags: ["ai", "analytics", "dashboard", "python"],
    source: "portfolio",
    content:
      "AI-Powered Analytics Dashboard enables non-technical users to query business data using natural language. Features include: natural language to SQL translation using OpenAI, automated anomaly detection with statistical models, predictive forecasting with Prophet, customizable dashboards with drag-and-drop widgets, and scheduled reports. Tech stack: React frontend, Python/FastAPI backend, PostgreSQL, Redis for caching. Reduced time-to-insight from hours to seconds for business users.",
  },
  {
    title: "Project: Collaborative Design Tool",
    category: "projects",
    tags: ["collaboration", "real-time", "webgl", "yjs"],
    source: "portfolio",
    content:
      "Collaborative Design Tool is a real-time multiplayer design editor similar to Figma. Built with React, TypeScript, WebRTC for peer-to-peer connections, Yjs for conflict-free replicated data types (CRDTs), and Canvas API for rendering. Features: real-time cursors and selections, component libraries with design tokens, commenting and annotations, developer handoff with code generation (React, HTML/CSS, Flutter), and plugin system. Handles 50+ concurrent editors per file with sub-100ms latency.",
  },
  {
    title: "Experience: OpenAI",
    category: "experience",
    tags: ["ai", "hardware", "research"],
    source: "personal",
    content:
      "At OpenAI, I design AI-powered hardware experiences. Exploring the intersection of LLMs and physical computing. Key work: led concept design for AI hardware devices, collaborated with research on LLM-hardware integration, published thought leadership on AI interfaces. This role combines product design, industrial design, and AI research.",
  },
  {
    title: "Experience: Notion",
    category: "experience",
    tags: ["leadership", "design-systems", "collaboration"],
    source: "personal",
    content:
      "At Notion, I led core workspace redesign for 30M+ users. Focused on navigation, collaboration, and information architecture. Key achievements: improved team collaboration metrics by 40%, established design system governance, conducted extensive user research with power users. Worked cross-functionally with engineering, product, and research teams.",
  },
  {
    title: "Experience: Design Studio Inc.",
    category: "experience",
    tags: ["leadership", "design-systems", "mentoring"],
    source: "personal",
    content:
      "At Design Studio Inc., I designed enterprise SaaS products and built the company design system used by 500+ designers across 12 product teams. Key achievements: improved product NPS by 25 points through systematic UX improvements; led redesign of core workflow reducing average task completion time by 40%; mentored 5 junior designers; established design review process and design quality standards; introduced user research as a mandatory step in product development cycle.",
  },
  {
    title: "Design Process",
    category: "process",
    tags: ["process", "workflow", "research"],
    source: "personal",
    content:
      "My design process: 1) Discover - user research, stakeholder interviews, data analysis, competitive audit. 2) Define - synthesize insights, create problem statements, define success metrics. 3) Ideate - sketching, crazy 8s, design studio workshops, rapid prototyping. 4) Prototype - high-fidelity prototypes in Figma, interactive prototypes for testing. 5) Test - usability testing, A/B testing, accessibility audits. 6) Deliver - design specs, component documentation, developer handoff, design QA. 7) Iterate - monitor metrics, gather feedback, continuous improvement. This isn't linear - it's a cycle.",
  },
  {
    title: "Tools & Technologies",
    category: "skills",
    tags: ["tools", "technologies", "stack"],
    source: "personal",
    content:
      "Design: Figma (expert), Sketch, Principle, Framer, After Effects. Prototyping: Figma prototypes, Framer, React/Storybook. Research: UserTesting, Hotjar, Mixpanel, Amplitude, Optimal Workshop. Development: React, TypeScript, Next.js, Node.js, Python, HTML/CSS, Tailwind CSS. Collaboration: Linear, Notion, Slack, Miro, GitHub. Design Systems: Storybook, Style Dictionary, Figma Tokens, Tokens Studio. Testing: Jest, React Testing Library, Cypress, Playwright.",
  },
];

async function seed() {
  console.log("Seeding database...");

  // Seed projects
  console.log("Seeding projects...");
  for (const project of sampleProjects) {
    try {
      await convex.mutation(api.projects.mutations.createProject, project);
      console.log(`  ✓ ${project.title}`);
    } catch (error) {
      console.error(`  ✗ ${project.title}:`, error);
    }
  }

  // Seed experience
  console.log("Seeding experience...");
  for (const exp of sampleExperience) {
    try {
      await convex.mutation(api.experience.mutations.createExperience, exp);
      console.log(`  ✓ ${exp.company}`);
    } catch (error) {
      console.error(`  ✗ ${exp.company}:`, error);
    }
  }

  // Seed knowledge
  console.log("Seeding knowledge...");
  for (const doc of sampleKnowledge) {
    try {
      await convex.mutation(api.knowledge.mutations.createDocument, doc);
      console.log(`  ✓ ${doc.title}`);
    } catch (error) {
      console.error(`  ✗ ${doc.title}:`, error);
    }
  }

  console.log("Seeding complete!");
}

seed().catch(console.error);
