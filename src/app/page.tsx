"use client";

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  return (
    <div className="container mx-auto">
      <div className="flex flex-col bg-gray-900">
        <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-6xl font-bold text-center py-3"> Chat with AI </h1>
        <div className="flex-grow p-6 h-screen">
          <div className="flex flex-col space-y-4">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`${m.role === "user" ? "bg-purple-500" : "bg-gray-800"} rounded-lg p-4 text-white max-w-sm`}>
                {m.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500">
                </div>
                <button
                  type="button"
                  className="px-4 py-2 bg-zinc-500 text-white font-bold rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                  onClick={() => stop()}
                >
                  Stop responding
                </button>
              </div>
            )}
          </div>
        </div>
    
        <form onSubmit={handleSubmit} className="flex-none p-12">
          <div className="flex rounded-lg border border-gray-700 bg-gray-800">
            <input
              className="flex-grow px-4 py-2 bg-transparent text-white focus:outline-none"
              value={input}
              placeholder="Say something..."
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <button className="bg-purple-500 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none hover:bg-purple-600 transition-colors duration-300">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}