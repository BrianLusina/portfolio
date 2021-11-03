import { Suspense, FunctionComponent } from 'react';
import { Switch } from 'react-router-dom';
import Menu from 'components/menu';
import Footer from 'components/footer';
import Header from 'components/header';
import MainLayout from '@layouts/MainLayout';
import AppRoutes from 'routes/AppRoutes';
import PageLoader from '@components/loaders/PageLoader';

const App: FunctionComponent = () => {
  return (
    <div id="wrapper">
      <Header />
      <Menu />
      <MainLayout>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <AppRoutes />
          </Switch>
        </Suspense>
      </MainLayout>
      <Footer />
    </div>
  );
};

export default App;
