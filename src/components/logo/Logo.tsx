import config from '@config';
import { FunctionComponent } from 'react';
import { LogoProps } from './Logo.interface';
import logo from './logo.svg';

const Logo: FunctionComponent<LogoProps> = ({ icon }: LogoProps) => {
  return (
    <a href="/" className="logo">
      <span className="symbol">
        <img src={(icon as string) || logo} alt="Liber Logo" />
      </span>
      <span className="title">{config.title}</span>
    </a>
  );
};

export default Logo;
