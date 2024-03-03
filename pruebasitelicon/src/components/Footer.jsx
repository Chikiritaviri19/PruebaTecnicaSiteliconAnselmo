import React from 'react';
import logoImage from '../images/logo-sin-fondo.png'; // Importa la imagen del logo
import './css/Footer.css';

const Footer = ({ }) => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logoImage} alt="Logo Aquí" /> {/* Utiliza la imagen */}
      </div>
      <ul>
        <li><a href="/fugitives">HOME</a></li>
        <li><a href="/about">ABOUT</a></li>
      </ul>
      <div className="name">ANSELMO <br/> LÓPEZ</div>
    </footer>
  );
}

export default Footer;