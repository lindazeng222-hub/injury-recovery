"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Send, Bot, AlertTriangle } from "lucide-react";
import { INJURIES } from "@/lib/data";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
};

const STARTER_PROMPTS = [
  "I heard a pop in my knee during practice and now it's swollen and hard to straighten.",
  "My shoulder has been aching for 3 weeks when I throw. It's getting worse.",
  "I've had shin pain for a month that hurts when I run but goes away after.",
];

// Detect /injuries/slug links from AI response
function extractInjurySlugs(text: string): string[] {
  const regex = /\(\/injuries\/([\w-]+)\)/g;
  const slugs: string[] = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (!slugs.includes(match[1])) slugs.push(match[1]);
  }
  return slugs;
}

// Lightweight markdown renderer for AI messages
function renderMarkdown(text: string) {
  const paragraphs = text.split(/\n\n+/);
  return paragraphs.map((para, pi) => {
    // Bullet list paragraph
    const lines = para.split("\n");
    const isList = lines.every((l) => l.trimStart().startsWith("- ") || l.trim() === "");
    if (isList && lines.some((l) => l.trimStart().startsWith("- "))) {
      return (
        <ul key={pi} className="list-none space-y-1 my-2">
          {lines
            .filter((l) => l.trimStart().startsWith("- "))
            .map((l, li) => (
              <li key={li} className="flex gap-2">
                <span className="text-[#FF3B30] flex-shrink-0">·</span>
                <span>{renderInline(l.replace(/^-\s+/, ""))}</span>
              </li>
            ))}
        </ul>
      );
    }
    // Normal paragraph
    return (
      <p key={pi} className={pi > 0 ? "mt-3" : ""}>
        {lines.map((line, li) => (
          <span key={li}>
            {renderInline(line)}
            {li < lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    );
  });
}

function renderInline(text: string) {
  // Process **bold** and [label](url) links
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const isInternal = href.startsWith("/");
      if (isInternal) {
        return (
          <Link
            key={i}
            href={href}
            className="text-[#FF3B30] underline underline-offset-2 hover:text-white transition-colors"
          >
            {label}
          </Link>
        );
      }
      return (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FF3B30] underline underline-offset-2 hover:text-white transition-colors"
        >
          {label}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 max-w-[75%]">
      <div className="w-7 h-7 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center flex-shrink-0">
        <Bot size={14} className="text-[#FF3B30]" />
      </div>
      <div className="bg-[#1A1A1A] border border-white/10 rounded-sm px-4 py-3 flex gap-1.5 items-center">
        {[0, 150, 300].map((delay) => (
          <span
            key={delay}
            className="w-2 h-2 rounded-full bg-[#A1A1AA] animate-bounce"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

function InjuryGuideCard({ slug }: { slug: string }) {
  const injury = INJURIES.find((i) => i.slug === slug);
  if (!injury) return null;
  return (
    <Link
      href={`/injuries/${slug}`}
      className="mt-3 flex items-center justify-between bg-[#0A0A0A] border border-white/10 rounded-sm px-4 py-3 hover:border-[#FF3B30]/50 transition-colors group"
    >
      <div>
        <p className="text-xs text-[#FF3B30] font-bold uppercase tracking-widest mb-0.5">
          {injury.body_part} · {injury.recovery_time}
        </p>
        <p className="text-white text-sm font-medium">{injury.name} Recovery Guide →</p>
      </div>
    </Link>
  );
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";
  const slugs = !isUser && !message.isStreaming ? extractInjurySlugs(message.content) : [];

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="bg-[#FF3B30] text-white rounded-sm px-4 py-3 max-w-[75%] text-sm leading-relaxed">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-end gap-2 max-w-[85%]">
      <div className="w-7 h-7 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center flex-shrink-0 mb-0.5">
        <Bot size={14} className="text-[#FF3B30]" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="bg-[#1A1A1A] border border-white/10 rounded-sm px-4 py-3 text-sm text-[#E0E0E0] leading-relaxed">
          {renderMarkdown(message.content)}
          {message.isStreaming && (
            <span className="inline-block w-0.5 h-4 bg-[#FF3B30] ml-0.5 animate-pulse align-middle" />
          )}
        </div>
        {slugs.map((slug) => (
          <InjuryGuideCard key={slug} slug={slug} />
        ))}
      </div>
    </div>
  );
}

export default function AssessChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Auto-scroll on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  }, [input]);

  async function sendMessage(text?: string) {
    const content = (text ?? input).trim();
    if (!content || isLoading) return;

    // Cancel any in-flight request
    abortControllerRef.current?.abort();

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content,
    };
    const assistantId = crypto.randomUUID();
    const assistantPlaceholder: Message = {
      id: assistantId,
      role: "assistant",
      content: "",
      isStreaming: true,
    };

    setMessages((prev) => [...prev, userMessage, assistantPlaceholder]);
    setInput("");
    setIsLoading(true);

    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      const history = [...messages, userMessage].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const response = await fetch("/api/assess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
        signal: controller.signal,
      });

      if (!response.ok || !response.body) {
        throw new Error(`Server error: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, content: m.content + chunk } : m
          )
        );
      }

      // Mark streaming done
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId ? { ...m, isStreaming: false } : m
        )
      );
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") return;
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? {
                ...m,
                content: "Sorry, something went wrong. Please try again.",
                isStreaming: false,
              }
            : m
        )
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  const showTypingIndicator =
    isLoading && messages.length > 0 && !messages[messages.length - 1].isStreaming;

  return (
    <div className="flex flex-col h-[calc(100dvh-64px)]">
      {/* Header */}
      <div className="flex-shrink-0 border-b border-white/10 bg-[#121212] px-5 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-sm bg-[#FF3B30] flex items-center justify-center">
            <Bot size={16} className="text-white" />
          </div>
          <div>
            <h1 className="font-heading text-xl text-white tracking-wide leading-none">
              AI Symptom Checker
            </h1>
            <p className="text-[#A1A1AA] text-xs mt-0.5">
              Powered by Claude · For teen athletes
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-yellow-400/80 text-xs bg-yellow-400/5 border border-yellow-400/20 rounded-sm px-3 py-1.5">
          <AlertTriangle size={12} />
          <span>Not medical advice</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6">
        <div className="max-w-2xl mx-auto space-y-4">
          {/* Empty state */}
          {messages.length === 0 && (
            <div className="space-y-6">
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-sm bg-[#121212] border border-white/10 flex items-center justify-center mx-auto mb-4">
                  <Bot size={28} className="text-[#FF3B30]" />
                </div>
                <h2 className="font-heading text-3xl text-white uppercase tracking-wide mb-2">
                  Describe Your Injury
                </h2>
                <p className="text-[#A1A1AA] text-sm max-w-sm mx-auto">
                  Tell me what happened and I&apos;ll help you figure out your next step — home rest, PT, doctor, or ER.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-[#A1A1AA] uppercase tracking-widest font-bold">
                  Try one of these
                </p>
                {STARTER_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => sendMessage(prompt)}
                    className="w-full text-left bg-[#121212] border border-white/10 rounded-sm px-4 py-3 text-sm text-[#E0E0E0] hover:border-[#FF3B30]/50 hover:text-white transition-all"
                  >
                    &ldquo;{prompt}&rdquo;
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Message list */}
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}

          {showTypingIndicator && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="flex-shrink-0 border-t border-white/10 bg-[#121212] px-4 sm:px-8 py-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-3 items-end">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe your symptoms..."
              rows={1}
              disabled={isLoading}
              className="flex-1 bg-[#1A1A1A] border border-white/10 rounded-sm px-4 py-3 text-sm text-[#E0E0E0] placeholder-[#A1A1AA] resize-none focus:border-[#FF3B30]/60 focus:outline-none transition-colors disabled:opacity-50"
            />
            <button
              onClick={() => sendMessage()}
              disabled={isLoading || !input.trim()}
              className="bg-[#FF3B30] text-white p-3 rounded-sm hover:bg-[#E0352A] disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </div>
          <p className="text-[#A1A1AA] text-xs text-center mt-2">
            Enter to send · Shift+Enter for new line · Always follow up with a real doctor
          </p>
        </div>
      </div>
    </div>
  );
}
