export interface APIErrorOptions {
  message: string;
  status?: number;
  code?: string;
  details?: unknown;
}

export class APIError extends Error {
  public status?: number;
  public code: string;
  public details?: unknown;

  constructor(options: APIErrorOptions) {
    super(options.message);
    this.name = 'APIError';
    this.status = options.status;
    this.code = options.code || 'UNKNOWN_ERROR';
    this.details = options.details;

    // Ensure proper prototype chain for instanceof checks
    Object.setPrototypeOf(this, APIError.prototype);
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      code: this.code,
      details: this.details,
      stack: this.stack
    };
  }
}