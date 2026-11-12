"use client";

import { useState, Fragment } from "react";
import { useChat } from "@ai-sdk/react";
import {
  CopyIcon,
  RefreshCcwIcon,
  SparklesIcon,
  MessageCircle,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";

import {
  Message,
  MessageContent,
  MessageResponse,
  MessageActions,
  MessageAction,
} from "@/components/ai-elements/message";

import {
  PromptInput,
  PromptInputTextarea,
  PromptInputSubmit,
  type PromptInputMessage,
} from "@/components/ai-elements/prompt-input";

import { Suggestions, Suggestion } from "@/components/ai-elements/suggestion";

import { DefaultChatTransport } from "ai";
import { useLocale } from "next-intl";

const STARTER_PROMPTS = [
  "How to donate",
  "How to contact",
  "FAQ - Frequently asked questions",
];

export function AIChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Floating Chat Button */}
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label="Open AI Assistant"
          className="fixed bottom-5  right-5 z-50 flex size-14 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95 sm:bottom-6 sm:right-6"
        >
          <MessageCircle className="size-6" />
        </button>
      </DialogTrigger>

      {/* Chat Dialog */}
      <DialogContent className="!fixed !bottom-4 !right-4 !left-auto !top-auto !translate-x-0 !translate-y-0 flex h-[min(80dvh,680px)] w-[calc(100vw-2rem)] max-w-none flex-col gap-0 overflow-hidden rounded-xl border bg-background p-0 shadow-2xl sm:!bottom-6 sm:!right-6 sm:w-[420px] sm:h-[650px]">
        {/* Accessible Dialog Title */}
        <DialogHeader className="sr-only">
          <DialogTitle>AI Assistant</DialogTitle>
          <DialogDescription>
            Ask questions about Street Gospel Mission Church.
          </DialogDescription>
        </DialogHeader>

        <AIChatbox />
      </DialogContent>
    </Dialog>
  );
}

function AIChatbox() {
  const locale = useLocale();
  const [input, setInput] = useState("");

  const { messages, sendMessage, status, stop, regenerate } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
      body: {
        locale,
      },
    }),
  });

  const isGenerating = status === "submitted" || status === "streaming";

  const handleSubmit = (message: PromptInputMessage) => {
    const trimmed = message.text.trim();

    if (!trimmed || isGenerating) return;

    sendMessage({ text: trimmed });
    setInput("");
  };

  const handleSuggestionClick = (prompt: string) => {
    if (isGenerating) return;

    sendMessage({ text: prompt });
  };

  return (
    <div className="flex h-full min-h-0 w-full flex-col overflow-hidden bg-background">
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between border-b px-4 py-3">
        <div className="flex items-center gap-2">
          <SparklesIcon className="size-4 text-primary" />

          <h2 className="text-sm font-semibold">AI Assistant</h2>
        </div>

        <span className="flex items-center gap-2 text-xs text-muted-foreground mx-8">
          {status === "ready" ? (
            <>
              <svg
                className="size-2"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="4"
                  cy="4"
                  r="3"
                  fill="#22c55e"
                  className="animate-pulse"
                />
              </svg>
              <span className="text-green-600 dark:text-green-500">Online</span>
            </>
          ) : (
            <span className="capitalize">{status}</span>
          )}
        </span>
      </div>

      {/* Message Thread */}
      <Conversation className="min-h-0 flex-1">
        <ConversationContent className="p-4">
          {messages.length === 0 ? (
            <ConversationEmptyState
              title="How can I help you today?"
              description="Ask a question or pick one of the suggestions below to get started."
            />
          ) : (
            messages.map((message, messageIndex) => {
              const isLastMessage = messageIndex === messages.length - 1;

              const isAssistant = message.role === "assistant";

              const isGeneratingThisMessage =
                isLastMessage && isAssistant && status === "streaming";

              const messageText = message.parts
                .filter((part) => part.type === "text")
                .map((part) => part.text)
                .join("");

              return (
                <Message key={message.id} from={message.role}>
                  <MessageContent>
                    {/* Message Text */}
                    {message.parts.map((part, partIndex) => {
                      if (part.type !== "text") return null;

                      return (
                        <Fragment key={`${message.id}-${partIndex}`}>
                          {isAssistant ? (
                            <MessageResponse>{part.text}</MessageResponse>
                          ) : (
                            <p className="whitespace-pre-wrap">{part.text}</p>
                          )}
                        </Fragment>
                      );
                    })}

                    {/* Assistant Message Actions */}
                    {isAssistant && !isGeneratingThisMessage && messageText && (
                      <MessageActions className="mt-1">
                        <MessageAction
                          tooltip="Copy"
                          onClick={() =>
                            navigator.clipboard.writeText(messageText)
                          }
                        >
                          <CopyIcon className="size-3.5" />
                        </MessageAction>

                        {isLastMessage && (
                          <MessageAction
                            tooltip="Regenerate"
                            onClick={() => regenerate()}
                          >
                            <RefreshCcwIcon className="size-3.5" />
                          </MessageAction>
                        )}
                      </MessageActions>
                    )}
                  </MessageContent>
                </Message>
              );
            })
          )}

          {/* Thinking Indicator */}
          {status === "submitted" && (
            <Message from="assistant">
              <MessageContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <SparklesIcon className="size-4 animate-pulse" />
                  Thinking...
                </div>
              </MessageContent>
            </Message>
          )}
        </ConversationContent>

        <ConversationScrollButton />
      </Conversation>

      {/* Quick Suggestions */}
      <div className="shrink-0 px-4 pb-2">
        <Suggestions>
          {STARTER_PROMPTS.map((prompt) => (
            <Suggestion
              key={prompt}
              suggestion={prompt}
              onClick={() => handleSuggestionClick(prompt)}
            />
          ))}
        </Suggestions>
      </div>

      {/* Prompt Input Footer */}
      <div className="shrink-0 border-t p-3">
        <PromptInput onSubmit={handleSubmit} className="w-full">
          <PromptInputTextarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Send a message..."
            disabled={isGenerating}
          />

          <PromptInputSubmit
            className="mx-4 cursor-pointer"
            status={status}
            onClick={status === "streaming" ? () => stop() : undefined}
            disabled={
              status === "submitted" || (!input.trim() && status === "ready")
            }
          />
        </PromptInput>
      </div>
    </div>
  );
}
