// src/App.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UploadPage } from './pages/UploadPage';
import { MeetingHistory } from './pages/MeetingHistory';
import { ChatPage } from './pages/ChatPage';
import { APITestPage } from './pages/APITestPage';
import { Sidebar } from './components/Sidebar'; // Navigation Sidebar
import { DebugPanel } from './components/DebugPanel';

function App() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white flex">
      {/* Navigation Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 relative">
        <Routes>
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/history" element={<MeetingHistory />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/api-test" element={<APITestPage />} />
          <Route path="*" element={<Navigate to="/upload" replace />} />
        </Routes>
        <DebugPanel />
      </div>
    </div>
  );
}

export default App;