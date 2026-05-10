const ChatMessage = ({ role, text, time }) => {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[85%] ${isUser ? "items-end" : "items-start"} flex flex-col`}>
        <div
          className={`rounded-[1.5rem] px-4 py-3 shadow-card ${
            isUser
              ? "rounded-br-md bg-lavender-600 text-white"
              : "rounded-bl-md bg-white text-ink-800"
          }`}
        >
          <p className="leading-7">{text}</p>
        </div>
        <span className="mt-2 px-2 text-xs text-slate-400">{time}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
