import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfileData()
      .then(data => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      }) 
  }, []);

  React.useEffect(() => {
    api.getCards()
      .then(data => {
        setCards(data.map((item) => ({
          id: item._id,
          src: item.link,
          title: item.name, 
          count: item.likes.length
        })))
      }) 
  }, []);

   
  return (
    <main className="page__content">
      <section className="profile page__profile">
        <div className="profile__container">
          <div  className="profile__container-avatar" style={{ backgroundImage: `url(${userAvatar})` }}>
            <div className="profile__avatar-cover">
              <button className="profile__button-edit-avatar" type="button" onClick={onEditAvatar} />
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__button" type="button" onClick={onEditProfile} />
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button className="profile__button-add-images" type="button" onClick={onAddPlace} />
      </section>
      <section className="cards page__cards">
      {
        cards.map(({ id, ...props }) => <Card key={id} {...props} onCardClick={onCardClick}/>)
      }  
      </section> 
    </main>
  );
}

export default Main;
