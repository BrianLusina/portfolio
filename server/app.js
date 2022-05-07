const express = require('express');
const path = require('path');
const rateLimit = require('express-rate-limit');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;
const GITHUB_GRAPHQL_API_URL =
  process.env.GITHUB_GRAPHQL_API_URL || 'https://api.github.com/graphql';
const GITHUB_REST_API_URL = process.env.GITHUB_REST_API_URL || 'https://api.github.com';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const SENTRY_DSN = process.env.SENTRY_DSN;
const ENV = process.env.ENV;
const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;
const FIREBASE_AUTH_DOMAIN = process.env.FIREBASE_AUTH_DOMAIN;
const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
const FIREBASE_STORAGE_BUCKET = process.env.FIREBASE_STORAGE_BUCKET;
const FIREBASE_MESSAGING_SENDER_ID = process.env.FIREBASE_MESSAGING_SENDER_ID;
const FIREBASE_APP_ID = process.env.FIREBASE_APP_ID;
const FIREBASE_MEASUREMENT_ID = process.env.FIREBASE_MEASUREMENT_ID;
const BUGSNAG_API_KEY = process.env.BUGSNAG_API_KEY;

app.use(express.static(path.join(__dirname, 'build')));

// https://www.npmjs.com/package/express-rate-limit
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});

/**
 * Health endpoint to check status of server
 */
app.get('/health', function (req, res) {
  return res
    .json({
      status: 'OK',
      message: 'All Good!',
    })
    .status(200);
});

// this allows the dynamic passing of environment variables to the static running application
function updateEnv() {
  try {
    const env = `window._env_= {
        GITHUB_GRAPHQL_API_URL: '${GITHUB_GRAPHQL_API_URL}', 
        GITHUB_REST_API_URL: '${GITHUB_REST_API_URL}', 
        GITHUB_TOKEN: '${GITHUB_TOKEN}', 
        ENV: '${ENV}', 
        FIREBASE_API_KEY: '${FIREBASE_API_KEY}', 
        FIREBASE_AUTH_DOMAIN: '${FIREBASE_AUTH_DOMAIN}',
        FIREBASE_PROJECT_ID: '${FIREBASE_PROJECT_ID}',
        FIREBASE_STORAGE_BUCKET: '${FIREBASE_STORAGE_BUCKET}',
        FIREBASE_MESSAGING_SENDER_ID: '${FIREBASE_MESSAGING_SENDER_ID}',
        FIREBASE_APP_ID: '${FIREBASE_APP_ID}',
        FIREBASE_MEASUREMENT_ID: '${FIREBASE_MEASUREMENT_ID}', 
        SENTRY_DSN: '${SENTRY_DSN}', 
        BUGSNAG_API_KEY: '${BUGSNAG_API_KEY}'}`;

    const envFile = path.join(__dirname, 'build', 'env-config.js');

    fs.writeFile(envFile, env, function (err) {
      if (err) console.error(`Failed to update env ${err}`);
    });
  } catch (error) {
    console.error(`Failed to update env ${error}`);
  }
}

app.get('/*', rateLimiter, function (req, res) {
  // update env before serving application
  updateEnv();
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);
