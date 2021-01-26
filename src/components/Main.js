import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api.getCards()
      .then(data => {
        setCards(data.map((item) => item))
      }) 
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if(!isLiked) {
      api.setLike(card._id).then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      });
    } else {
      api.unLike(card._id).then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      });
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then((newCard) => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
    });

  }


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
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}/>)
      }  
      </section> 
    </main>
  );
}

export default Main;
