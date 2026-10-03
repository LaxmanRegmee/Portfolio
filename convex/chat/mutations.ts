import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const createSession = mutation({
  args: {
    sessionId: v.string(),
    userId: v.optional(v.id("users")),
    title: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("chatSessions", {
      ...args,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    return id;
  },
});

export const saveMessage = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    // Verify session exists
    const session = await ctx.db
      .query("chatSessions")
      .filter((q) => q.eq(q.field("sessionId"), args.sessionId))
      .unique();

    if (!session) {
      throw new Error("Session not found");
    }

    const messageId = await ctx.db.insert("chatMessages", {
      ...args,
      createdAt: Date.now(),
    });

    // Update session timestamp
    await ctx.db.patch(session._id, { updatedAt: Date.now() });

    return messageId;
  },
});

export const updateSessionTitle = mutation({
  args: {
    sessionId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const session = await ctx.db
      .query("chatSessions")
      .filter((q) => q.eq(q.field("sessionId"), args.sessionId))
      .unique();

    if (!session) {
      throw new Error("Session not found");
    }

    await ctx.db.patch(session._id, {
      title: args.title,
      updatedAt: Date.now(),
    });

    return { success: true };
  },
});
