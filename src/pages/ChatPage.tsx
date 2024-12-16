// src/pages/ChatPage.tsx
import React from 'react';

export function ChatPage() {
  return (
    <div className="max-w-4xl mx-auto text-gray-200">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white">Chat with Your Meetings</h1>
        <p className="mt-2 text-gray-400">
          Interact with past meeting transcriptions and summaries.
        </p>
      </header>
      <main className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-300">User: Hi, can you summarize my last meeting?</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-300">Bot: Sure, your last meeting was about...</p>
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </main>
    </div>
  );
}