import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('Should render', () => {
    render(<Button />);
  });

  it('Should display given label', () => {
    render(
      <Button>
        <p>Click Me</p>
      </Button>,
    );

    const clickMeLabel = screen.getByText('Click Me');
    expect(clickMeLabel).toBeInTheDocument();
  });
});
