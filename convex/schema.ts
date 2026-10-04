import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Portfolio projects
  projects: defineTable({
    title: v.string(),
    slug: v.string(),
    description: v.string(),
    longDescription: v.optional(v.string()),
    thumbnail: v.string(), // Convex file storage ID or URL
    images: v.array(v.string()), // Array of Convex file storage IDs
    tags: v.array(v.string()),
    technologies: v.array(v.string()),
    year: v.string(),
    featured: v.boolean(),
    type: v.union(v.literal("image"), v.literal("video")), // For video/image variant
    videoUrl: v.optional(v.string()), // For video projects
    links: v.object({
      demo: v.optional(v.string()),
      github: v.optional(v.string()),
      caseStudy: v.optional(v.string()),
    }),
    order: v.number(), // For custom ordering
    company: v.optional(v.string()), // Company/client name
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_featured", ["featured"])
    .index("by_order", ["order"]),

  // Work experience
  experience: defineTable({
    company: v.string(),
    role: v.string(),
    description: v.string(),
    startDate: v.string(),
    endDate: v.optional(v.string()),
    technologies: v.array(v.string()),
    highlights: v.array(v.string()),
    logo: v.optional(v.string()), // Convex file storage ID
    order: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_order", ["order"]),

  // Knowledge space documents
  knowledgeDocuments: defineTable({
    title: v.string(),
    category: v.string(),
    tags: v.array(v.string()),
    source: v.string(),
    content: v.string(),
    createdAt: v.number(),
  }).index("by_category", ["category"]),

  // Knowledge chunks with embeddings
  knowledgeChunks: defineTable({
    documentId: v.id("knowledgeDocuments"),
    content: v.string(),
    embedding: v.array(v.float64()),
    chunkIndex: v.number(),
    category: v.string(),
    createdAt: v.number(),
  })
    .index("by_document", ["documentId"])
    .index("by_category", ["category"])
    .vectorIndex("embedding_index", {
      vectorField: "embedding",
      dimensions: 1536,
      filterFields: ["category"],
    }),

  // Chat sessions
  chatSessions: defineTable({
    userId: v.optional(v.id("users")),
    sessionId: v.string(),
    title: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_session", ["sessionId"]),

  // Chat messages
  chatMessages: defineTable({
    sessionId: v.string(),
    role: v.union(v.literal("user"), v.literal("assistant")),
    content: v.string(),
    sources: v.optional(
      v.array(
        v.object({
          title: v.string(),
          url: v.optional(v.string()),
          snippet: v.string(),
        }),
      ),
    ),
    createdAt: v.number(),
  }).index("by_session", ["sessionId"]),
});
