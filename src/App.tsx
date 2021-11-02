import { FunctionComponent } from 'react';
import Menu from 'components/menu';
import Footer from 'components/footer';
import Header from 'components/header';
import LandingPage from 'pages/landing';

const App: FunctionComponent = () => {
  return (
    <div id="wrapper">
      <Header />
      <Menu />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default App;
