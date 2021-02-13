import React from 'react'


const About = () => {
    return (
        <section id="about-section">
            {/* <!--about title--> */}
            <div className="row">
                <h3 id="about-title">A little bit about me.</h3>
                <hr style={{ width: "40%"}} />
            </div>
        
            {/* <!--about me text--> */}
            <div className="row">
                <div className="small-12 columns">
                    <p className="about-text">I am <em>Brian Lusina</em>. I <span style={{ textDecoration: "line-through"}}>make things</span> build systems, websites and applications. I love creating products that work well, feel good and achieve both the end-user and the business goal.
                        <span style={{ textAlign:"center" }}>View my resume <a id="resume-link" href="http://lusinaresume.netlify.com/" target="_blank" rel="noreferrer">here</a></span>
                    </p>
                </div>
            </div>
            
            <div className="row">
                <h4 id="connect-about">Feel free to connect.</h4>
            </div>
        
            {/* <!--social icons--> */}
            <div id="social-container" className="row">
                {/* <!--twitter--> */}
                <a href="https://twitter.com/brianlusina" className="social-links">
                    <i className="fa fa-twitter fa-2x"></i>
                </a>

                {/* <!--linkedin--> */}
                <a href="https://www.linkedin.com/in/brianlusina" className="social-links">
                    <i className="fa fa-linkedin fa-2x"></i>
                </a>

                {/* <!--GITHUB */}
                <a href="https://github.com/BrianLusina" className="social-links">
                    <i className="fa fa-github fa-2x"></i>
                </a>

                {/* <!--medium--> */}
                <a href="https://medium.com/@brianlusina" className="social-links">
                    <i className="fa fa-medium fa-2x"></i>
                </a>

                {/* code pen */}
                <a href="http://codepen.io/thelusina/" className="social-links">
                    <i className="fa fa-codepen fa-2x"></i>
                </a>
            </div>
        </section>
    )
}

export default About;