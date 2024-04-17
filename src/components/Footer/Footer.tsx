import { FunctionComponent } from 'react';
import SocialCard from '@components/SocialCard';
import grayHexagonBackground from '@assets/images/bg/grayhexagons.jpg';
import { FooterProps } from './Footer.types';
import { FooterContainer, FooterCopyright, FooterLeft, FooterRight, FooterWrapper } from './styles';

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <FooterContainer id="footer" className="footer-area">
      <FooterWrapper className="footer-wrapper">
        <div className="row align-items-end row--0">
          <div className="col-lg-6">
            <FooterLeft className="footer-left">
              <div className="inner">
                <span>Ready To Do This?</span>
                <h2>
                  Let's get <br /> to work
                </h2>
                <a className="rn-button-style--2" href="/#contact">
                  <span>Contact Me</span>
                </a>
              </div>
            </FooterLeft>
          </div>

          <div className="col-lg-6">
            <FooterRight className="footer-right" data-black-overlay="6" imageSrc={grayHexagonBackground}>
              <div className="row">
                {/* Start Single Widget  */}
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="footer-link">
                    <h4>Quick Links</h4>
                    <ul className="ft-link">
                      <li>
                        <a href="/projects">Projects</a>
                      </li>
                      <li>
                        <a href="/oss">OSS</a>
                      </li>
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li>
                        <a href="https://blog.brianlusina.com" target='_blank'>Blog</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                  <div className="footer-link">
                    <h4>Say Hello</h4>
                    <ul className="ft-link">
                      <li>
                        <a href="mailto:mail@brianlusina.com">mail@brianlusina.com</a>
                      </li>
                    </ul>

                    <div className="social-share-inner">
                      <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                        <SocialCard iconColor='light'/>
                      </ul>
                    </div>
                  </div>
                </div>

                <FooterCopyright className="col-lg-12">
                  <div className="copyright-text">
                    <p>Copyright © {new Date().getFullYear()} TheLusina. All Rights Reserved.</p>
                  </div>
                </FooterCopyright>
              </div>
            </FooterRight>
          </div>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
