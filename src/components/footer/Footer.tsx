import { FunctionComponent } from 'react';
import Contact from 'components/contact';
import SocialCard from 'components/socialcard';

const Footer: FunctionComponent = () => {
  return (
    <footer id="footer">
      <div className="inner">
        <Contact />
        <SocialCard />
        <ul className="copyright">
          <li>&copy; TheLusina. All rights reserved</li>
          <li>
            OSS: <a href="https://github.com/BrianLusina/portfolio">Portfolio</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
