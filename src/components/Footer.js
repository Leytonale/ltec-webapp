// Footer.js

import React from 'react';
import './styles/Footer.css';
import logo2 from './images/logo2.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo2} alt="Logo de LTEC" />
        </div>
        <div className="footer-contact">
          <h3>Contacto</h3>
          <p>Dirección: Monteagudo 1100, Tafi Viejo, Tucuman</p>
          <p>Teléfono: +54 381 --- ---</p>
          <p>Correo Electrónico: info@ltec.com.ar</p>
        </div>
        <div className="footer-links">
          <h3>Enlaces</h3>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Testimonios</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 LTEC Servicio Técnico Especializado</p>
      </div>
    </footer>
  );
}

export default Footer;
