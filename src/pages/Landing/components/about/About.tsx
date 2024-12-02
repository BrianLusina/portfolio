import { FunctionComponent } from 'react';
import { AboutProps } from './About.props';
import Tabs from '@components/ui/tab';
import mountainPosterImage from '@assets/images/posters/mountain.jpg';
import { aboutTabSectionData } from './data';
// import useFetchMainSkills from '@hooks/api/about/useFetchMainSkills';

const About: FunctionComponent<AboutProps> = ({
  title = 'About Me',
  description = 'I am a Software Engineer building "engines" with crayons and legos for fun and profit. This showcases some of the work I have done & projects involved in. Enjoy!',
}) => {
  // const { status, data } = useFetchMainSkills()

  return (
    <div id="about" className="fix">
      <div className="about-area ptb--120  bg_color--1">
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5">
                <div className="thumbnail">
                  <img className="w-100" src={mountainPosterImage} alt="About Me" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">{title}</h2>
                    <p className="description">{description}</p>
                  </div>
                  <div className="row mt--30">
                    <Tabs
                      tabstyle="tab-style--1"
                      tabs={aboutTabSectionData.map(({ tabTitle, content }) => ({
                        title: tabTitle,
                        content: (
                          <div className="single-tab-content">
                            <ul>
                              {content.map(({ title, description }) => (
                                <li>
                                  {title}
                                  {description}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ),
                      }))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
