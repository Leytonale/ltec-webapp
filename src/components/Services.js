import React from 'react';
import './styles/Services.css'; // Importa los estilos CSS específicos para la sección de servicios

function Services() {
    const servicesData = [
        {
          id: 1,
          title: 'Reparación de Computadoras',
          description: 'Solucionamos problemas de hardware y software en tu computadora.',
          image: 'ruta-a-tu-imagen-1.jpg',
        },
        {
          id: 2,
          title: 'Mantenimiento Preventivo',
          description: 'Realizamos mantenimiento para mantener tu equipo en óptimas condiciones.',
          image: 'ruta-a-tu-imagen-2.jpg',
        },
        {
          id: 3,
          title: 'Recuperación de Datos',
          description: 'Recuperamos datos perdidos debido a fallas en el sistema o eliminación accidental.',
          image: 'ruta-a-tu-imagen-3.jpg',
        },
        {
          id: 4,
          title: 'Instalación de Software',
          description: 'Instalamos y configuramos software para satisfacer tus necesidades.',
          image: 'ruta-a-tu-imagen-4.jpg',
        },
        {
          id: 5,
          title: 'Actualización de Hardware',
          description: 'Mejoramos el rendimiento de tu computadora mediante la actualización de hardware.',
          image: 'ruta-a-tu-imagen-5.jpg',
        },
        {
          id: 6,
          title: 'Redes y Conectividad',
          description: 'Configuramos redes y conexiones a Internet para tu hogar o negocio.',
          image: 'ruta-a-tu-imagen-6.jpg',
        },
        {
            id: 7,
            title: 'Eliminación de Virus',
            description: 'Eliminamos virus, malware y programas no deseados de tu sistema.',
            image: 'ruta-a-tu-imagen-7.jpg',
          },
          {
            id: 8,
            title: 'Asesoramiento en Tecnología',
            description: 'Brindamos asesoramiento experto en tecnología y equipos informáticos.',
            image: 'ruta-a-tu-imagen-8.jpg',
          },
      ];
    
      return (
        <section className="services">
          <h2 className="services-title">Nuestros Servicios</h2>
          <div className="services-container">
            {servicesData.map((service) => (
              <div className="service-card" key={service.id}>
                <img src={service.image} alt={service.title} className="service-image" />
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      );
    }
export default Services;
