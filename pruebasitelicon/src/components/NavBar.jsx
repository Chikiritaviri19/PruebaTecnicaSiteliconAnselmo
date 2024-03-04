import React from 'react';
import './css/NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/">HOME</a></li>
        <li className="nav-item"><a href="/about">ABOUT</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;