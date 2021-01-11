import React from 'react';
import api from '../utils/Api.js';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    api.getProfileData()
      .then(data => {
        setUserName(data.name);
      }) 
  }, [userName]);

  React.useEffect(() => {
    api.getProfileData()
      .then(data => {
        setUserDescription(data.about);
      }) 
  }, [userDescription]);

  React.useEffect(() => {
    api.getProfileData()
      .then(data => {
        setUserAvatar(data.avatar);
      }) 
  }, [userAvatar]);



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
      <section className="cards page__cards"></section> 
    </main>
  );
}

export default Main;
