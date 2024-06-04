import { FunctionComponent, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { FiChevronUp } from 'react-icons/fi';
import { WindowScrollToTop, ScrollToTopButton } from '@components/ScrollToTop';
import Footer from '@components/Footer';

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
      <WindowScrollToTop />
      {children}
      <div className="backto-top">
        <ScrollToTopButton showUnder={160}>
          <FiChevronUp />
        </ScrollToTopButton>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
