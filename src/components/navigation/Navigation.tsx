import React from 'react';


function Navigation() {
  return (
    <nav className="cd-3d-nav-container">
        <ul className="cd-3d-nav">
            <li className="cd-selected">
                <a href="#projects-main">Projects</a>
            </li>
            <li>
                <a href="https://brianlusina.github.io" target="_blank" rel="noreferrer">Blog</a>
            </li>
            <li>
                <a href="#about-section">About Me</a>
            </li>
            <li>
                <a href="#contact-section">Contact</a>
            </li>
        </ul>
        <span className="cd-marker color-1"></span>	
    </nav>
  );
}

export default Navigation;
