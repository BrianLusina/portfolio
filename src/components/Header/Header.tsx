import { FunctionComponent } from 'react';
import Logo from '@components/Elements/Logo';
import { FiX, FiMenu } from 'react-icons/fi';
import { HeaderWrapper } from './styles';
import { HeaderProps } from './HeaderProps';
import Navigation from '@components/Navigation';
import SocialCard from '@components/SocialCard';

const Header: FunctionComponent<HeaderProps> = ({
  color = 'default-color',
}: HeaderProps) => {

  const menuTrigger = () => {
    document.querySelector('.header-wrapper')?.classList.toggle('menu-open');
  };

  const closeMenuTrigger = () => {
    document.querySelector('.header-wrapper')?.classList.remove('menu-open');
  };

  return (
    <HeaderWrapper className={`header-area header-style-two header--fixed ${color}`}>
      <div className="header-wrapper">
        <div className="header-left d-flex align-items-center">
          <div className="logo">
            <a href="/">
              <Logo />
            </a>
          </div>

          <Navigation />
        </div>

        <div className="header-right">
          <SocialCard />

          {/* Start Humberger Menu  */}
          <div className="humberger-menu d-block d-lg-none pl--20">
            <span onClick={menuTrigger} className="menutrigger text-white">
              <FiMenu />
            </span>
          </div>
          {/* End Humberger Menu  */}
          <div className="close-menu d-block d-lg-none">
            <span onClick={closeMenuTrigger} className="closeTrigger">
              <FiX />
            </span>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
