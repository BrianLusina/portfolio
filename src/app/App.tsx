import { Suspense, FunctionComponent } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { withProfiler } from '@sentry/react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import config from '@config';
import ContactContainer from '../containers/contact';
import MainLayout from '../layouts/MainLayout';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageLoader from '../components/Elements/Loaders/PageLoader';
import ScrollToTop from '../components/ScrollToTop';
import SocialCard from '../components/SocialCard';
import Navigation from '../components/Navigation';
import AppRoutes from '../routes/AppRoutes';
import { AppWrapper } from './styles';

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
                <Switch location={location}>
                  <AppRoutes />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </Suspense>
        </MainLayout>
        <Footer>
          <ContactContainer />
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
