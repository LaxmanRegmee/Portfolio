import {
  internalMutation,
  internalAction,
  internalQuery,
} from "../_generated/server";
import { internal } from "../_generated/api";
import { v } from "convex/values";
import { openai } from "@ai-sdk/openai";
import { embed } from "ai";

const EMBEDDING_MODEL = "text-embedding-3-small";
const CHUNK_SIZE = 1000;
const CHUNK_OVERLAP = 200;

export const ingestDocument = internalMutation({
  args: {
    content: v.string(),
    metadata: v.object({
      title: v.string(),
      category: v.string(),
      tags: v.array(v.string()),
      source: v.string(),
    }),
  },
  handler: async (ctx, args) => {
    // 1. Chunk the document
    const chunks = chunkText(args.content, CHUNK_SIZE, CHUNK_OVERLAP);

    // 2. Generate embeddings for each chunk
    const embeddings = await Promise.all(
      chunks.map((chunk) =>
        embed({ model: openai.embedding(EMBEDDING_MODEL), value: chunk }),
      ),
    );

    // 3. Store document and chunks with embeddings
    const docId = await ctx.db.insert("knowledgeDocuments", {
      ...args.metadata,
      content: args.content,
      createdAt: Date.now(),
    });

    await Promise.all(
      chunks.map((chunk, i) =>
        ctx.db.insert("knowledgeChunks", {
          documentId: docId,
          content: chunk,
          embedding: embeddings[i].embedding,
          chunkIndex: i,
          category: args.metadata.category,
          createdAt: Date.now(),
        }),
      ),
    );

    return docId;
  },
});

export const searchKnowledge = internalAction({
  args: {
    query: v.string(),
    limit: v.optional(v.number()),
    category: v.optional(v.string()),
  },
  handler: async (
    ctx,
    args,
  ): Promise<
    Array<{
      _id: string;
      _creationTime: number;
      createdAt: number;
      category: string;
      content: string;
      documentId: string;
      embedding: number[];
      chunkIndex: number;
    } | null>
  > => {
    // Generate query embedding
    const { embedding } = await embed({
      model: openai.embedding(EMBEDDING_MODEL),
      value: args.query,
    });

    // Vector similarity search using the vector index
    const results = await ctx.vectorSearch(
      "knowledgeChunks",
      "embedding_index",
      {
        vector: embedding,
        limit: args.limit ?? 5,
        filter: args.category
          ? (q: any) => q.eq("category", args.category as string)
          : undefined,
      },
    );

    // Fetch the full documents for the results
    const chunks = await Promise.all(
      results.map((r: any) =>
        ctx.runQuery(internal.knowledge.rag.getChunkById, { id: r._id }),
      ),
    );

    return chunks.filter((c: any): c is NonNullable<typeof c> => c !== null);
  },
});

export const getChunkById = internalQuery({
  args: { id: v.id("knowledgeChunks") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

function chunkText(text: string, size: number, overlap: number): string[] {
  const chunks: string[] = [];
  let start = 0;
  while (start < text.length) {
    const end = Math.min(start + size, text.length);
    chunks.push(text.slice(start, end));
    start += size - overlap;
  }
  return chunks;
}
