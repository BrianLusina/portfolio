import { render, screen } from '@testing-library/react';
import SocialCard from './SocialCard';
import socialCardItems from './constants';

describe('SocialCard', () => {
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
