import React from 'react';


function Header() {
  return (
      <header className="cd-header">
        <a href="/index.html" className="cd-logo rolling-links">
          <span data-hover="An Engineer">The Lusina</span></a>
        <a href="#0" className="cd-3d-nav-trigger">
          Menu
          <span></span>
        </a>
      </header>
  );
}

export default Header;
