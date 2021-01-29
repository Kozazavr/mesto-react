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


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);
  const [deleteCard, setDeleteCard] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const [validity, setValidity] = React.useState(false);///////////////

    
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    setLoading(false);
    setValidity(true);/////////////////////////////////////
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    setLoading(false);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    setLoading(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
    setIsDeleteCardPopupOpen(false);
  }

  function handleUpdateUser(data) {
    setLoading(true);
    api.editProfile(data)
    .then((data) => {
      setCurrentUser(data)
    })
    closeAllPopups();
  } 


  function handleUpdateAvatar(data) {
    setLoading(true);
    api.editAvatar(data.avatar)
    .then((item) => {
      setCurrentUser(item)
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
    setLoading(false);
    setIsDeleteCardPopupOpen(true);
    setDeleteCard(card);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
  
    api.deleteCard(deleteCard._id).then((newCard) => {
      const newCards = cards.filter((c) => c._id !== deleteCard._id);
      setCards(newCards);
    });
    closeAllPopups();
  }
 

  function handleAddPlaceSubmit(data) {
    setLoading(true);
    api.addCard(data)
    .then((newCard) => {
       setCards([...cards, newCard]); 
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
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} loading={loading} validity={validity}/>  
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onUpdateUser={handleAddPlaceSubmit} loading={loading}/>
          <PopupWithForm title="Вы уверены?" name="delete-images" titleButton={!loading ? "Да" : "Удаление..."} 
           isOpen={isDeleteCardPopupOpen ? 'popup_opened' : ''} onClose={closeAllPopups} onSubmit={handleSubmit}/>
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} loading={loading}/>
          <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
