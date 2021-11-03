import { FunctionComponent } from 'react';

const MainLayout: FunctionComponent = ({ children }) => {
  return (
    <main id="main">
      <div className="inner">{children}</div>
    </main>
  );
};

export default MainLayout;
