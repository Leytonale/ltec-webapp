import React from 'react';
import './styles/Banner.css'; // Importa los estilos CSS específicos para la sección de banner

function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1 className="banner-title">Servicio Técnico de Computadoras</h1>
        <p className="banner-description">
          Soluciones tecnológicas confiables para tu negocio y hogar.
        </p>
      </div>
    </section>
  );
}

export default Banner;
