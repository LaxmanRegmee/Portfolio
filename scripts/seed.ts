import { ConvexHttpClient } from "convex/browser";
import { api } from "../convex/_generated/api";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const sampleProjects = [
  {
    title: "Design System Platform",
    slug: "design-system-platform",
    description:
      "A comprehensive design system platform with component library, documentation, and governance tools for enterprise teams.",
    longDescription:
      "Built a scalable design system platform serving 500+ designers and developers across multiple product teams. Includes Figma integration, automated documentation, version control, and adoption analytics.",
    thumbnail:
      "https://images.unsplash.com/photo-1558655146-9f40138eddee?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558655146-9f40138eddee?w=1200&h=750&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=750&fit=crop",
    ],
    tags: ["Design Systems", "React", "TypeScript", "Figma"],
    technologies: ["React", "TypeScript", "Storybook", "Figma API", "Node.js"],
    year: "2024",
    featured: true,
    type: "image" as const,
    links: {
      demo: "https://design-system.example.com",
      github: "https://github.com/laxmanregmi/design-system",
      caseStudy: "/case-studies/design-system",
    },
    order: 1,
  },
  {
    title: "AI-Powered Analytics Dashboard",
    slug: "ai-analytics-dashboard",
    description:
      "Real-time analytics dashboard with AI-powered insights and natural language querying for business metrics.",
    longDescription:
      "Designed and built an intelligent analytics platform that allows non-technical users to query data using natural language. Features automated anomaly detection, predictive forecasting, and customizable reporting.",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=750&fit=crop",
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
    featured: true,
    type: "image" as const,
    links: {
      demo: "https://analytics.example.com",
      github: "https://github.com/laxmanregmi/ai-analytics",
      caseStudy: "/case-studies/ai-analytics",
    },
    order: 2,
  },
  {
    title: "Collaborative Design Tool",
    slug: "collaborative-design-tool",
    description:
      "Real-time collaborative design tool with multiplayer editing, commenting, and design handoff features.",
    longDescription:
      "A Figma-like collaborative design tool built for product teams. Features real-time multiplayer editing, design token management, component libraries, and seamless developer handoff with code generation.",
    thumbnail:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=750&fit=crop",
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
    featured: true,
    type: "video" as const,
    videoUrl: "https://example.com/demo-video.mp4",
    links: {
      demo: "https://design-tool.example.com",
      github: "https://github.com/laxmanregmi/collab-design",
      caseStudy: "/case-studies/collab-design",
    },
    order: 3,
  },
  {
    title: "E-commerce Design Overhaul",
    slug: "ecommerce-redesign",
    description:
      "Complete redesign of a major e-commerce platform resulting in 35% conversion increase and improved accessibility.",
    longDescription:
      "Led the end-to-end redesign of a high-traffic e-commerce platform. Conducted user research, created design systems, improved checkout flow, and implemented accessibility standards. Resulted in 35% conversion increase and WCAG 2.1 AA compliance.",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=750&fit=crop",
    ],
    tags: ["E-commerce", "UX Research", "Accessibility", "Conversion"],
    technologies: ["Figma", "UserTesting", "Hotjar", "React", "Storybook"],
    year: "2022",
    featured: false,
    type: "image" as const,
    links: {
      caseStudy: "/case-studies/ecommerce-redesign",
    },
    order: 4,
  },
  {
    title: "Mobile Banking App",
    slug: "mobile-banking-app",
    description:
      "Modern mobile banking application with focus on financial wellness and personalized insights.",
    longDescription:
      "Designed a next-generation mobile banking app focusing on financial wellness. Features include spending insights, savings goals, investment tracking, and personalized financial advice powered by ML.",
    thumbnail:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=750&fit=crop",
    ],
    tags: ["FinTech", "Mobile", "Financial Wellness", "Personalization"],
    technologies: ["Figma", "Swift", "Kotlin", "React Native", "Python"],
    year: "2022",
    featured: false,
    type: "image" as const,
    links: {
      caseStudy: "/case-studies/mobile-banking",
    },
    order: 5,
  },
  {
    title: "Developer Documentation Portal",
    slug: "docs-portal",
    description:
      "Interactive documentation portal with live code examples, API explorer, and automated SDK generation.",
    longDescription:
      "Built a modern documentation platform for developer-facing APIs. Features interactive API explorer, live code playground, automated SDK generation in multiple languages, and version management.",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=750&fit=crop",
    ],
    tags: ["Developer Experience", "Documentation", "API", "Open Source"],
    technologies: ["Next.js", "TypeScript", "MDX", "OpenAPI", "Vercel"],
    year: "2021",
    featured: false,
    type: "image" as const,
    links: {
      demo: "https://docs.example.com",
      github: "https://github.com/laxmanregmi/docs-portal",
      caseStudy: "/case-studies/docs-portal",
    },
    order: 6,
  },
];

const sampleExperience = [
  {
    company: "Design Studio Inc.",
    role: "Senior Product Designer",
    description:
      "Leading design for enterprise SaaS products. Managing design system, conducting user research, and mentoring junior designers.",
    startDate: "2022-01",
    endDate: "Present",
    technologies: [
      "Figma",
      "React",
      "Design Systems",
      "User Research",
      "Prototyping",
    ],
    highlights: [
      "Built design system adopted by 500+ designers",
      "Improved product NPS by 25 points",
      "Led redesign of core workflow reducing task time by 40%",
    ],
    order: 1,
  },
  {
    company: "TechStart Labs",
    role: "Product Designer",
    description:
      "Designed consumer-facing products from 0 to 1. Worked closely with founders on product strategy and user experience.",
    startDate: "2020-03",
    endDate: "2021-12",
    technologies: [
      "Figma",
      "User Research",
      "Prototyping",
      "HTML/CSS",
      "React",
    ],
    highlights: [
      "Designed MVP that raised $5M Series A",
      "Created design process from scratch",
      "Launched 3 major product features",
    ],
    order: 2,
  },
  {
    company: "Creative Agency",
    role: "UI/UX Designer",
    description:
      "Worked with diverse clients on web and mobile applications. Specialized in e-commerce and fintech projects.",
    startDate: "2018-06",
    endDate: "2020-02",
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
      "Established accessibility standards for agency",
    ],
    order: 3,
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
    title: "Experience: Design Studio Inc.",
    category: "experience",
    tags: ["leadership", "design-systems", "mentoring"],
    source: "personal",
    content:
      "At Design Studio Inc., I lead design for enterprise SaaS products. Key achievements: built and maintain the company design system used by 500+ designers across 12 product teams; improved product NPS by 25 points through systematic UX improvements; led redesign of core workflow reducing average task completion time by 40%; mentor 5 junior designers; established design review process and design quality standards; introduced user research as a mandatory step in product development cycle.",
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
