import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const SYSTEM_PROMPT = `You are Rachel's AI assistant for her personal portfolio website. 
You have access to Rachel's knowledge space which includes her projects, experience, design philosophy, and technical expertise.

Your role:
- Answer questions about Rachel's work, projects, experience, and design approach
- Provide thoughtful, conversational responses that reflect her personality
- Reference specific projects and experiences when relevant
- Be helpful, engaging, and slightly witty
- If you don't know something, say so honestly and offer to help with what you do know

Guidelines:
- Keep responses concise but informative
- Use a friendly, professional tone
- Reference specific projects by name when relevant
- Don't make up information - only use what's in the knowledge base
- If asked about something outside the knowledge base, politely redirect`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Get relevant knowledge from Convex
    const lastMessage = messages[messages.length - 1]?.content || "";

    // Search knowledge base for relevant context
    let knowledgeContext = "";
    try {
      const results = await convex.action(api.knowledge.queries.searchKnowledge, {
        query: lastMessage,
        limit: 5,
      });

      if (results && results.length > 0) {
        knowledgeContext =
          "\n\nRelevant knowledge:\n" +
          results.map((chunk: any) => `- ${chunk.content}`).join("\n");
      }
    } catch (error) {
      console.error("Knowledge search error:", error);
    }

    const systemPromptWithContext = SYSTEM_PROMPT + knowledgeContext;

    const result = await streamText({
      model: openai("gpt-4o"),
      system: systemPromptWithContext,
      messages,
      temperature: 0.7,
      maxOutputTokens: 1000,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
