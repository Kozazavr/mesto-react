import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card({card, onCardClick, onCardLike, onCardDelete}) {  
  
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__recycle-bin ${isOwn ? 'card__recycle-bin' : 'card__recycle-bin-hide'}`
  ); 
  
  console.log(currentUser._id);
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `card__like ${isLiked ? 'card__like_target' : 'card__like'}`
  ); 

  function handleClick() {
    onCardClick(card);
  }  

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <figure className="card">
      <img className="card__image" alt={card.name} src={card.link} onClick={handleClick}/> 
      <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}/>
      <figcaption className="card__figcaption">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button className={cardLikeButtonClassName} type="button"  onClick={handleLikeClick} />
          <p className="card__counter">{card.likes.length}</p>
        </div>
      </figcaption>
    </figure>
  )
}

export default Card;

