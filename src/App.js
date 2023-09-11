import React from 'react';
import './App.css'; // Importa los estilos CSS globales
import Header from './components/Header.js';
import Menu from './components/Menu';
import Home from './components/Home'; // Importa el componente de encabezado
import Blog from './components/Blog';
import Banner from './components/Banner.js'; // Importa el componente de banner
import Services from './components/Services.js'; // Importa el componente de servicios
import About from './components/About.js'; // Importa el componente de "Acerca de Nosotros"
import Contact from './components/Contact.js'; // Importa el componente de contacto
import Testimonials from './components/Testimonials.js'; // Importa el componente de testimonios
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Encabezado */}
      <Header id="header" />

      {/* Menu Lateral */}
      <Menu id="Menu" />

      {/* Inicio */}
      <Home id="home" />

      {/* Sección de servicios */}
      <Services id="services"/>

      {/* Sección "Acerca de Nosotros" */}
      <About id="about"/>

      {/* Sección de contacto */}
      <Contact />

      {/* Sección de testimonios */}
      <Testimonials id="testimonials"/>

      {/* Sección de testimonios */}
      <Footer id="footer"/>

      {/* Otros componentes y secciones */}
    </div>
  );
}

export default App;
