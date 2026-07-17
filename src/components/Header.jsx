import React, { useState } from 'react';
import { Zap } from 'lucide-react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'HOME', link: '#' },
    { name: 'PRICING', link: '#pricing' },
    { name: 'ABOUT', link: '#about' },
    { name: 'CONTACT', link: '#contact' }
  ];

  return (
    <div className="header-container">
      <div className={`nav-wrapper ${isOpen ? 'open' : ''}`}>
        <div className="nav-pill">
          <div className="logo-container">
            <a href="#" className="brand-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <Zap color="#e54b2d" size={24} fill="#e54b2d" />
              <span style={{ fontFamily: 'Anton, sans-serif', fontSize: '1.5rem', color: '#fff', letterSpacing: '1px' }}>MAGIC MUSCLE</span>
            </a>
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
