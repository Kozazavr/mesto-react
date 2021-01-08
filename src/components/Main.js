import React from 'react';
// import '../index.css';
// import handleEditProfileClick from './App.js';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {
  return (
    <main className="page__content">
      <section className="profile page__profile">
        <div className="profile__container">
          <div className="profile__container-avatar">
            <img 
              src="#" 
              alt="Аватар"
              className="profile__avatar"
            />
            <div className="profile__avatar-cover">
              <button className="profile__button-edit-avatar" type="button" onClick={onEditAvatar}></button>
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__button" type="button" onClick={onEditProfile}></button>
            <p className="profile__job">Исследователь океана</p>
          </div>
        </div>
        <button className="profile__button-add-images" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="cards page__cards"></section> 
    </main>
  );
}

export default Main;
