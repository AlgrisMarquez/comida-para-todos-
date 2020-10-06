import React from 'react'; 
import '../../assets/styles/components/TextNews.scss'; 

const TextNews = () => {
    return (
      <div className="title-description-news">
        <div className="title-news">
          <p>Novedades</p>
        </div>
        <div className="content-text-news">
          <p>
            Entérate, inspírate e involúcrate. Explora las próximas campañas e
            iniciativas que llevamos a cabo en Comida para todos.
          </p>
        </div>
      </div>
    );
}

export default TextNews;
