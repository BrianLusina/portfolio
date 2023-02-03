import { render, screen } from '@testing-library/react';
import MockAppWithRouter from '@testUtils/MockAppWithRouter';
import config from '@config';
import App from './App';

xtest('renders Folio', () => {
  render(
    <MockAppWithRouter>
      <App />
    </MockAppWithRouter>,
  );
  const linkElement = screen.getByText(config.title);
  expect(linkElement).toBeInTheDocument();
});
