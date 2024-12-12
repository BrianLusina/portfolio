import { render } from '@testing-library/react';
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

  it('should render and display title', () => {
    const { getByText } = render(<Logo><h1>Some Logo</h1></Logo>);

    const titleElement = getByText("Some Logo");
    expect(titleElement).toBeInTheDocument();
  });
});
