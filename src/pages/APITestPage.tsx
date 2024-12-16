// src/pages/APITestPage.tsx
import React, { useState } from 'react';
import { ENV } from '../config/env';
import { logger } from '../utils/logger';
import { toast } from 'sonner';
import { SummaryViewer } from '../components/SummaryViewer';
import { processGraphData } from '../utils/processGraphData';
import { useTranscriptionStore } from '../store/transcription';
import { BackButton } from '../components/BackButton';
import { GraphModal } from '../components/GraphModal';

export function APITestPage() {
  const { apiTestKnowledgeGraph, apiTestSummary, setApiTestKnowledgeGraph, setApiTestSummary } = useTranscriptionStore();
  const [testText, setTestText] = useState("This is a sample meeting text about Product and Budget.");
  const [graphModalOpen, setGraphModalOpen] = useState(false);

  const apiKey = ENV.API_KEY_SECONDARY || ENV.API_KEY;
  const secondaryUrl = ENV.API_URL_SECONDARY;

  const testEntityMap = async () => {
    logger.info('Testing entity map API', { textLength: testText.length });
    if (!apiKey || !secondaryUrl) {
      toast.error('Missing API key or secondary URL. Check logs.');
      logger.error('Entity map test aborted due to missing keys or URL.', new Error('Missing keys or URL'));
      return;
    }

    try {
      const resp = await fetch(`${secondaryUrl}/entity_map_new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': apiKey
        },
        body: JSON.stringify({ text: testText })
      });

      if (!resp.ok) {
        const errorText = await resp.text();
        logger.error('Entity map request failed', new Error('Entity map request failed'), { response: errorText });
        toast.error(`Entity map failed: ${errorText}`);
        setApiTestKnowledgeGraph(null);
        return;
      }

      const data = await resp.json();
      logger.info('Entity map success', data);

      const { graph } = data;
      if (!graph || !Array.isArray(graph.entities) || !Array.isArray(graph.relationships)) {
        logger.error('Entity map schema mismatch', new Error('Invalid graph structure'), { data });
        toast.error('Entity map schema mismatch. Check logs.');
        setApiTestKnowledgeGraph(null);
        return;
      }

      if (graph.entities.length === 0 && graph.relationships.length === 0) {
        logger.warn('Entity map returned empty entities and relationships', { data });
        toast('Entity map is empty, nothing to visualize.');
      }

      // Store results in store
      setApiTestKnowledgeGraph(graph);
      toast.success('Entity map success! Data stored.');
    } catch (error) {
      const errObj = error instanceof Error ? error : new Error(String(error));
      logger.error('Entity map request error', errObj);
      toast.error('Entity map request error. Check logs.');
      setApiTestKnowledgeGraph(null);
    }
  };

  const testSummarize = async () => {
    logger.info('Testing summarization API', { textLength: testText.length });
    if (!apiKey || !secondaryUrl) {
      toast.error('Missing API key or secondary URL. Check logs.');
      logger.error('Summarization test aborted due to missing keys or URL.', new Error('Missing keys or URL'));
      return;
    }

    try {
      const summarizePayload = {
        text: testText,
        knowledge_graph: { entities: apiTestKnowledgeGraph?.entities || [], relationships: apiTestKnowledgeGraph?.relationships || [] },
        system_prompt: "You are an expert assistant skilled at converting raw meeting transcripts into structured meeting minutes. Include extracted entities."
      };

      const resp = await fetch(`${secondaryUrl}/summarize`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': apiKey
        },
        body: JSON.stringify(summarizePayload)
      });

      if (!resp.ok) {
        const errorText = await resp.text();
        logger.error('Summarization request failed', new Error('Summarization request failed'), { response: errorText });
        toast.error(`Summarization failed: ${errorText}`);
        setApiTestSummary(null);
        return;
      }

      const data = await resp.json();
      logger.info('Summarization success', data);
      const summary = data.summary || 'No summary returned.';
      setApiTestSummary(summary);
      toast.success('Summarization success! Data stored.');
    } catch (error) {
      const errObj = error instanceof Error ? error : new Error(String(error));
      logger.error('Summarization request error', errObj);
      toast.error('Summarization request error. Check logs.');
      setApiTestSummary(null);
    }
  };

  // If we have a knowledge graph from API test, show summary
  let topEntities: string[] = [];
  let totalEntities = 0;
  let totalRelationships = 0;
  let processedData = null;

  if (apiTestKnowledgeGraph) {
    totalEntities = apiTestKnowledgeGraph.entities.length;
    totalRelationships = apiTestKnowledgeGraph.relationships.length;
    // sort entities by name for simplicity
    topEntities = apiTestKnowledgeGraph.entities.slice(0,10).map(e => e.name);

    const processed = processGraphData({
      graph: {
        entities: apiTestKnowledgeGraph.entities.map(e => ({
          ...e,
          meeting_id: 'unknown',
          created_at: Date.now()
        })),
        relationships: apiTestKnowledgeGraph.relationships.map(r => ({
          ...r,
          meeting_id: 'unknown',
          created_at: Date.now()
        }))
      }
    });
    processedData = processed;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-4 text-gray-200">
      <div className="flex justify-between items-center mt-4">
        <BackButton />
        <h1 className="text-3xl font-bold text-white">API Test Page</h1>
        <div />
      </div>
      <p className="text-gray-400">Enter some text and test the secondary APIs</p>

      <textarea
        className="w-full h-32 p-2 bg-gray-800 text-gray-200 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={testText}
        onChange={(e) => setTestText(e.target.value)}
      />

      <div className="flex gap-4">
        <button
          onClick={testEntityMap}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
        >
          Test Entity Map
        </button>
        <button
          onClick={testSummarize}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400"
        >
          Test Summarize
        </button>
      </div>

      {!apiKey && (
        <div className="text-red-400 text-sm mt-4">
          Warning: No API Key found. Please set VITE_API_KEY or VITE_API_KEY_SECONDARY.
        </div>
      )}
      {!secondaryUrl && (
        <div className="text-red-400 text-sm mt-2">
          Warning: No secondary URL found. Please set VITE_API_URL_SECONDARY.
        </div>
      )}

      {apiTestSummary && (
        <SummaryViewer summary={apiTestSummary} />
      )}

      {apiTestKnowledgeGraph && (
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-lg font-bold mb-2">Entity Map Summary</h2>
          <p className="text-sm text-gray-300 mb-2">Total Entities: {totalEntities}</p>
          <p className="text-sm text-gray-300 mb-2">Total Relationships: {totalRelationships}</p>
          <h3 className="text-sm font-semibold text-gray-200 mb-1">Top Entities:</h3>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            {topEntities.map((ent, i) => (
              <li key={i}>{ent}</li>
            ))}
          </ul>
          {processedData && (
            <button
              onClick={() => setGraphModalOpen(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
            >
              View Full Graph
            </button>
          )}
        </div>
      )}

      {processedData && (
        <GraphModal
          isOpen={graphModalOpen}
          onClose={() => setGraphModalOpen(false)}
          nodes={processedData.nodes}
          links={processedData.links}
        />
      )}
    </div>
  );
}