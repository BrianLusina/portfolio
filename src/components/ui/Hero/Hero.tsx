import { FunctionComponent } from 'react';
import { HeroProps } from './Hero.props';

const Hero: FunctionComponent<HeroProps> = ({
  textPosition = 'text-left',
  category = 'Freelance digital designer',
  title = 'Hello, I’m <span>Lusina</span> Welcome to my World.',
  description = '',
  buttonText = '',
  buttonLink = ''
}) => {
  return (
    <div id="home" className="fix">
      <div className="slider-wrapper">
        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className={`inner ${textPosition}`}>
                  {category ? <span>{category}</span> : ''}
                  {title ? (
                    <h1 className="title" dangerouslySetInnerHTML={{ __html: title }}></h1>
                  ) : (
                    ''
                  )}
                  {description ? <p className="description">{description}</p> : ''}
                  {buttonText ? (
                    <div className="slide-btn">
                      <a
                        className="rn-button-style--2 btn-primary-color"
                        href={`${buttonLink}`}
                      >
                        {buttonText}
                      </a>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
