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
            <a href=''>Dashboard</a>
          </li>
          <li>
            <a href='#'>Reports</a>
          </li>
          <li>
            <a href='#'>Call Logs</a>
          </li>
          <li>
            <a href='#'>Sales Data</a>
          </li>
          <li>
            <a href='#'>Profile</a>
          </li>
          <li>
            <a href='#'>Help/Support</a>
          </li>
        </ul>
        <h1 className='logo'>Navbar</h1>
      </div>
    </nav>
  );
};

export default Header;
