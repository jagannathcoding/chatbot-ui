import { useState } from "react";
import ChatMessage from "../components/ChatMessage";

const getTimeLabel = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const keywordResponse =
  "I'm sorry you're carrying that right now. It's okay to feel this way sometimes. Would you like to talk more about what's been bothering you?";

const defaultResponse =
  "Thank you for sharing that with me. Remember, it's okay to take small steps. You don't have to go through this alone.";

const hasSupportKeywords = (message) =>
  ["sad", "low", "depressed", "anxious", "stress", "lonely"].some((keyword) =>
    message.toLowerCase().includes(keyword),
  );

const ChatbotPage = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "bot",
      text: "Hi, I'm here to listen. How are you feeling today?",
      time: getTimeLabel(),
    },
  ]);

  const handleSend = (event) => {
    event.preventDefault();

    if (!input.trim()) {
      return;
    }

    const userMessage = {
      id: Date.now(),
      role: "user",
      text: input.trim(),
      time: getTimeLabel(),
    };

    const botMessage = {
      id: Date.now() + 1,
      role: "bot",
      text: hasSupportKeywords(input) ? keywordResponse : defaultResponse,
      time: getTimeLabel(),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
      <aside className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-soft">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lavender-50 text-sm font-bold tracking-wide text-lavender-600">
            AI
          </div>
          <div>
            <p className="text-lg font-semibold text-ink-800">Chat with Support Bot</p>
            <p className="text-sm text-slate-500">A calm, friendly conversation space</p>
          </div>
        </div>

        <div className="mt-8 rounded-[1.75rem] bg-gradient-to-br from-lavender-50 to-skysoft-100 p-6 text-center">
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-white/80 text-2xl font-bold tracking-[0.2em] text-lavender-500 shadow-card">
            CARE
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-600">
            I'm here to listen and support you. You can share anything you feel comfortable
            with.
          </p>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-lavender-100 bg-lavender-50/70 p-4 text-sm leading-7 text-ink-700">
          Tip: You can talk about how you're feeling, your day, or anything on your mind.
        </div>
      </aside>

      <section className="flex min-h-[640px] flex-col rounded-[2rem] border border-white/80 bg-white/90 shadow-soft">
        <div className="border-b border-slate-100 px-6 py-5">
          <p className="text-lg font-semibold text-ink-800">Support Conversation</p>
          <p className="text-sm text-slate-500">
            Static frontend responses for now. Ready for future ML API integration.
          </p>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              role={message.role}
              text={message.text}
              time={message.time}
            />
          ))}
        </div>

        <form onSubmit={handleSend} className="border-t border-slate-100 p-5">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-2xl border border-slate-200 bg-white px-5 py-3 outline-none transition focus:border-lavender-400"
            />
            <button
              type="submit"
              className="rounded-2xl bg-lavender-600 px-5 py-3 font-semibold text-white shadow-card transition hover:bg-lavender-700"
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ChatbotPage;
