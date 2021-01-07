import React from 'react';
// import '../index.css';

function ImagePopup() {
  return (
    <section className="popup popup_view-images">
      <figure className="popup__picture-container">
        <button type="button" className="popup__close popup__close_view-image"></button>
        <img 
          className="popup__picture" 
          alt="Фото" 
          src="#"
        />
        <figcaption className="popup__picture-figcaption">
          <h2 className="popup__picture-title">Фото</h2>
        </figcaption> 
      </figure>
    </section>
  );
}

export default ImagePopup;
