const {
  _env_
} = window;

const sentryDsn = _env_ ? _env_.SENTRY_DSN : import.meta.env.SENTRY_DSN || ''
const tracesSampleRate = _env_ ? _env_.SENTRY_TRACES_SAMPLE_RATE : import.meta.env.SENTRY_TRACES_SAMPLE_RATE || 0.5

export default {
  sentryDsn,
  tracesSampleRate,
};
