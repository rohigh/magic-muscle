import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'HOME', link: '#' },
    { name: 'PRICING', link: '#pricing' },
    { name: 'PROGRAMS', link: '#programs' },
    { name: 'ABOUT', link: '#about' },
    { name: 'CONTACT', link: '#contact' }
  ];

  return (
    <div className="header-container">
      <div className={`nav-wrapper ${isOpen ? 'open' : ''}`}>
        <div className="nav-pill">
          <div className="logo-container">
            <img 
              src="https://via.placeholder.com/80x24/000000/FFFFFF?text=LOGO" 
              alt="Brand Logo" 
              className="logo-img" 
            />
          </div>
          <button className="menu-btn" onClick={toggleMenu}>
            {isOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
        
        {isOpen && (
          <div className="dropdown-overlay">
            <ul className="nav-menu-list">
              {navItems.map((item, index) => (
                <li key={index} className="nav-menu-item">
                  <a href={item.link} className="nav-menu-link" onClick={() => setIsOpen(false)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
