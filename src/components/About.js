import React from 'react';
import './styles/fonts-awesome/css/all.css';
import './styles/About.css'; // Importa los estilos CSS específicos para la página "Acerca de Nosotros"
import aleyton from "./images/miembros/aleyton.png";
import wleyton from "./images/miembros/wleyton.png";


function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h2 className="about-title">Acerca de Nosotros</h2>
        <p className="about-description">
          Somos LTEC, un equipo de apasionados por la tecnología con una misión clara: brindarte soluciones tecnológicas confiables para tu hogar y negocio.
        </p>
        <p className="about-description">
          Con mas de 10 años de experiencia en el campo, estamos dedicados a resolver problemas de hardware, instalar y configurar software, eliminar malware y mantener tus sistemas funcionando sin problemas.
        </p>
        <p className="about-description">
          Nuestra pasión por la tecnología se refleja en cada proyecto que emprendemos. Trabajamos incansablemente para proporcionarte un servicio de calidad que cumple con tus necesidades y expectativas.
        </p>

        {/* Agrega información sobre los fundadores */}
        <div className="founders">
          <h3 className="founders-title">Nuestros Fundadores</h3>
          <div className="founder-card">
            <img
              src={aleyton}
              alt="Alejandro Leyton"
              className="founder-image"
            />
            <h4 className="founder-name">Alejandro Leyton</h4>
            <p className="founder-description">
              Co-fundador y Técnico Especializado
            </p>
            <a href="https://www.linkedin.com/in/leytonale/" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://www.alejandroleyton.com.ar" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe"></i> Sitio Web
            </a>
            <a href="https://www.github.com/leytonale" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>

          <div className="founder-card">
            <img
              src={wleyton}
              alt="William Leyton"
              className="founder-image"
            />
            <h4 className="founder-name">William Leyton</h4>
            <p className="founder-description">
              Co-fundador y Técnico Especializado
            </p>
            <a href="enlace-de-LinkedIn" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="enlace-de-pagina-web-personal" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe"></i> Sitio Web
            </a>
            <a href="enlace-de-GitHub" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
