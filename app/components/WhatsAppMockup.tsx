"use client";

import { useEffect, useState, useRef } from "react";
import { Check, CheckCheck } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "customer" | "bot";
  time: string;
  delay: number;
  typingDuration: number;
  isAutomation?: boolean;
  automationLabel?: string;
}

const messages: Message[] = [
  {
    id: 1,
    text: "Hey! I saw your Instagram reel 😍 Do you still have the blue summer dress?",
    sender: "customer",
    time: "10:23 AM",
    delay: 1500,
    typingDuration: 0,
  },
  {
    id: 2,
    text: "Hi there! 👋 Yes, the Blue Santorini Dress is one of our bestsellers! Let me pull up the details for you real quick ✨",
    sender: "bot",
    time: "10:23 AM",
    delay: 4000,
    typingDuration: 2200,
    isAutomation: true,
    automationLabel: "AI auto-reply • Intent detected",
  },
  {
    id: 3,
    text: "👗 Blue Santorini Maxi Dress\n━━━━━━━━━━━━━━\n🎨 Color: Ocean Blue\n📏 Available: S · M · L · XL\n💰 Price: Rs. 3,490\n⭐ 4.8/5 (126 reviews)\n📦 Free shipping • 2-3 day delivery\n━━━━━━━━━━━━━━\n🏷️ Use code INSTA15 for 15% off!",
    sender: "bot",
    time: "10:23 AM",
    delay: 7000,
    typingDuration: 2000,
    isAutomation: true,
    automationLabel: "Smart product card • AI generated",
  },
  {
    id: 4,
    text: "Omg that's perfect!! 😭 Size M please. Can I do cash on delivery?",
    sender: "customer",
    time: "10:24 AM",
    delay: 11000,
    typingDuration: 0,
  },
  {
    id: 5,
    text: "Of course! COD is available 🙌\n\nI've created your order — here's the summary:",
    sender: "bot",
    time: "10:24 AM",
    delay: 14000,
    typingDuration: 2000,
    isAutomation: true,
    automationLabel: "Auto-checkout • Order created",
  },
  {
    id: 6,
    text: "🛍️ Order Confirmed #ORD-1847\n━━━━━━━━━━━━━━\n👗 Blue Santorini Dress — M\n💰 Rs. 3,490  →  Rs. 2,967\n🏷️ Discount: -Rs. 523 (INSTA15)\n💳 Payment: Cash on Delivery\n📍 Delivery: 2-3 business days\n━━━━━━━━━━━━━━\n📲 You'll receive tracking updates right here. Thank you for shopping with us! 🎉",
    sender: "bot",
    time: "10:25 AM",
    delay: 17500,
    typingDuration: 2500,
    isAutomation: true,
    automationLabel: "AI receipt • Follow-up scheduled",
  },
  {
    id: 7,
    text: "Wait that's so fast 😂 You applied the discount too?? Thank youuu 💕",
    sender: "customer",
    time: "10:26 AM",
    delay: 21000,
    typingDuration: 0,
  },
  {
    id: 8,
    text: "Haha yes! 😄 The code was auto-applied since you came from Instagram. We've got your back!\n\nAnything else you'd like to browse? We just dropped a new Summer Collection 🌊☀️",
    sender: "bot",
    time: "10:26 AM",
    delay: 24000,
    typingDuration: 2200,
    isAutomation: true,
    automationLabel: "AI upsell • Smart recommendation",
  },
];

