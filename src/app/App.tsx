import { Suspense, FunctionComponent, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { withProfiler } from '@sentry/react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import config from '@config';
import RouteErrorBoundary from '@components/Errors/RouteErrorBoundary';
import ContactForm from '@components/ContactForm';
import MainLayout from '@layouts/MainLayout';
import Menu from '@components/Menu';
import Footer from '@components/Footer';
import Header from '@components/Header';
import PageLoader from '@components/Elements/Loaders/PageLoader';
import ScrollToTop from '@components/ScrollToTop';
import SocialCard from '@components/SocialCard';
import Navigation from '@components/Navigation';

import { AppWrapper } from './styles';

const LandingPage = lazy(() => import('@pages/Landing'));
const ProjectPage = lazy(() => import('@pages/Project'));

const App: FunctionComponent = () => {
  const location = useLocation();

  return (
    <>
      <AppWrapper id="wrapper">
        <Header>
          <Navigation />
        </Header>
        <MainLayout>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <TransitionGroup>
              <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
                <Routes location={location}>
                  <Route
                    path="/"
                    element={
                      <RouteErrorBoundary location="/">
                        <LandingPage />{' '}
                      </RouteErrorBoundary>
                    }
                  />
                  <Route
                    path="/:slug"
                    element={
                      <RouteErrorBoundary location="/:slug">
                        <ProjectPage />
                      </RouteErrorBoundary>
                    }
                  />
                </Routes>
              </CSSTransition>
            </TransitionGroup>
          </Suspense>
        </MainLayout>
        <Footer>
          <ContactForm />
          <SocialCard />
        </Footer>
      </AppWrapper>
      <Menu items={config.menuItems} />
    </>
  );
};

// Profiler
// Ref: https://docs.sentry.io/platforms/javascript/guides/react/components/profiler/
export default withProfiler(App, { name: config.name });
