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
        className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Chat Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md sm:max-w-lg lg:max-w-xl bg-neutral-950 border-l border-neutral-800 flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-accent-500/10">
              <Sparkles
                className="h-5 w-5 text-accent-400"
                aria-hidden="true"
              />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-100">Laxman's AI</h3>
              <p className="text-xs text-neutral-400">
                Ask me anything about my work
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            aria-label="Close chat"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Messages */}
        <div
          className="flex-1 overflow-y-auto p-4 space-y-6"
          aria-live="polite"
        >
          {messages.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare
                className="h-12 w-12 text-neutral-700 mx-auto mb-4"
                aria-hidden="true"
              />
              <p className="text-neutral-400 text-sm mb-2">
                Hi! I'm Laxman's AI assistant.
              </p>
              <p className="text-neutral-500 text-xs">
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
                <div className="shrink-0 h-8 w-8 rounded-xl bg-accent-500/10 flex items-center justify-center">
                  <Sparkles
                    className="h-4 w-4 text-accent-400"
                    aria-hidden="true"
                  />
                </div>
              )}
              {message.role === "user" && (
                <div className="shrink-0 h-8 w-8 rounded-xl bg-neutral-800 flex items-center justify-center">
                  <span className="text-xs font-medium text-neutral-300">
                    LR
                  </span>
                </div>
              )}

              <div
                className={cn(
                  "max-w-[75%] rounded-2xl px-4 py-3",
                  message.role === "user"
                    ? "bg-accent-500 text-neutral-950 rounded-br-md"
                    : "bg-neutral-900 text-neutral-100 border border-neutral-800 rounded-bl-md",
                )}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {getMessageContent(message)}
                </p>

                {message.role === "assistant" &&
                  getMessageData(message)?.sources && (
                    <details className="mt-3">
                      <summary className="text-xs text-neutral-400 hover:text-neutral-300 cursor-pointer flex items-center gap-1">
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
                              className="bg-neutral-950/50 rounded-lg p-2"
                            >
                              <p className="font-medium text-neutral-300">
                                {source.title}
                              </p>
                              <p className="line-clamp-2">{source.snippet}</p>
                              {source.url && (
                                <a
                                  href={source.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-accent-400 hover:underline mt-1 inline-block"
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
              <div className="shrink-0 h-8 w-8 rounded-xl bg-accent-500/10 flex items-center justify-center">
                <Sparkles
                  className="h-4 w-4 text-accent-400 animate-pulse"
                  aria-hidden="true"
                />
              </div>
              <div className="bg-neutral-900 rounded-2xl rounded-bl-md border border-neutral-800 px-4 py-3 max-w-[75%]">
                <div className="flex items-center gap-1.5 text-neutral-400">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-bounce"
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
          className="p-4 border-t border-neutral-800"
        >
          <div className="flex items-end gap-2">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 min-h-11 max-h-32 rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 resize-none transition-colors"
              rows={1}
              disabled={status === "streaming"}
              aria-label="Chat input"
            />
            <button
              type="submit"
              disabled={!input.trim() || status === "streaming"}
              className={cn(
                "shrink-0 h-10 w-10 rounded-xl flex items-center justify-center transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
                input.trim() && status !== "streaming"
                  ? "bg-accent-500 text-neutral-950 hover:bg-accent-400"
                  : "bg-neutral-800 text-neutral-500 cursor-not-allowed",
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
          <p className="text-xs text-neutral-500 text-center mt-2">
            Powered by AI • Your conversations are private
          </p>
        </form>
      </div>
    </div>
  );
}
