import { FunctionComponent } from 'react';
import { AboutProps } from './About.props';
import Tabs from '@components/ui/tab';
import mountainPosterImage from '@assets/images/posters/mountain.jpg';

const About: FunctionComponent<AboutProps> = ({
  title = 'About Me',
  description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered <a href="#">alteration</a> in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,',
}) => {
  return (
    <div id="about" className="fix">
      <div className="about-area ptb--120  bg_color--1">
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src={mountainPosterImage}
                    alt="About Me"
                  />
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
                      tabs={[
                        {
                          title: 'Main Skills',
                          content: (
                            <div className="single-tab-content">
                              <ul>
                                <li>
                                  <a href="/service">
                                    User experience design <span> - UI/UX</span>
                                  </a>
                                  Delight the user and make it work.
                                </li>
                                <li>
                                  <a href="/service">
                                    Web and user interface design<span> - Development</span>
                                  </a>
                                  Websites, web experiences, ...
                                </li>
                                <li>
                                  <a href="/service">
                                    Interaction design <span> - Animation</span>
                                  </a>
                                  I like to move it move it.
                                </li>
                              </ul>
                            </div>
                          ),
                        },
                        {
                          title: 'Awards',
                          content: (
                            <div className="single-tab-content">
                              <ul>
                                <li>
                                  <a href="/service">
                                    Awwwards.com <span>- Winner</span>
                                  </a>{' '}
                                  2019 - 2020
                                </li>
                                <li>
                                  <a href="/service">
                                    CSS Design Awards <span>- Winner</span>
                                  </a>{' '}
                                  2017 - 2018
                                </li>
                                <li>
                                  <a href="/service">
                                    Design nominees <span>- site of the day</span>
                                  </a>{' '}
                                  2013- 2014
                                </li>
                              </ul>
                            </div>
                          ),
                        },
                        {
                          title: 'Experience',
                          content: (
                            <div className="single-tab-content">
                              <ul>
                                <li>
                                  <a href="/service">
                                    Sr. Front-end Engineer<span> - Google</span>
                                  </a>{' '}
                                  2018 - Current
                                </li>
                                <li>
                                  <a href="/service">
                                    Front-end Engineer<span> - Microsoft</span>
                                  </a>{' '}
                                  2017 - 2018
                                </li>
                                <li>
                                  <a href="/service">
                                    Software Engineer<span> - Alibaba </span>
                                  </a>{' '}
                                  2013- 2014
                                </li>
                              </ul>
                            </div>
                          ),
                        },
                        {
                          title: 'Experience & Certification',
                          content: (
                            <div className="single-tab-content">
                              <ul>
                                <li>
                                  <a href="/service">
                                    BSc In CSE<span> - ABC University, Los Angeles, CA</span>
                                  </a>{' '}
                                  2010
                                </li>
                                <li>
                                  <a href="/service">
                                    Diploma in Computer Science
                                    <span> - Gamma Technical Institute</span>
                                  </a>{' '}
                                  2009
                                </li>
                                <li>
                                  <a href="/service">
                                    Graphic Designer<span> - ABC Institute, Los Angeles, CA</span>
                                  </a>{' '}
                                  2007
                                </li>
                              </ul>
                            </div>
                          ),
                        },
                      ]}
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
