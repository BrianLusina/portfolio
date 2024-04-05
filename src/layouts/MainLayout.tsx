import Header from '@components/Header';
import { FunctionComponent, ReactNode } from 'react';
import { Helmet } from 'react-helmet';

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
        {children}
      </main>
    </>
  );
};

export default MainLayout;
