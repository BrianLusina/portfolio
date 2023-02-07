import { render, screen } from '@testing-library/react';
import SocialCard from './SocialCard';
import socialCardItems from './constants';

describe('SocialCard', () => {
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
    render(<SocialCard />);
  });

  it('should render with social card items', () => {
    render(<SocialCard items={socialCardItems} />);

    socialCardItems.forEach(({ label }) => {
      const socialText = screen.getByText(label);

      expect(socialText).toBeInTheDocument();
    });
  });
});
