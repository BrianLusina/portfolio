import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
      GITHUB_TOKEN: JSON.stringify(env.GITHUB_TOKEN),
      GITHUB_GRAPHQL_URL: JSON.stringify(env.GITHUB_GRAPHQL_URL),
      GITHUB_REST_API_URL: JSON.stringify(env.GITHUB_REST_API_URL),
      EMAILJS_BASE_URL: JSON.stringify(env.EMAILJS_BASE_URL),
      EMAILJS_SERVICE_ID: JSON.stringify(env.EMAILJS_SERVICE_ID),
      EMAILJS_TEMPLATE_ID: JSON.stringify(env.EMAILJS_TEMPLATE_ID),
      EMAILJS_USER_ID: JSON.stringify(env.EMAILJS_USER_ID),
      EMAILJS_ACCESS_TOKEN: JSON.stringify(env.EMAILJS_ACCESS_TOKEN)
    },
    plugins: [react(), tsconfigPaths()],
  }
});
