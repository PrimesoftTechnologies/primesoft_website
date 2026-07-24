"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const WhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const time = `${hours}:${minutes}`;

  const handleSend = () => {
    if (!message.trim()) return;
    const phoneNumber = "255746805383";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="pointer-events-auto absolute bottom-[calc(100%+0.75rem)] right-0 w-[min(21rem,calc(100vw-2rem))] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.2)]"
          >
            <div className="flex items-start gap-3 bg-[#0f7a6d] px-4 py-3 text-white">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[0.65rem] font-bold uppercase tracking-wide text-[#0f7a6d] shadow-sm">
                PS
              </div>
              <div className="min-w-0">
                <div className="truncate text-base font-bold">PrimeSoft</div>
                <div className="mt-0.5 text-xs text-white/85">Online</div>
              </div>
              <button
                type="button"
                aria-label="Close WhatsApp chat"
                onClick={() => setIsOpen(false)}
                className="ml-auto rounded-full p-1 text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <CloseMiniIcon />
              </button>
            </div>

            <div className="bg-[#f2ede3] px-4 py-4">
              <div className="mb-3 text-center text-[0.65rem] text-slate-400">
                {time}
              </div>

              <div className="max-w-48 rounded-2xl rounded-tl-md bg-white px-4 py-3 text-sm text-slate-700 shadow-[0_10px_20px_rgba(15,23,42,0.08)]">
                <div>
                  Karibu{" "}
                  <span className="font-bold text-slate-900">PrimeSoft</span>{" "}
                  <span aria-hidden="true">👋</span>
                </div>
                <div className="mt-2">How can I help you?</div>
              </div>
            </div>

            <div className="border-t border-slate-200 bg-white px-4 py-3">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-400">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter Your Message..."
                  className="flex-1 bg-transparent outline-none text-slate-700"
                />
                <button
                  type="button"
                  onClick={handleSend}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25d366] text-white shadow-sm"
                >
                  <SendIcon />
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        aria-label={isOpen ? "WhatsApp chat is open" : "Open WhatsApp chat"}
        onClick={() => setIsOpen((open) => !open)}
        className="pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#25d366] text-white shadow-[0_16px_36px_rgba(37,211,102,0.35)] transition hover:scale-[1.03]"
      >
        <WhatsAppGlyph className="size-7" />
        <span className="absolute right-1 top-1 h-3 w-3 rounded-full border-2 border-white bg-red-500" />
      </button>
    </div>
  );
};

function CloseMiniIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="size-4"
      aria-hidden="true"
    >
      <path d="m7 7 10 10M17 7 7 17" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-3.5"
      aria-hidden="true"
    >
      <path d="M3.4 20.4 21 12 3.4 3.6l.2 6 8.1 2.4-8.1 2.4-.2 6Z" />
    </svg>
  );
}

function WhatsAppGlyph({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.5 11.8A8.5 8.5 0 0 0 7 5.2a8.36 8.36 0 0 0-2.48 8.4L3 21l7.65-1.45a8.5 8.5 0 0 0 9.85-7.75Zm-8.52 6.1a7 7 0 0 1-3.58-.98l-.26-.16-4.54.86.88-4.42-.17-.27a7 7 0 1 1 6.02 4.97Zm3.84-5.25c-.21-.1-1.27-.63-1.47-.7-.2-.08-.34-.11-.49.1-.15.2-.57.7-.7.84-.13.15-.26.16-.48.06-.21-.1-.9-.33-1.72-1.06-.64-.57-1.07-1.27-1.2-1.48-.12-.2-.02-.3.1-.4.1-.1.22-.26.33-.39.11-.13.15-.21.22-.35.08-.15.04-.27-.02-.38-.06-.1-.49-1.19-.67-1.63-.18-.43-.36-.37-.49-.37h-.42a.8.8 0 0 0-.57.27c-.2.2-.77.75-.77 1.83s.8 2.11.9 2.26c.1.15 1.56 2.39 3.78 3.35.53.23.95.36 1.28.46.54.17 1.03.14 1.41.08.43-.06 1.27-.52 1.44-1.01.18-.5.18-.93.12-1.01-.05-.09-.2-.14-.41-.24Z" />
    </svg>
  );
}

export default WhatsAppPopup;
