import config from '@config';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {
  it('should render', () => {
    render(<Logo />);
  });

  it('should render and display title', () => {
    render(<Logo />);

    const titleElement = screen.getByText(config.title);
    expect(titleElement).toBeInTheDocument();
  });
});
