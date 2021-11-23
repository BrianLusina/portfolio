import { FunctionComponent } from 'react';
import { FooterProps } from './Footer.interface';
import { FooterContainer, FooterCopyright } from './styles';

const Footer: FunctionComponent<FooterProps> = ({ children }: FooterProps) => {
  return (
    <FooterContainer id="footer">
      <div className="inner">
        {children}
        <FooterCopyright className="copyright">
          <li>&copy; TheLusina. All rights reserved</li>
          <li>
            OSS: <a href="https://github.com/BrianLusina/portfolio">Portfolio</a>
          </li>
        </FooterCopyright>
      </div>
    </FooterContainer>
  );
};

export default Footer;
