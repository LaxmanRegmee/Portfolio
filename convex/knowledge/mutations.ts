import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const createDocument = mutation({
  args: {
    title: v.string(),
    category: v.string(),
    tags: v.array(v.string()),
    source: v.string(),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("knowledgeDocuments", {
      ...args,
      createdAt: Date.now(),
    });
    return id;
  },
});

export const deleteDocument = mutation({
  args: { id: v.id("knowledgeDocuments") },
  handler: async (ctx, args) => {
    // Delete associated chunks first
    const chunks = await ctx.db
      .query("knowledgeChunks")
      .filter((q) => q.eq(q.field("documentId"), args.id))
      .collect();

    await Promise.all(chunks.map((chunk) => ctx.db.delete(chunk._id)));
    await ctx.db.delete(args.id);
    return { success: true };
  },
});
