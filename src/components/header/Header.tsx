import { FunctionComponent } from 'react';
import Logo from 'components/logo';
import Navigation from 'components/navigation';

const Header: FunctionComponent = () => {
  return (
    <header id="header">
      <div className="inner">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
