import React, { useEffect, useState } from 'react';
import './styles/Menu.css';

function Menu() {
    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
      };
  return (
    <div>
    <div className={`menu ${menuVisible ? 'visible' : ''}`}>
      <ul>
        <li><a href="#header">Inicio</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#about">Acerca de Nosotros</a></li>
        <li><a href="#contacto">Contacto</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        {/* Agrega más enlaces para otras secciones si es necesario */}
      </ul>
      {/* Botón para desplegar/ocultar el menú */}
    </div>
    <div
        className={`menu-button ${menuVisible ? 'visible' : ''}`}
        onClick={toggleMenu}
      >
        ☰
      </div>
    </div>
  );
}

export default Menu;
