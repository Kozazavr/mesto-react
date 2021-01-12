import React from 'react';
import api from '../utils/Api.js';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {

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
          alt: item.name,
          src: item.link,
          title: data.name, 
          // likes: data.likes,
          count: item.likes.length,
        })))
      }) 
  }, []);

  // React.useEffect(() => {
  //   api.getProfileData()
  //     .then(data => {
  //       setUserDescription(data.about);
  //     }) 
  // }, [userDescription]);

  // React.useEffect(() => {
  //   api.getProfileData()
  //     .then(data => {
  //       setUserAvatar(data.avatar);
  //     }) 
  // }, [userAvatar]);



  return (
    <main className="page__content">
      <section className="profile page__profile">
        <div className="profile__container">
          <div  className="profile__container-avatar" style={{ backgroundImage: `url(${userAvatar})` }}>
            <div className="profile__avatar-cover">
              <button className="profile__button-edit-avatar" type="button" onClick={onEditAvatar}></button>
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__button" type="button" onClick={onEditProfile}></button>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button className="profile__button-add-images" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="cards page__cards">
      {
        cards.map(({ id, alt, src, title, count }) => 
        <figure className="card" key={id}>
          <img className="card__image" alt={alt} src={src}/> 
          <button className="card__recycle-bin" type="button"></button>
          <figcaption className="card__figcaption">
            <h2 className="card__title">{title}</h2>
            <div className="card__like-container">
              <button className="card__like" type="button"></button>
              <p className="card__counter">{count}</p>
            </div>
          </figcaption>
        </figure>
        )
      }  
      </section> 
    </main>
  );
}

export default Main;
