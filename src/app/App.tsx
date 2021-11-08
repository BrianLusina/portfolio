import { Suspense, FunctionComponent } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import Menu from '@components/menu';
import Footer from '@components/footer';
import Header from '@components/header';
import MainLayout from '@layouts/MainLayout';
import PageLoader from '@components/loaders/PageLoader';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ScrollToTop from '@components/scrolltotop';
import { withProfiler } from '@sentry/react';
import config from '@config';
import AppRoutes from '../routes/AppRoutes';
import './app.css';

const App: FunctionComponent = () => {
  const location = useLocation();

  return (
    <>
      <div id="wrapper">
        <Header />
        <MainLayout>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <TransitionGroup>
              <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
                <Switch location={location}>
                  <AppRoutes />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </Suspense>
        </MainLayout>
        <Footer />
      </div>
      <Menu />
    </>
  );
};

// Profiler
// Ref: https://docs.sentry.io/platforms/javascript/guides/react/components/profiler/
export default withProfiler(App, { name: config.name });