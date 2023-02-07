import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.error.mockRestore();
  });

  afterEach(() => {
    jest.resetAllMocks();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.error.mockClear();
  });

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
