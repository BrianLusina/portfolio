/**
 * Custom Logger Service. This can be extended to capture logs/errors in application.
 * This should ideally not be used for analytics/metrics. These can be handled separately.
 *
 * Here Sentry can be used.
 * Or LogRocket can be used.
 * Or a custom Logger Service can be used.
 *
 * This has been configured with Sentry; But can be interchanged with something else
 * Reference https://docs.sentry.io/platforms/javascript/guides/react/
 */

import * as Sentry from '@sentry/react';
import { ErrorInfo } from 'react';
import { Scope, Breadcrumb, Severity } from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import config from '@config';

const {
  monitoring: {
    sentry: { sentryDsn: SENTRY_DSN, tracesSampleRate },
  },
  env: { nodeEnv: NODE_ENV, env: ENV, debug },
} = config;

/**
 * Initializes monitoring service
 */
export const initializeSentry = (): void => {
  if (NODE_ENV === 'production' || ENV === 'production') {
    // configuration options can be found here as well
    // ref: https://docs.sentry.io/platforms/javascript/guides/react/configuration/options/
    Sentry.init({
      dsn: SENTRY_DSN,
      integrations: [new Integrations.BrowserTracing()],
      tracesSampleRate: tracesSampleRate as number,
      debug,
      beforeSend(event: Sentry.Event): Sentry.Event | null {
        // Modify the event here
        if (event.user) {
          // Don't send user's email address
          delete event.user.email;
        }
        return event;
      },
    });
  }
};

/**
 * capture and log any errors caught
 * @param error error in stacktrace
 * @param errorInfo Error information from React
 */
export const captureAndLogSentryError = (error: Error, errorInfo: ErrorInfo): void => {
  Sentry.withScope((scope: Scope) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    scope.setExtras(errorInfo);
    captureSentryException(error, scope, error.message);
  });
};

/**
 * Capture exception
 * @param {Error} error Error context
 */
export const captureSentryException = (
  error: Error,
  scope?: Scope,
  errorMessage = 'Error Caught',
): void => {
  if (NODE_ENV === 'production' || ENV === 'production') {
    Sentry.captureMessage(errorMessage, scope);
    Sentry.captureException(error);
  } else {
    console.error(`[Sentry]: caught error: ${error}. Info: ${errorMessage}`);
  }
};

export const captureSentryScope = (data: Breadcrumb, level: Severity): Scope => {
  return new Scope().setTag('env', NODE_ENV).setLevel(level).addBreadcrumb(data);
};

export { Severity };
export type SentryBreadcrumb = Breadcrumb;
export type SentryScope = Scope;
