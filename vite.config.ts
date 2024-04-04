import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_GRAPHQL_URL  = process.env.GITHUB_GRAPHQL_URL
const GITHUB_REST_API_URL = process.env.GITHUB_REST_API_URL
const EMAILJS_BASE_URL = process.env.EMAILJS_BASE_URL
const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID =process.env.EMAILJS_TEMPLATE_ID
const EMAILJS_USER_ID = process.env.EMAILJS_USER_ID
const EMAILJS_ACCESS_TOKEN = process.env.EMAILJS_ACCESS_TOKEN

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
      GITHUB_TOKEN,
      GITHUB_GRAPHQL_URL,
      GITHUB_REST_API_URL,
      EMAILJS_BASE_URL,
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      EMAILJS_USER_ID,
      EMAILJS_ACCESS_TOKEN
    },
    plugins: [react(), tsconfigPaths()],
  }
});
