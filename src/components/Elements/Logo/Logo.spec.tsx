import config from '@config';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {
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

  it('should render', () => {
    render(<Logo />);
  });

  xit('should render and display title', () => {
    render(<Logo />);

    const titleElement = screen.getByText(config.title);
    expect(titleElement).toBeInTheDocument();
  });
});
