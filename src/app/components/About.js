import React from 'react';
import $ from "jquery";

/**
 * About stateless component
 */
const About = () => {

    /**
     * Changes the color of an icon when then mouse enters view bounds
     * @param {Object} event Event object with the information of the view
     * */
    function changeColor(event) {
        const target = event.target;

        if ($(target).hasClass('fa-twitter')) {
            $(target).css('color', '#00ABF1');
        } else if ($(target).hasClass('fa-linkedin')) {
            $(target).css('color', '#0177B5');
        } else if ($(target).hasClass('fa-github')) {
            $(target).css('color', '#000');
        } else if ($(target).hasClass('fa-medium')) {
            $(target).css('color', '#00AB6B');
        } else if ($(target).hasClass('fa-google-plus')) {
            $(target).css('color', '#DB4437');
        } else if ($(target).hasClass('fa-codepen')) {
            $(target).css('color', '#878787');
        }
    }

    /**
     * Resets the color when the mouse leaves the view
     * @param {Object} event
     * */
    function resetColor(event){
       const target = event.target;
        $(target).css('color','white');
    }

    /**
     * Renders social icons in a list to a React element
     * */
    function renderSocialIcons() {
        const socialIcons = [
            {
                link: "https://twitter.com/brianlusina",
                faClass: "fa-twitter"
            },
            {
                link: "https://www.linkedin.com/in/brianlusina",
                faClass: "fa-linkedin"
            },
            {
                link: "https://github.com/BrianLusina",
                faClass: "fa-github"
            },
            {
                link: "https://medium.com/@lusinabrian",
                faClass: "fa-medium"
            },
            {
                link: "https://plus.google.com/102302755150765254402",
                faClass: "fa-google-plus"
            },
            {
                link: "http://codepen.io/thelusina/",
                faClass: "fa-codepen"
            },
        ];

        return socialIcons.map((item, index) => {
            return (
                <a key={index} href={item.link} className="social-links">
                    <i className={"fa " + item.faClass + " fa-2x"}
                       onMouseEnter={changeColor}
                       onMouseLeave={resetColor}
                    />
                </a>
            )
        })
    }

    return (
        <section id="about-section">
            <div className="row">
                <h3 id="about-title">A little bit about me.</h3>
                <hr width="40%"/>
            </div>

            <div className="row">
                <div className="small-12 columns">
                    <p className="about-text">I am <em>Brian Lusina</em>. I <span
                        style={{textDecoration: "line-through"}}>make things</span> build websites and Android
                        applications. I love creating products that work well, feel good and
                        achieve both the end-user and the business goal.
                        <span style={{textAlign: "center"}}>View my resume
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
                {renderSocialIcons()}
            </div>
        </section>
    );
};

export default About;