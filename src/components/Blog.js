import React, { useEffect, useState } from 'react';
import './styles/Blog.css'; // Importa los estilos CSS específicos para la sección de blog

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Realiza una solicitud a la API de WordPress para obtener las últimas publicaciones del blog
    fetch('https://tu-sitio-wordpress.com/wp-json/wp/v2/posts?_embed&per_page=3')
      .then(response => response.json())
      .then(data => setBlogPosts(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <section className="blog">
      <h2 className="blog-title">Nuestro Blog</h2>
      <div className="blog-posts">
        {blogPosts.map(post => (
          <div className="blog-post" key={post.id}>
            <h3 className="blog-post-title">{post.title.rendered}</h3>
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            <a href={post.link} className="read-more" target="_blank" rel="noopener noreferrer">
              Leer más
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
