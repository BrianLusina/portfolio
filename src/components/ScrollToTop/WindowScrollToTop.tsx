import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { WindowScrollToTopProps } from './WindowScrollToTop.types';

/**
 * Scroll to Top Component
 * This handles smooth transition of pages from bottom to top on each page change.
 * */
const WindowScrollToTop: FC<WindowScrollToTopProps> = ({ behaviour = 'smooth' }): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: behaviour });
  }, [pathname]);

  return null;
}

export default WindowScrollToTop