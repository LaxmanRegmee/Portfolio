import { query } from "../_generated/server";
import { v } from "convex/values";

export const getSession = query({
  args: { sessionId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("chatSessions")
      .filter((q) => q.eq(q.field("sessionId"), args.sessionId))
      .unique();
  },
});

export const getMessages = query({
  args: { sessionId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("chatMessages")
      .filter((q) => q.eq(q.field("sessionId"), args.sessionId))
      .order("asc")
      .collect();
  },
});

export const getRecentSessions = query({
  args: { userId: v.optional(v.id("users")), limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    let q = ctx.db.query("chatSessions").order("desc");

    if (args.userId) {
      q = q.filter((q) => q.eq(q.field("userId"), args.userId));
    }

    return await q.take(args.limit ?? 10);
  },
});
