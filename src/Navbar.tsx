import React from 'react';
import './Styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Add the "Firminium" text on the left */}
        <div className="navbar-logo">
          <a href="/">Firminium</a>
        </div>
        
        <ul className="navbar-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/playground">Playground</a></li>
          <li><a href="/pricing">Ceny</a></li>
          <li><a href="/contact">Kontakt</a></li>
          <li><a href="/about">O nás</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
