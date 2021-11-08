import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Liber', () => {
  render(<App />);
  const linkElement = screen.getByText(/Liber/i);
  expect(linkElement).toBeInTheDocument();
});
