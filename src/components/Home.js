import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Presupuesto from './Presupuesto';
import ScrollDownArrow from './ScrollDownArrow';
import './styles/Presupuesto.css'; 
import './styles/Home.css'; 
import './styles/common.css'// Asegúrate de vincular el archivo CSS

function Home() {
    
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }
  return (
    <div className="home">
      <div className="home-content">
        <h1>Servicio Técnico Especializado en Informatica y Electronica</h1>
        <p>LTEC La solución a todos tus problemas.</p>
        <p>Estamos listos para ayudarte con la reparación y mantenimiento de tu computadora.</p>
        <p>Confía en nosotros para brindarte un servicio de alta calidad y con resultados excepcionales.</p>
        <button onClick={openModal}>Presupuesto sin costo</button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Solicitud de Presupuesto"
        className="presupuesto-modal" // Agrega una clase CSS para el modal
        overlayClassName="presupuesto-overlay" // Agrega una clase CSS para el fondo
      >
        <Presupuesto />
      </Modal>
      <ScrollDownArrow targetSectionId="services"  headerClass="header" />
    </div>
  );
}

export default Home;
