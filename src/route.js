import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'; // Importa el componente de la página de inicio
import Blog from './components/Blog';
import Services from './components/Services'; // Importa el componente de servicios
import About from './components/About'; // Importa el componente de "Acerca de Nosotros"
import Contact from './components/Contact'; // Importa el componente de contacto
import Testimonials from './components/Testimonials'; // Importa el componente de testimonios

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/testimonials" component={Testimonials} />
      </Switch>
    </Router>
  );
}

export default Routes;
