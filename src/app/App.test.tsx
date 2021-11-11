import { render, screen } from '@testing-library/react';
import { MockAppWithRouter } from '@testUtils/MockAppWithRouter';
import App from './App';

test('renders Liber', () => {
  render(
    <MockAppWithRouter>
      <App />
    </MockAppWithRouter>,
  );
  const linkElement = screen.getByText(/Liber/i);
  expect(linkElement).toBeInTheDocument();
});
