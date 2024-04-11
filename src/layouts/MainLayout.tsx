import { FunctionComponent, ReactNode } from 'react';
import Header from '@components/Header';
import { Helmet } from 'react-helmet';
import { FiChevronUp } from 'react-icons/fi';
import { WindowScrollToTop, ScrollToTopButton } from '@components/ScrollToTop';

type MainLayoutProps = {
  title?: string;
  children: ReactNode;
};

const MainLayout: FunctionComponent<MainLayoutProps> = ({ title, children }: MainLayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <WindowScrollToTop />
      {children}
      <div className="backto-top">
        <ScrollToTopButton showUnder={160}>
          <FiChevronUp />
        </ScrollToTopButton>
      </div>
    </>
  );
};

export default MainLayout;
