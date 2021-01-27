import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import api from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
// import { Route } from 'react-router-dom';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleUpdateUser(data) {
    api.editProfile(data)
    .then((item) => {
      setCurrentUser(item)
    })
  } 

  // React.useEffect(() => {
  //   setCurrentUser(currentUser);
  // }, [currentUser]);

  function handleUpdateAvatar(data) {
    api.editAvatar(data.avatar)
    .then((item) => {
      setCurrentUser(item)
    })
    .then((item) => {
      api.getProfileData()
      .then(data => {
        setCurrentUser(data);
      }) 
    })
    closeAllPopups();
  }

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

  function handleAddPlaceSubmit(data) {
    api.addCard(data)
    .then((newCard) => {
      setCards([newCard, ...cards]); 
    })
    closeAllPopups();
  }

 
  React.useEffect(() => {
    api.getProfileData()
      .then(data => {
        setCurrentUser(data);
      }) 
  }, []);

  React.useEffect(() => {
    api.getCards()
      .then(data => {
        setCards(data.map((item) => item))
      }) 
  }, []);

   return (
   
  <CurrentUserContext.Provider value={currentUser}>
  <div className="page">
    <div className="page__container">
      <Header />
      <Main onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
      />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>  
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onUpdateUser={handleAddPlaceSubmit}/>
      <PopupWithForm title="Вы уверены?" name="delete-images" titleButton="Да" />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      <Footer />
    </div>
  </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
