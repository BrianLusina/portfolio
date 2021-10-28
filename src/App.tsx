import { FunctionComponent } from 'react';
import Menu from 'components/menu';
import Footer from 'components/footer';
import Header from './components/header';
import ProjectList from './components/projects';

const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Menu />
      <main id="main" className="cd-main">
        <div className="inner">
          <header>
            <h1>
              This is Phantom, a free, fully responsive site
              <br />
              template designed by <a href="http://html5up.net">HTML5 UP</a>.
            </h1>
            <p>
              Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod
              sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna
              feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.
            </p>
          </header>
          <ProjectList />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
