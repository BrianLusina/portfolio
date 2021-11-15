import config from '@config';
import { FunctionComponent, ReactNode } from 'react';
import { LogoContainer, LogoWrapper, LogoImage, LogoText } from './styles';
import logo from './logo.svg';

type LogoProps = {
  icon?: ReactNode;
};

const Logo: FunctionComponent<LogoProps> = ({ icon }: LogoProps) => {
  return (
    <LogoContainer href="/" className="logo">
      <LogoWrapper className="symbol">
        <LogoImage src={(icon as string) || logo} alt="Liber Logo" />
      </LogoWrapper>
      <LogoText className="title">{config.title}</LogoText>
    </LogoContainer>
  );
};

export default Logo;
