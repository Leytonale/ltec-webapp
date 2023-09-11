import React from 'react';
import './styles/Testimonials.css'; // Importa los estilos CSS específicos para la sección de testimonios

function Testimonials() {
  // Un arreglo de objetos que representa los testimonios
  const testimonialsData = [
    {
      name: 'Ana García',
      text: 'LTech hizo un trabajo increíble al reparar mi laptop. ¡Volveré a ellos en caso de futuros problemas!',
    },
    {
      name: 'Juan Pérez',
      text: 'Nunca pensé que pudieran recuperar mis datos perdidos, pero LTech lo hizo. ¡Son geniales!',
    },
    {
      name: 'María Rodríguez',
      text: 'Si necesitas ayuda con tu computadora, no busques más. LTech es la elección correcta.',
    },
  ];

  return (
    <section className="testimonials">
      <h2 className="testimonials-title">Testimonios de Clientes</h2>
      <div className="testimonial-cards">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-author">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
