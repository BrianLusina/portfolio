import { render } from '@testing-library/react';
import SocialCard from './SocialCard';
import { SocialCardItem } from './SocialCard.props';

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
    const socialCardItems: SocialCardItem[] = [
      {
        label: 'Twitter',
        link: 'https://twitter.com/BrianLusina',
        iconName: 'twitter',
        icon: <></>,
      },    
    ];

    const { getByTestId } = render(<SocialCard items={socialCardItems} />);

    socialCardItems.forEach(({ label }) => {
      // const socialText = screen.getByText(label);
      expect(getByTestId(label)).toBeInTheDocument()

      // expect(socialText).toBeInTheDocument();
    });
  });
});
