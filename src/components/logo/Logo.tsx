import { FunctionComponent } from 'react';

const Logo: FunctionComponent = () => {
  return (
    <a href="index.html" className="logo">
      <span className="symbol">
        <img src="images/logo.svg" alt="" />
      </span>
      <span className="title">Phantom</span>
    </a>
  );
};

export default Logo;
