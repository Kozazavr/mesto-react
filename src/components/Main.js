import React from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete}) {

  const currentUser = React.useContext(CurrentUserContext);


   return (
    <main className="page__content">
      <section className="profile page__profile">
        <div className="profile__container">
          <div  className="profile__container-avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }}>
            <div className="profile__avatar-cover">
              <button className="profile__button-edit-avatar" type="button" onClick={onEditAvatar} />
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1> 
            <button className="profile__button" type="button" onClick={onEditProfile} />
            <p className="profile__job">{currentUser.about}</p>
          </div>
        </div>
        <button className="profile__button-add-images" type="button" onClick={onAddPlace} />
      </section>
      <section className="cards page__cards">
      {
        cards.map((card) => 
        <Card key={card._id} card={card} 
        onCardClick={onCardClick}
        onCardLike={onCardLike}
        onCardDelete={onCardDelete}/>)
      }  
      </section> 
    </main>
  );
}

export default Main;
