import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

const Logo: FunctionComponent = () => {
  return (
    <Link to="/" className="logo">
      <span className="symbol">
        <img src={logo} alt="Liber Logo" />
      </span>
      <span className="title">Liber</span>
    </Link>
  );
};

export default Logo;
