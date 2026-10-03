import { query } from "../_generated/server";
import { v } from "convex/values";

export const getProjects = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("projects").order("asc").collect();
  },
});

export const getProjectBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("slug"), args.slug))
      .unique();
  },
});

export const getFeaturedProjects = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("featured"), true))
      .order("asc")
      .take(args.limit ?? 6);
  },
});

export const getProjectsPaginated = query({
  args: {
    cursor: v.optional(v.string()),
    limit: v.number(),
  },
  handler: async (ctx, args) => {
    let q = ctx.db.query("projects").order("asc");

    if (args.cursor) {
      q = q.filter((q) => q.gt(q.field("_id"), args.cursor as string));
    }

    const results = await q.take(args.limit + 1);
    const hasMore = results.length > args.limit;
    const items = hasMore ? results.slice(0, -1) : results;
    const nextCursor = hasMore ? results[results.length - 1]._id : null;

    return { items, nextCursor, hasMore };
  },
});
