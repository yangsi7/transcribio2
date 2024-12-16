// src/components/Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Upload, List, MessageSquare, Server } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 flex flex-col text-gray-100 border-r border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-white">Transcribio</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <NavLink
          to="/upload"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`
          }
        >
          <Upload className="w-4 h-4" />
          Upload
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`
          }
        >
          <List className="w-4 h-4" />
          History
        </NavLink>
        <NavLink
          to="/chat"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`
          }
        >
          <MessageSquare className="w-4 h-4" />
          Chat
        </NavLink>
        <NavLink
          to="/api-test"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`
          }
        >
          <Server className="w-4 h-4" />
          API Test (Graph)
        </NavLink>
      </nav>
    </div>
  );
}
