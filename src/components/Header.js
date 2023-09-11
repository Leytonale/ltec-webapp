import React from 'react';
import './styles/Header.css'; // Importa los estilos CSS específicos para el encabezado
import logo from './images/logo.png'

function Header() {
  return (
    <header className="header">
        <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  integrity="sha512-..."
  crossorigin="anonymous"
/>
      <div className="logo-container">
        <img src={logo} alt="LTEC Logo" className="logo" />
      </div>
    </header>
  );
}

export default Header;
