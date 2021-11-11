import { FunctionComponent } from 'react';
import Logo from '@components/logo';
import { HeaderWrapper } from './styles';
import { HeaderProps } from './Header.interface';

const Header: FunctionComponent<HeaderProps> = ({ children }: HeaderProps) => {
  return (
    <HeaderWrapper id="header">
      <div className="inner">
        <Logo />
        {children}
      </div>
    </HeaderWrapper>
  );
};

export default Header;
