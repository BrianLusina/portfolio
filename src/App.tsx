import { Suspense, FunctionComponent } from 'react';
import { Switch } from 'react-router-dom';
import Menu from '@components/menu';
import Footer from '@components/footer';
import Header from '@components/header';
import MainLayout from '@layouts/MainLayout';
import PageLoader from '@components/loaders/PageLoader';
import AppRoutes from './routes/AppRoutes';

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
