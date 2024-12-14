import { API_CONFIG } from '../../config/api';
import { APIError } from './errors';
import { logger } from '../../utils/logger';
import type { APIResponse, APIRequestContext } from './types';

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<APIResponse<T>> {
  const requestId = Math.random().toString(36).substring(7);
  const context: APIRequestContext = {
    requestId,
    endpoint,
    method: options.method || 'GET',
  };

  const startTime = performance.now();
  logger.debug('API Request starting', context);

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
      logger.warn('Request timeout', { ...context, timeout: API_CONFIG.timeout });
    }, API_CONFIG.timeout);

    const response = await fetch(endpoint, {
      ...options,
      headers: new Headers({
        ...API_CONFIG.headers.base,
        ...options.headers,
      }),
      signal: controller.signal,
      credentials: API_CONFIG.cors.credentials,
      mode: API_CONFIG.cors.mode,
    });

    clearTimeout(timeoutId);
    context.duration = `${(performance.now() - startTime).toFixed(2)}ms`;

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new APIError({
        message: errorData.message || `HTTP error ${response.status}`,
        status: response.status,
        code: errorData.code || `HTTP_${response.status}`,
        details: {
          ...context,
          response: {
            status: response.status,
            statusText: response.statusText,
            headers: Object.fromEntries(response.headers.entries()),
          }
        }
      });
    }

    const data = await response.json();
    logger.debug('API Response received', {
      ...context,
      status: response.status,
      headers: Object.fromEntries(response.headers.entries()),
    });

    return { data, status: response.status, headers: response.headers };
  } catch (error) {
    context.duration = `${(performance.now() - startTime).toFixed(2)}ms`;

    if (error instanceof APIError) {
      logger.error('API Error', error, { ...context }); 
      throw error;
    }

    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        logger.warn('Request aborted', { ...context, error: error.message });
        throw new APIError({
          message: 'Request timeout',
          code: 'REQUEST_TIMEOUT',
          details: context
        });
      }

      logger.error('Request failed', error, { ...context }); 
      throw new APIError({
        message: error.message,
        code: 'REQUEST_FAILED',
        details: context
      });
    }

logger.error('Unknown error', new Error('Unknown error'), { ...context });    throw new APIError({
      message: 'An unknown error occurred',
      code: 'UNKNOWN_ERROR',
      details: context
    });
  }
}