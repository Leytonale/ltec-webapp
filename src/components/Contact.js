import React from 'react';
import './styles/Contact.css';
import './styles/common.css';  // Importa los estilos CSS específicos para la página de contacto

function Contact() {
  return (
    <section className="contact"  id="contacto">
      <div className="contact-content">
        <h2 className="contact-title">Contáctanos</h2>
        <p className="contact-description">
          ¿Tienes alguna pregunta o necesitas nuestros servicios? No dudes en ponerte en contacto con nosotros.
        </p>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea id="message" name="message" rows="4" required />
            </div>
            <button type="submit" id="cta-button">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
