import React, { useState, useEffect } from 'react';
import './styles/ScrollDownArrow.css'; // Agrega estilos CSS
import arrowdown from './images/arrowdown.png'

function ScrollDownArrow({ targetSectionId,headerClass }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      // Función para manejar el evento de scroll
      const handleScroll = () => {
        // Verifica si el usuario ha vuelto al inicio (por ejemplo, en la parte superior de la página)
        if (window.scrollY === 0) {
          setIsVisible(true); // Muestra la flecha si el usuario está en la parte superior
        } else {
          setIsVisible(false); // Oculta la flecha si el usuario ha bajado
        }
      };
  
      // Agrega un evento de scroll al componente
      window.addEventListener('scroll', handleScroll);
  
      // Elimina el evento de scroll al desmontar el componente
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    const handleArrowClick = () => {
        const targetSection = document.querySelector(`.${targetSectionId}`);
        const header = document.querySelector(`.${headerClass}`);
        if (targetSection && header) {
            const headerHeight = header.getBoundingClientRect().height;
            const targetSectionTop = targetSection.getBoundingClientRect().top;
            
            window.scrollTo({
              top: targetSectionTop - headerHeight,
              behavior: 'smooth',
            });
          }
        };
  return (
    <div className={`scroll-down-arrow ${isVisible ? 'visible' : ''}` }onClick={handleArrowClick}>
      <img className="fas fa-chevron-down" src={arrowdown} alt="ArrowDown" /> {/* Utiliza el ícono de flecha hacia abajo */}
    </div>
  );
}

export default ScrollDownArrow;
