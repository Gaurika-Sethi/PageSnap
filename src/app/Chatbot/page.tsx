'use client'

import { useState, useRef, useEffect } from "react";


import {Playfair_Display} from 'next/font/google'
const play = Playfair_Display({ subsets: ['latin'], weight: '400' })

function Chatbot() {
    const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState<string>("");
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { sender: "user", text: userMessage }]);
    setInput("");

    // Show loading message
    setMessages(prev => [
      ...prev,
      { sender: "bot", text: "Thinking of great book recommendations for you..." },
    ]);

    try {
      const response = await fetch('/api/bookchat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      if (data.success) {
        // Replace the loading message with the actual response
        setMessages(prev => [
          ...prev.slice(0, -1), // Remove the loading message
          { sender: "bot", text: data.message },
        ]);
      } else {
        // Replace the loading message with an error message
        setMessages(prev => [
          ...prev.slice(0, -1), // Remove the loading message
          { sender: "bot", text: "Sorry, I'm having trouble finding book recommendations right now. Please try again!" },
        ]);
      }
    } catch (error) {
      console.error('Error calling API:', error);
      // Replace the loading message with an error message
      setMessages(prev => [
        ...prev.slice(0, -1), // Remove the loading message
        { sender: "bot", text: "Sorry, I'm having trouble finding book recommendations right now. Please try again!" },
      ]);
    }
  };

  return (
    <div className={`${play.className} flex flex-col items-center justify-center min-h-screen p-4`}>
      <h1 className="text-[35px] font-serif mb-4 text-[#2E2E2E] pb-5">Book Suggestion Companion</h1>
      <div className="relative w-full max-w-md pt-2 pb-2">
      <img 
        src="/chat_top.png" 
        className="absolute -top-[45px] -left-[50px] w-44 h-44 object-contain z-10"
        alt="vine corner top left"
       />
      <img 
        src="/chat_bottom.png" 
        className="absolute -bottom-[45px] -right-[50px] w-44 h-44 object-contain z-10"
        alt="vine corner bottom right"
      />

<div className="w-full max-w-md bg-[#DAC29A] border-[#8B5E3C] border-[3px] shadow-md p-4 space-y-4 relative">
      <div className="h-64 overflow-y-auto space-y-2 custom-scroll pr-3">
  {messages.map((msg, index) => (
    <div
      key={index}
      className={`max-w-[70%] w-fit break-words p-2 rounded-lg text-sm overflow-hidden whitespace-pre-line ${
        msg.sender === "user"
          ? "ml-auto bg-[#B99E6A] border border-[#D1B890] text-[#000000]"
          : "mr-auto bg-[#EADCC0] border border-[#B89C72] text-[#000000]"
      }`}
    >
      {msg.text}
    </div>
  ))}
  {/* 👇 Scroll anchor only once at the bottom */}
  <div ref={endOfMessagesRef} />
</div>


<div className="mt-4 w-full rounded-[30px] bg-[#EADCC0] flex items-center justify-between px-4 py-2 shadow-inner border">
  <textarea
    placeholder="chat here..."
    value={input}
    onChange={(e) => setInput(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    }}
    rows={1}
    className="flex-1 bg-transparent resize-none placeholder-mc placeholder:text-[#6D4C41] focus:outline-none"
  />

  <div className="w-[1px] h-6 bg-[#6D4C41] mx-2"></div>

  <button
    onClick={handleSend}
    className="text-[#5c3b27] text-lg hover:text-[#3b2518] transition"
  >
    <img src="chat_send.png"
    className="w-10 h-auto"
    alt="send_button" 
    />
  </button>
</div>

      </div>
      </div>
    </div>
  )
}

export default Chatbot

