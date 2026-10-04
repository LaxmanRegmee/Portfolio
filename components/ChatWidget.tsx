"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { X, Send, Loader2, MessageSquare, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatWidget({ isOpen, onClose }: ChatWidgetProps) {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage, status, stop, setMessages } = useChat({
    onError: (error) => {
      console.error("Chat error:", error);
    },
  });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      textareaRef.current?.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || status === "streaming") return;
    sendMessage({ text: input });
    setInput("");
  };

  const getMessageContent = (message: any) => {
    if (typeof message.content === "string") {
      return message.content;
    }
    if (Array.isArray(message.content)) {
      return message.content.map((part: any) => part.text || "").join("");
    }
    return "";
  };

  const getMessageData = (message: any) => {
    if (message.data) return message.data;
    if (Array.isArray(message.content)) {
      const dataPart = message.content.find(
        (part: any) => part.type === "data",
      );
      return dataPart?.data;
    }
    return undefined;
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label="AI Assistant Chat"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Chat Panel - matches Figma RacheLLM modal */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md sm:max-w-lg lg:max-w-xl bg-white border-l border-neutral-200 flex flex-col animate-slide-in-right shadow-xl">
        {/* Header - matches Figma: 383×64, "RacheLLM" + Settings + Reset + Close */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-neutral-200 bg-white">
          <div className="flex items-center gap-3">
            <h3 className="text-h4 font-semibold text-black">RacheLLM</h3>
          </div>
          <div className="flex items-center gap-1">
            <button
              className="p-2 rounded-full text-neutral-500 hover:text-black hover:bg-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              aria-label="Settings"
            >
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              className="p-2 rounded-full text-neutral-500 hover:text-black hover:bg-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              aria-label="Reset conversation"
            >
              <Loader2 className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-neutral-500 hover:text-black hover:bg-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div
          className="flex-1 overflow-y-auto p-4 space-y-6"
          aria-live="polite"
        >
          {messages.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare
                className="h-12 w-12 text-neutral-300 mx-auto mb-4"
                aria-hidden="true"
              />
              <p className="text-neutral-500 text-sm mb-2">
                Hi! I&apos;m Rachel&apos;s AI assistant.
              </p>
              <p className="text-neutral-400 text-xs">
                Ask me about my projects, experience, design process, or
                anything else!
              </p>
            </div>
          )}

          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex gap-3",
                message.role === "user" ? "flex-row-reverse" : "",
              )}
            >
              {message.role === "assistant" && (
                <div className="shrink-0 h-8 w-8 rounded-xl bg-black/5 flex items-center justify-center">
                  <Sparkles
                    className="h-4 w-4 text-black"
                    aria-hidden="true"
                  />
                </div>
              )}
              {message.role === "user" && (
                <div className="shrink-0 h-8 w-8 rounded-xl bg-black flex items-center justify-center">
                  <span className="text-xs font-medium text-white">
                    RC
                  </span>
                </div>
              )}

              <div
                className={cn(
                  "max-w-[75%] rounded-2xl px-4 py-3",
                  message.role === "user"
                    ? "bg-black text-white rounded-br-md"
                    : "bg-neutral-100 text-black border border-neutral-200 rounded-bl-md",
                )}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {getMessageContent(message)}
                </p>

                {message.role === "assistant" &&
                  getMessageData(message)?.sources && (
                    <details className="mt-3">
                      <summary className="text-xs text-neutral-500 hover:text-black cursor-pointer flex items-center gap-1">
                        <Sparkles className="h-3 w-3" aria-hidden="true" />
                        Sources ({getMessageData(message).sources.length})
                      </summary>
                      <ul className="mt-2 space-y-1 text-xs text-neutral-500">
                        {getMessageData(message).sources.map(
                          (
                            source: {
                              title: string;
                              url?: string;
                              snippet: string;
                            },
                            i: number,
                          ) => (
                            <li
                              key={i}
                              className="bg-neutral-50 rounded-lg p-2"
                            >
                              <p className="font-medium text-black">
                                {source.title}
                              </p>
                              <p className="line-clamp-2">{source.snippet}</p>
                              {source.url && (
                                <a
                                  href={source.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-black hover:underline mt-1 inline-block"
                                >
                                  Read more →
                                </a>
                              )}
                            </li>
                          ),
                        )}
                      </ul>
                    </details>
                  )}
              </div>
            </div>
          ))}

          {status === "streaming" && (
            <div className="flex gap-3">
              <div className="shrink-0 h-8 w-8 rounded-xl bg-black/5 flex items-center justify-center">
                <Sparkles
                  className="h-4 w-4 text-black animate-pulse"
                  aria-hidden="true"
                />
              </div>
              <div className="bg-neutral-100 rounded-2xl rounded-bl-md border border-neutral-200 px-4 py-3 max-w-[75%]">
                <div className="flex items-center gap-1.5 text-neutral-500">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-black animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-black animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-black animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="p-4 border-t border-neutral-200 bg-white"
        >
          <div className="flex items-end gap-2">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 min-h-11 max-h-32 rounded-xl bg-neutral-50 border border-neutral-200 px-4 py-3 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black resize-none transition-colors"
              rows={1}
              disabled={status === "streaming"}
              aria-label="Chat input"
            />
            <button
              type="submit"
              disabled={!input.trim() || status === "streaming"}
              className={cn(
                "shrink-0 h-10 w-10 rounded-xl flex items-center justify-center transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
                input.trim() && status !== "streaming"
                  ? "bg-black text-white hover:bg-neutral-800"
                  : "bg-neutral-200 text-neutral-400 cursor-not-allowed",
              )}
              aria-label={
                status === "streaming" ? "Sending..." : "Send message"
              }
            >
              {status === "streaming" ? (
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              ) : (
                <Send className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
          <p className="text-xs text-neutral-400 text-center mt-2">
            Powered by AI • Your conversations are private
          </p>
        </form>
      </div>
    </div>
  );
}
