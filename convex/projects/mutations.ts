import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const createProject = mutation({
  args: {
    title: v.string(),
    slug: v.string(),
    description: v.string(),
    longDescription: v.optional(v.string()),
    thumbnail: v.string(),
    images: v.array(v.string()),
    tags: v.array(v.string()),
    technologies: v.array(v.string()),
    year: v.string(),
    featured: v.boolean(),
    type: v.union(v.literal("image"), v.literal("video")),
    videoUrl: v.optional(v.string()),
    links: v.object({
      demo: v.optional(v.string()),
      github: v.optional(v.string()),
      caseStudy: v.optional(v.string()),
    }),
    order: v.number(),
    company: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("projects", {
      ...args,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    return id;
  },
});

export const updateProject = mutation({
  args: {
    id: v.id("projects"),
    title: v.optional(v.string()),
    slug: v.optional(v.string()),
    description: v.optional(v.string()),
    longDescription: v.optional(v.string()),
    thumbnail: v.optional(v.string()),
    images: v.optional(v.array(v.string())),
    tags: v.optional(v.array(v.string())),
    technologies: v.optional(v.array(v.string())),
    year: v.optional(v.string()),
    featured: v.optional(v.boolean()),
    type: v.optional(v.union(v.literal("image"), v.literal("video"))),
    videoUrl: v.optional(v.string()),
    links: v.optional(
      v.object({
        demo: v.optional(v.string()),
        github: v.optional(v.string()),
        caseStudy: v.optional(v.string()),
      }),
    ),
    order: v.optional(v.number()),
    company: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    await ctx.db.patch(id, {
      ...updates,
      updatedAt: Date.now(),
    });
    return id;
  },
});

export const deleteProject = mutation({
  args: { id: v.id("projects") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return { success: true };
  },
});
