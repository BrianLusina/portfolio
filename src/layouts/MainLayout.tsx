import Header from '@components/Header';
import { FunctionComponent, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { FiChevronUp } from "react-icons/fi";
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
      <main id="main">
        <WindowScrollToTop />
        {children}
      </main>
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTopButton showUnder={160}>
            <FiChevronUp />
        </ScrollToTopButton>
      </div>
    </>
  );
};

export default MainLayout;
