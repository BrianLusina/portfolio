import { FunctionComponent, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { withProfiler } from '@sentry/react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import config from '@config';
import MainLayout from '@layouts/MainLayout';
import usePageViews from '@hooks/analytics/usePageView';
import { AppWrapper } from './styles';

const LandingPage = lazy(() => import('@pages/Landing'));
const ErrorPage = lazy(() => import('@pages/Error'));
const OssProjectsPage = lazy(() => import('@pages/Projects/oss'));
const OssProjectItemPage = lazy(() => import('@pages/Projects/oss/OssProjectItemPage'));
const WorkProjectsPage = lazy(() => import("@pages/Projects/work"))
const WorkProjectItemPage = lazy(() => import('@pages/Projects/work/WorkProjectItemPage'));
const RouteErrorBoundary = lazy(() => import('@components/Errors/RouteErrorBoundary'));

const App: FunctionComponent = () => {
  const location = useLocation();
  usePageViews();

  return (
    <AppWrapper id="wrapper">
      <MainLayout>
        <TransitionGroup>
          <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
            <Routes location={location}>
              <Route
                path="/"
                index
                element={
                  <RouteErrorBoundary location="/">
                    <LandingPage />
                  </RouteErrorBoundary>
                }
              />
              <Route
                path="/projects/oss"
                element={
                  <RouteErrorBoundary location="/oss">
                    <OssProjectsPage />
                  </RouteErrorBoundary>
                }
              />
              <Route
                path="/projects/oss/:slug"
                element={
                  <RouteErrorBoundary location="/oss/:slug">
                    <OssProjectItemPage />
                  </RouteErrorBoundary>
                }
              />
              <Route
                path="/projects/work"
                element={
                  <RouteErrorBoundary location="/projects">
                    <WorkProjectsPage />
                  </RouteErrorBoundary>
                }
              />
              <Route
                path="/projects/work/:slug"
                element={
                  <RouteErrorBoundary location="/project/:slug">
                    <WorkProjectItemPage />
                  </RouteErrorBoundary>
                }
              />
              <Route
                path="*"
                element={
                  <RouteErrorBoundary location="/404">
                    <ErrorPage
                      title="404"
                      subtitle="Page does not exist"
                      message="Little bots scoured this site, but could not find the page you are looking for"
                      cta={
                        <div className="error-button">
                          <a className="rn-button-style--2 btn-solid" href="/">
                            Back To Homepage
                          </a>
                        </div>
                      }
                    />
                  </RouteErrorBoundary>
                }
              />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </MainLayout>
    </AppWrapper>
  );
};

// Profiler
// Ref: https://docs.sentry.io/platforms/javascript/guides/react/components/profiler/
export default withProfiler(App, { name: config.name });
