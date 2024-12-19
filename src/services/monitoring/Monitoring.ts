import { ErrorInfo } from 'react';
import config from '@config';
import {
  initializeSentry,
  captureAndLogSentryError,
  captureSentryException,
  captureSentryScope,
  Severity,
  SentryBreadcrumb,
  SentryScope,
} from './sentry';
import { initializeBugSnag, captureBugSnagError } from './bugsnag';

const {
  env: { nodeEnv: NODE_ENV, env: ENV },
} = config;

/**
 * Initializes monitoring service
 */
export const initializeMonitoring = (): void => {
  initializeSentry();
  initializeBugSnag();
};

/**
 * capture and log any errors caught
 * @param error error in stacktrace
 * @param errorInfo Error information from React
 */
export const captureAndLogError = (error: Error, errorInfo: ErrorInfo): void => {
  if (NODE_ENV === 'production' || ENV === 'production') {
    captureAndLogSentryError(error, errorInfo);
    captureBugSnagError(error);
  } else {
    console.error(`Caught error: ${error}. Info: ${errorInfo}`);
  }
};

/**
 * Capture exception
 * @param {Error} error Error context
 */
export const captureException = (
  error: Error,
  scope?: SentryScope,
  errorMessage = 'Error Caught',
): void => {
  if (NODE_ENV === 'production' || ENV === 'production') {
    captureSentryException(error, scope, errorMessage);
    captureBugSnagError(error);
  }
};

export const captureScope = (data: SentryBreadcrumb, level: Severity): SentryScope => {
  return captureSentryScope(data, level);
};

export type Levels = Severity;
