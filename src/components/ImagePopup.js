import React from 'react';

function ImagePopup({onClose, card}) {
  
  return (
    <section className={`popup popup_view-images ${card ? 'popup_opened' : ''}`}>   
      <figure className="popup__picture-container">
        <button type="button" className="popup__close popup__close_view-image" onClick={onClose} />
        <img 
          className="popup__picture" 
          alt={`${card ? card.name : ''}`}
          src={`${card ? card.link : ''}`}
        />
        <figcaption className="popup__picture-figcaption">
          <h2 className="popup__picture-title">{`${card ? card.name : ''}`}</h2>
        </figcaption> 
      </figure>
    </section>
  );
} 

export default ImagePopup;

