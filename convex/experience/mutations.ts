import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const createExperience = mutation({
  args: {
    company: v.string(),
    role: v.string(),
    description: v.string(),
    startDate: v.string(),
    endDate: v.optional(v.string()),
    technologies: v.array(v.string()),
    highlights: v.array(v.string()),
    logo: v.optional(v.string()),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("experience", {
      ...args,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    return id;
  },
});

export const updateExperience = mutation({
  args: {
    id: v.id("experience"),
    company: v.optional(v.string()),
    role: v.optional(v.string()),
    description: v.optional(v.string()),
    startDate: v.optional(v.string()),
    endDate: v.optional(v.string()),
    technologies: v.optional(v.array(v.string())),
    highlights: v.optional(v.array(v.string())),
    logo: v.optional(v.string()),
    order: v.optional(v.number()),
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

export const deleteExperience = mutation({
  args: { id: v.id("experience") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return { success: true };
  },
});
