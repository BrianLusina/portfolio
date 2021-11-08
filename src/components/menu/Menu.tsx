import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Menu: FunctionComponent = () => {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="https://blog.lusina.com">Blog</a>
          </li>
        </ul>
      </div>
      <a className="close" href="#menu">
        Close
      </a>
    </nav>
  );
};

export default Menu;
