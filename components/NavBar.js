'use client';

import React, { useState } from 'react'
import './styles/navbar.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Beans Scene</h2>
      </div>
      <button
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-content ${isMenuOpen ? 'is-open' : ''}`}>
        <div className="nav-links">
          <ul>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#menu" onClick={closeMenu}>Menu</a></li>
            <li><a href="#about" onClick={closeMenu}>About Us</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>

        <div className="nav-buttons">
          <button className="signin-button" type="button">Sign In</button>
          <button className="signup-button" type="button">Sign Up</button>
        </div>
      </div>

    </nav>
  )
}




export default NavBar
