import { ThemeProvider } from 'styled-components';
import { Layout } from 'antd';
import MockApp from '../src/test/AppMock';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { ReactQueryDevtools } from 'react-query/devtools';
import 'antd/dist/antd.css';
import 'react-phone-number-input/style.css';
import '@css/index.css';
import '@css/fonts.css';

const { Content } = Layout;

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

initialize();

export const decorators = [
  (Story) => (
    <MockApp>
      <ThemeProvider theme={{ main: 'default' }}>
        <Layout className="layout">
          <Content style={{ backgroundColor: 'white' }}>
            <Story />
          </Content>
        </Layout>
      </ThemeProvider>
      <ReactQueryDevtools />
    </MockApp>
  ),
  mswDecorator,
];

// get the mocked handlers (endpoints) and starts the service worker
if (typeof global.process === 'undefined') {
  const { worker } = require('../src/test/mocks/mockWorkers');
  worker.start();
}
