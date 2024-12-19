import { FunctionComponent } from 'react';
import ScrollToTop from 'react-scroll-up';
import { ScrollToTopButtonProps } from './ScrollToTopButton.types';

const ScrollToTopButton: FunctionComponent<ScrollToTopButtonProps> = ({ showUnder, children }) => {
  return <ScrollToTop showUnder={showUnder}>{children}</ScrollToTop>;
};

export default ScrollToTopButton;
