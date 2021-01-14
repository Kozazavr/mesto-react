import React from 'react';

function Card(props) {  
 
  function handleClick() {
    props.onCardClick(props);
  }  
  
  return (
    <figure className="card">
      <img className="card__image" alt={props.title} src={props.src} onClick={handleClick}/> 
      <button className="card__recycle-bin" type="button"></button>
      <figcaption className="card__figcaption">
        <h2 className="card__title">{props.title}</h2>
        <div className="card__like-container">
          <button className="card__like" type="button"></button>
          <p className="card__counter">{props.count}</p>
        </div>
      </figcaption>
    </figure>
  )
}

export default Card;

