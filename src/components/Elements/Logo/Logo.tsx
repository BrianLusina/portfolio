import { FunctionComponent, ReactNode } from 'react';
import { LogoContainer, LogoLink } from './styles';

type LogoProps = {
  children?: ReactNode;
};

const Logo: FunctionComponent<LogoProps> = ({ children }: LogoProps) => {
  return (
    <LogoContainer className="logo">
        <LogoLink href="/">
          {children}
        </LogoLink>
    </LogoContainer>
  );
};

export default Logo;
