import React from 'react';

/**
 * About stateless component
 */
const About = () => {
    return (
        <section id="about-section">
            <div className="row">
                <h3 id="about-title">A little bit about me.</h3>
                <hr width="40%"/>
            </div>

            <div className="row">
                <div className="small-12 columns">
                    <p className="about-text">I am <em>Brian Lusina</em>. I <span style={{textDecoration:"line-through"}}>make things</span> build websites and Android applications. I love creating products that work well, feel good and
                        achieve both the end-user and the business goal.
                        <span style={{ textAlign:"center"}}>View my resume
                            <a id="resume-link"
                                                                          href="http://lusinaresume.netlify.com/"
                                                                          target="_blank">here</a>
                        </span>
                    </p>
                </div>
            </div>

            <div className="row">
                <h4 id="connect-about">Feel free to connect.</h4>
            </div>

            <div id="social-container" className="row">
                <a href="https://twitter.com/brianlusina" className="social-links">
                    <i className="fa fa-twitter fa-2x"/>
                </a>

                <a href="https://www.linkedin.com/in/brianlusina" className="social-links">
                    <i className="fa fa-linkedin fa-2x"/>
                </a>

                <a href="https://github.com/BrianLusina" className="social-links">
                    <i className="fa fa-github fa-2x"/>
                </a>

                <a href="https://medium.com/@lusinabrian" className="social-links">
                    <i className="fa fa-medium fa-2x"/>
                </a>

                <a href="https://plus.google.com/102302755150765254402" className="social-links">
                    <i className="fa fa-google-plus fa-2x"/>
                </a>

                <a href="http://codepen.io/thelusina/" className="social-links">
                    <i className="fa fa-codepen fa-2x"/>
                </a>
            </div>
        </section>
    );
};

export default About;