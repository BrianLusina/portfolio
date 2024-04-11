import { Suspense, FunctionComponent, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { withProfiler } from '@sentry/react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import config from '@config';
import RouteErrorBoundary from '@components/Errors/RouteErrorBoundary';
import MainLayout from '@layouts/MainLayout';
import Footer from '@components/Footer';
import PageLoader from '@components/Elements/Loaders/PageLoader';
import usePageViews from '@hooks/analytics/usePageView';
import { AppWrapper } from './styles';

const LandingPage = lazy(() => import('@pages/Landing'));
const ProjectPage = lazy(() => import('@pages/Project'));

const App: FunctionComponent = () => {
  const location = useLocation();
  usePageViews();

  return (
    <AppWrapper id="wrapper">
      <MainLayout>
        {/* TODO: move this to Project list component */}
        <Suspense fallback={<PageLoader />}>
          <TransitionGroup>
            <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
              <Routes location={location}>
                <Route
                  path="/"
                  element={
                    <RouteErrorBoundary location="/">
                      <LandingPage />
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
      <Footer />
    </AppWrapper>
  );
};

// Profiler
// Ref: https://docs.sentry.io/platforms/javascript/guides/react/components/profiler/
export default withProfiler(App, { name: config.name });