export default function WhatsAppMockup() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [typing, setTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    messages.forEach((msg) => {
      // Show typing indicator before bot messages
      if (msg.sender === "bot" && msg.typingDuration > 0) {
        timeouts.push(
          setTimeout(() => setTyping(true), msg.delay - msg.typingDuration)
        );
      }
      timeouts.push(
        setTimeout(() => {
          setTyping(false);
          setVisibleMessages((prev) => [...prev, msg.id]);
        }, msg.delay)
      );
    });

    // Loop the animation
    const totalDuration = messages[messages.length - 1].delay + 5000;
    const loopTimeout = setTimeout(() => {
      setVisibleMessages([]);
      setTyping(false);
    }, totalDuration);
    timeouts.push(loopTimeout);

    const restartTimeout = setTimeout(() => {
      // Re-trigger by forcing a re-mount-like effect
      setVisibleMessages([]);
      setTyping(false);
    }, totalDuration + 500);
    timeouts.push(restartTimeout);

    return () => timeouts.forEach(clearTimeout);
  }, [visibleMessages.length === 0 ? 0 : -1]);

  // Auto-scroll chat to bottom on new messages
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [visibleMessages, typing]);

  return (
    <div className="w-full max-w-[340px] mx-auto">
      {/* Realistic Phone Shell */}
      <div className="relative">
        {/* Outer phone body */}
        <div
          className="rounded-[3rem] p-[3px] shadow-2xl shadow-black/30"
          style={{
            background:
              "linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 50%, #0d0d0d 100%)",
          }}
        >
          {/* Inner bezel */}
          <div className="rounded-[2.8rem] bg-black p-[10px] relative">
            {/* Side button accents (purely decorative) */}
            <div className="absolute -right-[2px] top-[100px] w-[3px] h-[40px] rounded-r-sm bg-gradient-to-b from-gray-600 to-gray-800" />
            <div className="absolute -left-[2px] top-[80px] w-[3px] h-[22px] rounded-l-sm bg-gradient-to-b from-gray-600 to-gray-800" />
            <div className="absolute -left-[2px] top-[116px] w-[3px] h-[36px] rounded-l-sm bg-gradient-to-b from-gray-600 to-gray-800" />
            <div className="absolute -left-[2px] top-[160px] w-[3px] h-[36px] rounded-l-sm bg-gradient-to-b from-gray-600 to-gray-800" />

            {/* Screen area */}
            <div className="rounded-[2.2rem] overflow-hidden bg-black relative">
              {/* Status Bar (iOS-style) */}
              <div className="bg-[#0E2E24] px-6 pt-3 pb-0 flex items-center justify-between relative z-10">
                <span className="text-white text-xs font-semibold tracking-tight">
                  9:41
                </span>
                {/* Dynamic Island / Notch */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[6px] w-[90px] h-[24px] bg-black rounded-full flex items-center justify-center">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#1a1a2e] border border-gray-800 ml-6" />
                </div>
                <div className="flex items-center gap-1">
                  {/* Signal */}
                  <svg width="14" height="12" viewBox="0 0 20 14" fill="white">
                    <rect x="0" y="10" width="3" height="4" rx="0.5" opacity="1" />
                    <rect x="5" y="7" width="3" height="7" rx="0.5" opacity="1" />
                    <rect x="10" y="3" width="3" height="11" rx="0.5" opacity="1" />
                    <rect x="15" y="0" width="3" height="14" rx="0.5" opacity="0.3" />
                  </svg>
                  {/* WiFi */}
                  <svg width="14" height="12" viewBox="0 0 24 24" fill="white" opacity="1">
                    <path d="M12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-4.24-3.66l1.41 1.41C10.07 14.86 11 14.5 12 14.5s1.93.36 2.83 1.25l1.41-1.41C15.04 13.15 13.57 12.5 12 12.5s-3.04.65-4.24 1.84zm-2.83-2.83l1.41 1.41C7.79 11.47 9.82 10.5 12 10.5s4.21.97 5.66 2.42l1.41-1.41C17.38 9.82 14.82 8.5 12 8.5s-5.38 1.32-7.07 3.01z"/>
                  </svg>
                  {/* Battery */}
                  <div className="flex items-center gap-[2px]">
                    <div className="w-[22px] h-[10px] border border-white/80 rounded-[2px] p-[1.5px] relative">
                      <div className="h-full w-[65%] bg-white rounded-[1px]" />
                    </div>
                    <div className="w-[1.5px] h-[5px] bg-white/80 rounded-r-sm" />
                  </div>
                </div>
              </div>

              {/* WhatsApp Header */}
              <div className="bg-[#0E2E24] px-3 pt-1 pb-2.5 flex items-center gap-2">
                {/* Back arrow */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70 shrink-0"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                <div className="flex items-center gap-2.5 flex-1 min-w-0">
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#19C37D]/40 to-[#0E2E24]/40 flex items-center justify-center ring-2 ring-white/10 shrink-0">
                    <span className="text-white text-sm font-bold">S</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-white text-[13.5px] font-semibold truncate">
                      StyleHub Store
                    </p>
                    <p className="text-[#19C37D] text-[11px] leading-tight">
                      {typing ? "typing..." : "online"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/50 shrink-0">
                  {/* Video call */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                  {/* Phone call */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  {/* More */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="5" r="1.5" />
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="12" cy="19" r="1.5" />
                  </svg>
                </div>
              </div>

              {/* Chat Area */}
              <div
                ref={chatRef}
                className="bg-[#efeae2] px-2.5 py-3 space-y-1.5 overflow-y-auto scroll-smooth"
                style={{
                  height: "460px",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8c3b8' fill-opacity='0.12'%3E%3Cpath d='M20 20.5V18H18v2.5h-2.5V23H18v2.5h2V23h2.5v-2.5H20zM0 20.5V18h2v2.5H4.5V23H2v2.5H0V23h-2.5v-2.5H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              >
                {/* Encryption notice */}
                <div className="flex justify-center mb-2">
                  <div className="bg-[#fdf8c8]/80 text-[10px] text-[#54656f] px-3 py-1.5 rounded-lg shadow-sm text-center max-w-[260px] leading-snug">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="#54656f"
                      className="inline mr-1 -mt-[2px]"
                    >
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                    </svg>
                    Messages are end-to-end encrypted. No one outside of this chat can read them.
                  </div>
                </div>

                {/* Date chip */}
                <div className="flex justify-center mb-2">
                  <span className="bg-white/90 text-[10.5px] text-[#54656f] px-3 py-1 rounded-lg shadow-sm font-medium">
                    TODAY
                  </span>
                </div>

                {messages.map((msg) => {
                  const isVisible = visibleMessages.includes(msg.id);
                  if (!isVisible) return null;

                  return (
                    <div key={msg.id} className="animate-message-in">
                      {/* Automation label */}
                      {msg.isAutomation && msg.automationLabel && (
                        <div
                          className={`flex ${
                            msg.sender === "bot"
                              ? "justify-start"
                              : "justify-end"
                          } mb-0.5`}
                        >
                          <span className="text-[9px] text-[#19C37D] font-medium bg-[#19C37D]/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                            {msg.automationLabel}
                          </span>
                        </div>
                      )}

                      <div
                        className={`flex ${
                          msg.sender === "customer"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`relative max-w-[80%] px-2.5 py-1.5 shadow-sm ${
                            msg.sender === "customer"
                              ? "bg-[#d9fdd3] rounded-lg rounded-tr-[4px]"
                              : "bg-white rounded-lg rounded-tl-[4px]"
                          }`}
                        >
                          {/* WhatsApp tail */}
                          <div
                            className={`absolute top-0 w-[8px] h-[13px] ${
                              msg.sender === "customer"
                                ? "right-[-6px]"
                                : "left-[-6px]"
                            }`}
                          >
                            <svg
                              viewBox="0 0 8 13"
                              width="8"
                              height="13"
                              fill={
                                msg.sender === "customer"
                                  ? "#d9fdd3"
                                  : "#ffffff"
                              }
                            >
                              {msg.sender === "customer" ? (
                                <path d="M1 0l7 0c0 0 -2 2 -2 6.5c0 3 -1 5.5 -3 6.5l0 -13z" />
                              ) : (
                                <path d="M7 0l-7 0c0 0 2 2 2 6.5c0 3 1 5.5 3 6.5l0 -13z" />
                              )}
                            </svg>
                          </div>

                          <p className="text-[12.5px] text-[#111b21] whitespace-pre-line leading-[1.35]">
                            {msg.text}
                          </p>
                          <div className="flex items-center justify-end gap-1 -mb-0.5 mt-0.5">
                            <span className="text-[10px] text-[#667781]">
                              {msg.time}
                            </span>
                            {msg.sender === "customer" && (
                              <CheckCheck
                                size={14}
                                className="text-[#53bdeb]"
                              />
                            )}
                            {msg.sender === "bot" && (
                              <CheckCheck
                                size={14}
                                className="text-[#667781]/50"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Typing indicator */}
                {typing && (
                  <div className="flex justify-start animate-message-in">
                    <div className="bg-white rounded-lg rounded-tl-[4px] px-4 py-2.5 shadow-sm flex gap-1">
                      <span className="typing-dot w-[7px] h-[7px] bg-[#8696a0] rounded-full" />
                      <span className="typing-dot w-[7px] h-[7px] bg-[#8696a0] rounded-full" />
                      <span className="typing-dot w-[7px] h-[7px] bg-[#8696a0] rounded-full" />
                    </div>
                  </div>
                )}
              </div>

              {/* Input Bar — WhatsApp-accurate */}
              <div className="bg-[#f0f2f5] px-2 py-1.5 flex items-end gap-1.5">
                <div className="flex-1 bg-white rounded-[22px] px-3 py-2 flex items-center gap-2 min-h-[40px]">
                  {/* Emoji */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#54656f"
                    strokeWidth="1.5"
                    className="shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
                    <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
                  </svg>
                  <span className="text-[14px] text-[#667781] select-none flex-1">
                    Message
                  </span>
                  {/* Attach */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#54656f"
                    strokeWidth="1.5"
                    className="shrink-0 rotate-45"
                  >
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                  </svg>
                  {/* Camera */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#54656f"
                    strokeWidth="1.5"
                    className="shrink-0"
                  >
                    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                </div>
                {/* Mic button */}
                <div className="w-[40px] h-[40px] rounded-full bg-[#00a884] flex items-center justify-center shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                  </svg>
                </div>
              </div>

              {/* Bottom home indicator bar (iPhone-style) */}
              <div className="bg-[#f0f2f5] pb-2 pt-1 flex justify-center">
                <div className="w-[120px] h-[4px] bg-black/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
