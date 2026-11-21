"use client";

import { Dialog as ChatDialog } from "@base-ui/react/dialog";
import {
  ChatCircleDotsIcon,
  PaperPlaneTiltIcon,
  XIcon,
} from "@phosphor-icons/react";
import { FormEvent, useEffect, useState } from "react";

import { cn } from "@/src/lib/utils";

const CHAT_DELAY = 5000;

function ChatWidget() {
  const [isReady, setIsReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => setIsReady(true), CHAT_DELAY);

    return () => window.clearTimeout(timer);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // The chat transport will be connected here once the websocket is available.
    setMessage("");
  };

  if (!isReady) {
    return null;
  }

  return (
    <ChatDialog.Root open={open} onOpenChange={setOpen}>
      <ChatDialog.Portal>
        <ChatDialog.Backdrop
          className="fixed inset-0 z-80 bg-black/10 opacity-100 transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 md:bg-transparent"
          aria-hidden="true"
        />
        <ChatDialog.Popup
          className={cn(
            "fixed z-90 flex w-[calc(100%-2rem)] max-w-[380px] flex-col overflow-hidden rounded-[2px] bg-background text-foreground shadow-[0_18px_70px_rgba(0,0,0,0.22)] outline-none",
            "right-4 bottom-24 max-h-[min(640px,calc(100dvh-7rem))]",
            "transition-[opacity,transform] duration-200 ease-out data-ending-style:translate-y-3 data-ending-style:opacity-0 data-starting-style:translate-y-3 data-starting-style:opacity-0",
            "max-md:right-4 max-md:bottom-4 max-md:max-h-[calc(100dvh-2rem)]"
          )}
        >
          <div className="flex items-start justify-between gap-4 bg-foreground px-5 py-5 text-background">
            <div>
              <ChatDialog.Title className="font-heading text-2xl leading-none">
                Let&apos;s talk
              </ChatDialog.Title>
              <ChatDialog.Description className="mt-2 text-xs tracking-wide text-background/65">
                We&apos;re here to help with your next space.
              </ChatDialog.Description>
            </div>
            <ChatDialog.Close
              className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-background/70 transition-colors hover:bg-background/10 hover:text-background focus-visible:outline-1 focus-visible:outline-accent"
              aria-label="Close chat"
            >
              <XIcon size={18} aria-hidden="true" />
            </ChatDialog.Close>
          </div>

          <div className="flex min-h-56 flex-1 flex-col justify-end gap-5 p-5">
            <div className="flex items-start gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-foreground">
                <ChatCircleDotsIcon size={17} weight="duotone" aria-hidden="true" />
              </div>
              <div className="max-w-[82%] rounded-[2px] bg-muted px-4 py-3 text-sm leading-relaxed text-foreground">
                Hello! Tell us a little about your project and we&apos;ll be in touch.
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="border-t border-border p-4">
            <label htmlFor="chat-message" className="sr-only">
              Your message
            </label>
            <div className="flex items-center gap-2 border-b border-foreground/30 pb-2 focus-within:border-accent">
              <input
                id="chat-message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Write a message..."
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                disabled={!message.trim()}
                aria-label="Send message"
                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-opacity hover:opacity-75 disabled:pointer-events-none disabled:opacity-30"
              >
                <PaperPlaneTiltIcon size={15} weight="fill" aria-hidden="true" />
              </button>
            </div>
            <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              IdealHouse studio
            </p>
          </form>
        </ChatDialog.Popup>
      </ChatDialog.Portal>

      <ChatDialog.Trigger
        aria-label={open ? "Close chat" : "Open chat"}
        className={cn(
          "fixed right-5 bottom-5 z-90 flex size-14 items-center justify-center rounded-full bg-accent text-foreground shadow-[0_8px_30px_rgba(0,0,0,0.22)] outline-none transition-[transform,box-shadow] duration-200 hover:scale-105 hover:shadow-[0_10px_34px_rgba(0,0,0,0.3)] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "max-md:right-4 max-md:bottom-4"
        )}
      >
        {open ? (
          <XIcon size={23} aria-hidden="true" />
        ) : (
          <ChatCircleDotsIcon size={25} weight="duotone" aria-hidden="true" />
        )}
      </ChatDialog.Trigger>
    </ChatDialog.Root>
  );
}

export default ChatWidget;
