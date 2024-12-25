import { render } from '@testing-library/react';
import PageLoader from './PageLoader';

describe('PageLoader', () => {
  beforeAll(() => {
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
    render(<PageLoader />);
  });
});
