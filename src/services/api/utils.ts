import { APIError } from './errors';

export async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new APIError({
      message: error.message || `HTTP error ${response.status}`,
      status: response.status,
      code: error.code || `HTTP_${response.status}`,
    });
  }
  return response.json();
}