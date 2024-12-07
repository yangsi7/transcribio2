import { useState, useCallback } from 'react';
import { logStatusChange, logProcessStep } from '../utils/logger/status';
import type { ProcessStatus, ProcessError } from '../types';

interface ProcessState {
  status: ProcessStatus;
  error: ProcessError | null;
  progress: number;
}

export function useProcessStatus(initialStatus: ProcessStatus = 'idle') {
  const [state, setState] = useState<ProcessState>({
    status: initialStatus,
    error: null,
    progress: 0
  });

  const setStatus = useCallback((newStatus: ProcessStatus) => {
    setState(prev => {
      logStatusChange(prev.status, newStatus);
      return { ...prev, status: newStatus };
    });
  }, []);

  const setError = useCallback((error: ProcessError | null) => {
    setState(prev => ({ ...prev, error }));
  }, []);

  const setProgress = useCallback((progress: number) => {
    setState(prev => ({ ...prev, progress }));
  }, []);

  const reset = useCallback(() => {
    setState({
      status: 'idle',
      error: null,
      progress: 0
    });
  }, []);

  const startProcess = useCallback((step: keyof typeof PROCESS_STEPS) => {
    logProcessStep(step, 'start');
    setStatus('processing');
  }, [setStatus]);

  const completeProcess = useCallback((step: keyof typeof PROCESS_STEPS) => {
    logProcessStep(step, 'success');
    setStatus('completed');
  }, [setStatus]);

  const failProcess = useCallback((
    step: keyof typeof PROCESS_STEPS,
    error: Error | string
  ) => {
    const processError: ProcessError = {
      code: `${step}_ERROR`,
      message: error instanceof Error ? error.message : error
    };
    logProcessStep(step, 'error', { error: processError });
    setError(processError);
    setStatus('error');
  }, [setError, setStatus]);

  return {
    ...state,
    setStatus,
    setError,
    setProgress,
    reset,
    startProcess,
    completeProcess,
    failProcess
  };
}