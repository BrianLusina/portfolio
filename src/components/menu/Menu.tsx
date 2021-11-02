import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Menu: FunctionComponent = () => {
  return (
    <nav id="menu">
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="generic.html">Ipsum veroeros</a>
        </li>
        <li>
          <a href="generic.html">Tempus etiam</a>
        </li>
        <li>
          <a href="generic.html">Consequat dolor</a>
        </li>
        <li>
          <a href="elements.html">Elements</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
