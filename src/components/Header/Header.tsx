import { FunctionComponent } from 'react';
import Logo from '@components/Elements/Logo';
import { FiX, FiMenu } from 'react-icons/fi';
import { HeaderProps } from './HeaderProps';
import Navigation from '@components/Navigation';
import SocialCard from '@components/SocialCard';
import logo from '@assets/images/logos/lusina_signature_light.png';
import { HeaderWrapper } from './styles';

const Header: FunctionComponent<HeaderProps> = ({ color = 'default-color' }: HeaderProps) => {
  const menuTrigger = () => {
    document.querySelector('.header-wrapper')?.classList.toggle('menu-open');
  };

  const closeMenuTrigger = () => {
    document.querySelector('.header-wrapper')?.classList.remove('menu-open');
  };

  // TODO: use useEffect or useLayoutEffect

  window.addEventListener('scroll', function () {
    var value = window.scrollY;
    if (value > 100) {
      document.querySelector('.header--fixed')?.classList.add('sticky');
    } else {
      document.querySelector('.header--fixed')?.classList.remove('sticky');
    }
  });

  // var elements = document.querySelectorAll('.has-droupdown > a');
  // for(var i in elements) {
  //     if(elements.hasOwnProperty(i)) {
  //         elements[i].onclick = function() {
  //             parentElement.querySelector('.submenu').classList.toggle("active");
  //             classList.toggle("open");
  //         }
  //     }
  // }  

  return (
    <HeaderWrapper className={`header-area header-style-two header--fixed ${color}`}>
      <div className="header-wrapper">
        <div className="header-left d-flex align-items-center">
          <Logo>
            <img src={logo} alt="Folio" />
          </Logo>
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
