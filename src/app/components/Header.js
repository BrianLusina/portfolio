import React from 'react';
import PropTypes from 'prop-types';

/**
 * Header stateless component
 */
const Header = () => {
    return (
        <header className="cd-header">
            <a href="#" className="cd-logo rolling-links">
                <span data-hover="A Designer">The Lusina</span>
            </a>
            <a href="#" className="cd-3d-nav-trigger">
                Menu
                <span></span>
            </a>
        </header>
    );
};


export default Header;