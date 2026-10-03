import { query, action } from "../_generated/server";
import { internal } from "../_generated/api";
import { v } from "convex/values";

export const getKnowledgeStats = query({
  args: {},
  handler: async (ctx) => {
    const [documents, chunks] = await Promise.all([
      ctx.db.query("knowledgeDocuments").collect(),
      ctx.db.query("knowledgeChunks").collect(),
    ]);

    const categories = [...new Set(documents.map((d) => d.category))];
    const categoryCounts = categories.map((cat) => ({
      category: cat,
      count: documents.filter((d) => d.category === cat).length,
    }));

    return {
      totalDocuments: documents.length,
      totalChunks: chunks.length,
      categories: categoryCounts,
    };
  },
});

export const getDocumentsByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("knowledgeDocuments")
      .filter((q) => q.eq(q.field("category"), args.category))
      .collect();
  },
});

export const searchKnowledge = action({
  args: {
    query: v.string(),
    limit: v.optional(v.number()),
    category: v.optional(v.string()),
  },
  handler: async (
    ctx,
    args,
  ): Promise<
    | {
        _id: string;
        _creationTime: number;
        createdAt: number;
        category: string;
        content: string;
        documentId: string;
        embedding: number[];
        chunkIndex: number;
      }[]
    | null
  > => {
    const results = await ctx.runAction(
      internal.knowledge.rag.searchKnowledge,
      args,
    );
    return (
      results?.filter((r: any): r is NonNullable<typeof r> => r !== null) ??
      null
    );
  },
});
