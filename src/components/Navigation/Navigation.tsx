import { FunctionComponent } from 'react';
import Scrollspy from 'react-scrollspy';

const Navigation: FunctionComponent = () => {
  return (
    <nav className="mainmenunav d-lg-block ml--50">
      <Scrollspy
        className="mainmenu"
        items={['home', 'about', 'service', 'portfolio', 'blog', 'contact']}
        currentClassName="is-current"
        offset={-200}
      >
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </Scrollspy>
    </nav>
  );
};

export default Navigation;
