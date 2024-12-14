import { KnowledgeGraph } from '../../types';
import { ENV } from '../../config/env';
import { logger } from '../../utils/logger';
import { APIError } from './errors';

const SECONDARY_API_URL = ENV.API_URL_SECONDARY;
const API_KEY = ENV.API_KEY_SECONDARY || ENV.API_KEY;

export async function fetchKnowledgeGraph(): Promise<KnowledgeGraph> {
  const response = await fetch('/api/knowledge-graph');
  const data = await response.json();

  console.log('Knowledge Graph API Response:', data);

  // Expecting data to have a graph object
  if (!data.graph || !Array.isArray(data.graph.entities) || !Array.isArray(data.graph.relationships)) {
    throw new Error('Invalid API response: graph.entities or graph.relationships are not arrays');
  }

  return data.graph as KnowledgeGraph;
}

export async function generateEntityMap(text: string): Promise<KnowledgeGraph> {
  if (!SECONDARY_API_URL || !API_KEY) {
    throw new APIError({
      code: 'CONFIG_ERROR',
      message: 'Missing API configuration',
    });
  }

  const payload = { text };

  try {
    const response = await fetch(`${SECONDARY_API_URL}/entity_map_new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new APIError({
        code: `HTTP_${response.status}`,
        message: 'Entity map request failed',
        status: response.status,
      });
    }

    const data = await response.json();

    if (!data.graph || !Array.isArray(data.graph.entities) || !Array.isArray(data.graph.relationships)) {
      throw new APIError({
        code: 'INVALID_RESPONSE',
        message: 'Entity map response missing required arrays in graph',
      });
    }

    return data.graph;
  } catch (error) {
    logger.error('Entity map request failed', error instanceof Error ? error : new Error(String(error)));
    throw error;
  }
}

export async function generateSummary(
  text: string,
  knowledgeGraph: KnowledgeGraph
): Promise<string> {
  if (!SECONDARY_API_URL || !API_KEY) {
    throw new APIError({
      code: 'CONFIG_ERROR',
      message: 'Missing API configuration',
    });
  }

  const payload = {
    text,
    knowledge_graph: knowledgeGraph,
    system_prompt: "You are an expert assistant skilled at converting raw meeting transcripts into meeting minutes. Include the extracted entities and relationships to produce a coherent summary.",
  };

  try {
    const response = await fetch(`${SECONDARY_API_URL}/summarize`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new APIError({
        code: `HTTP_${response.status}`,
        message: 'Summarization request failed',
        status: response.status,
      });
    }

    const data = await response.json();
    return data.summary;
  } catch (error) {
    logger.error('Summarization request failed', error instanceof Error ? error : new Error(String(error)));
    throw error;
  }
}