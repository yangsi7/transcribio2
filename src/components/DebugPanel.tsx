// src/components/DebugPanel.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { Terminal, X, ChevronUp, ChevronDown, RefreshCw } from 'lucide-react';
import { logger } from '../utils/logger/index';
import { LOG_CONFIG } from '../config/constants';
import type { LogEntry } from '../utils/logger/types';

function LogDisplay({ id, timestamp, level, message, data, error, context }: LogEntry) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDetails = data !== undefined || error !== undefined || context !== undefined;

  const colorClass = {
    [LOG_CONFIG.LEVELS.ERROR]: 'text-red-500',
    [LOG_CONFIG.LEVELS.WARN]: 'text-yellow-400',
    [LOG_CONFIG.LEVELS.INFO]: 'text-blue-400',
    [LOG_CONFIG.LEVELS.DEBUG]: 'text-gray-400'
  }[level] || 'text-gray-400';

  return (
    <div className="border-b border-gray-700 py-2">
      <div className="flex items-start gap-2">
        <span className="text-xs text-gray-500 whitespace-nowrap">
          {new Date(timestamp).toLocaleTimeString()}
        </span>
        <span className={`text-xs font-medium ${colorClass}`}>
          {level.toUpperCase()}
        </span>
        <span className="text-xs text-gray-200 break-all flex-1">{message}</span>
        {hasDetails && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-auto p-1 hover:bg-gray-600 rounded shrink-0"
            aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
          >
            {isExpanded ? (
              <ChevronUp className="w-3 h-3 text-gray-300" />
            ) : (
              <ChevronDown className="w-3 h-3 text-gray-300" />
            )}
          </button>
        )}
      </div>
      {isExpanded && hasDetails && (
        <div className="mt-2 space-y-2 text-xs text-gray-200">
          {context && (
            <details className="bg-gray-700 rounded p-2" open>
              <summary className="font-medium text-gray-300 cursor-pointer">Context</summary>
              <pre className="mt-1 overflow-x-auto whitespace-pre-wrap text-gray-200">
                {JSON.stringify(context, null, 2)}
              </pre>
            </details>
          )}
          {data !== undefined && (
            <details className="bg-gray-700 rounded p-2" open>
              <summary className="font-medium text-gray-300 cursor-pointer">Data</summary>
              <pre className="mt-1 overflow-x-auto whitespace-pre-wrap text-gray-200">
                {JSON.stringify(data, null, 2)}
              </pre>
            </details>
          )}
          {error && (
            <details className="bg-red-900 rounded p-2" open>
              <summary className="font-medium text-red-400 cursor-pointer">Error</summary>
              <div className="mt-1 text-gray-200">
                <div className="font-medium">Message:</div>
                <pre className="text-red-300 overflow-x-auto whitespace-pre-wrap">
                  {error.message}
                </pre>
                {error.stack && (
                  <>
                    <div className="font-medium mt-2">Stack:</div>
                    <pre className="text-red-300 overflow-x-auto whitespace-pre-wrap">
                      {error.stack}
                    </pre>
                  </>
                )}
              </div>
            </details>
          )}
        </div>
      )}
    </div>
  );
}

export const DebugPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [autoRefresh, setAutoRefresh] = useState(true);

  const refreshLogs = useCallback(() => {
    setLogs(logger.getLogs());
  }, []);

  useEffect(() => {
    logger.debug('Debug panel initialized', { timestamp: new Date().toISOString() });
    refreshLogs();
  }, [refreshLogs]);

  useEffect(() => {
    if (!isOpen) return;

    refreshLogs();
    if (autoRefresh) {
      const interval = setInterval(refreshLogs, LOG_CONFIG.UPDATE_INTERVAL || 1000);
      return () => clearInterval(interval);
    }
  }, [isOpen, autoRefresh, refreshLogs]);

  if (!import.meta.env.DEV) {
    logger.warn('Debug panel disabled in production');
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 w-[32rem] max-h-[600px] flex flex-col text-gray-200">
          <div className="p-2 border-b border-gray-700 flex items-center justify-between bg-gray-700 sticky top-0">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-gray-300" />
              <span className="text-sm font-medium">Debug Logs</span>
              <span className="text-xs text-gray-400">({logs.length})</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  refreshLogs();
                  setAutoRefresh(!autoRefresh);
                }}
                className={`p-1 rounded hover:bg-gray-600 ${
                  autoRefresh ? 'text-blue-400' : 'text-gray-500'
                }`}
                title={autoRefresh ? 'Auto-refresh enabled' : 'Auto-refresh disabled'}
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  logger.clearLogs();
                  refreshLogs();
                }}
                className="text-xs text-gray-400 hover:text-gray-200 px-2 py-1 hover:bg-gray-600 rounded"
              >
                Clear
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-600 rounded"
                aria-label="Close debug panel"
              >
                <X className="w-4 h-4 text-gray-300" />
              </button>
            </div>
          </div>
          <div className="overflow-y-auto flex-1 p-2 text-gray-200">
            {logs.length === 0 ? (
              <div className="text-center py-4 text-sm text-gray-400">
                No logs yet
              </div>
            ) : (
              logs.map((log) => <LogDisplay key={log.id} {...log} />)
            )}
          </div>
        </div>
      ) : (
        <button
          onClick={() => {
            setIsOpen(true);
            refreshLogs();
          }}
          className="bg-gray-800 text-gray-200 p-2 rounded-full shadow-lg hover:bg-gray-700"
          title="Open Debug Panel"
        >
          <Terminal className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};