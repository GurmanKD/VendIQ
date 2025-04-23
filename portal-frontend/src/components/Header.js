import React, { useState } from 'react';
import './Header.css'; // Import the CSS file for styles

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container container'>
        <input
          type='checkbox'
          id='toggleMenu'
          checked={isMenuOpen}
          onChange={toggleMenu}
        />
        <div className='hamburger-lines' onClick={toggleMenu}>
          <span className='line line1'></span>
          <span className='line line2'></span>
          <span className='line line3'></span>
        </div>
        <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Category</a>
          </li>
          <li>
            <a href='#'>Menu</a>
          </li>
          <li>
            <a href='#'>Testimonial</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
        <h1 className='logo'>Navbar</h1>
      </div>
    </nav>
  );
};

export default Header;
