import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import ProjectList from "./projects/ProjectGallery";
import Contact from "./contact/Contact";
import About from "./About";

/**
 * Navigation stateless component
 */
const Navigation = () => {
    return (
        <BrowserRouter>
            <div>
                <nav className="cd-3d-nav-container">
                    <ul className="cd-3d-nav">
                        <li className="cd-selected">
                            <Link to="/projects">Projects</Link>
                            {/*<a href="#projects-main">Projects</a>*/}
                        </li>
                        <li>
                            <a href="https://brianlusina.github.io" target="_blank"
                               rel="noopener noreferrer">Blog</a>
                        </li>
                        <li>
                            <Link to="/about">About Me</Link>
                            {/*<a href="#about-section">About Me</a>*/}
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                            {/*<a href="#contact-section">Contact</a>*/}
                        </li>
                    </ul>
                    <span className="cd-marker color-1"/>
                </nav>

                <Route path="/projects" component={ProjectList}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </div>
        </BrowserRouter>
    );
};

export default Navigation;