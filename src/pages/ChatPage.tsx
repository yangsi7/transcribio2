// src/pages/ChatPage.tsx
import React from 'react';

export function ChatPage() {
  // In future this will have a chat interface
  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Chat with Your Meetings</h1>
        <p className="mt-2 text-gray-600">
          Interact with past meeting transcriptions and summaries.
        </p>
      </header>
      <main className="space-y-4">
        {/* Placeholder for chat messages */}
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-800">User: Hi, can you summarize my last meeting?</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-800">Bot: Sure, your last meeting was about...</p>
        </div>
        {/* Placeholder for input */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full px-4 py-2 border border-gray-300 rounded text-sm text-gray-700"
          />
        </div>
      </main>
    </div>
  );
}
