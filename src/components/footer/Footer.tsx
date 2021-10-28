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
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
