import { render, screen } from '@testing-library/react';
import MockAppWithRouter from '@testUtils/MockAppWithRouter';
import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
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

  it('Should render & display text', () => {
    render(
      <MockAppWithRouter>
        <ErrorPage />
      </MockAppWithRouter>,
    );

    const titleElement = screen.getByText('Oops! Well, this is embarrassing...');
    expect(titleElement).toBeInTheDocument();
  });

  it('Should render & display custom title & message', () => {
    const title = 'Error';
    const message = 'Something went wrong';

    render(
      <MockAppWithRouter>
        <ErrorPage title={title} message={message} />
      </MockAppWithRouter>,
    );

    const titleElement = screen.getByText(/Error/);
    expect(titleElement).toBeInTheDocument();

    const messageElement = screen.getByText(/Something went wrong/);
    expect(messageElement).toBeInTheDocument();
  });
});
