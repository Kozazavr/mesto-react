import React from 'react';
// import '../index.css';

function ImagePopup({onClose, card}) {
  console.log(card);
  return (
    <section className={`popup popup_view-images ${card ? 'popup_opened' : ''}`}>  
      <figure className="popup__picture-container">
        <button type="button" className="popup__close popup__close_view-image" onClick={onClose}></button>
        <img 
          className="popup__picture" 
          alt={`${card ? card.title : ''}`} 
          src={`${card ? card.src : ''}`}
        />
        <figcaption className="popup__picture-figcaption">
          <h2 className="popup__picture-title">{`${card ? card.title : ''}`}</h2>
        </figcaption> 
      </figure>
    </section>
  );
}



export default ImagePopup;
