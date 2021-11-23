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
      <main id="main">
        <div className="inner">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
