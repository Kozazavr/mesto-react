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
  const [deleteCard, setDeleteCard ] = React.useState(null);

    
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
    setIsDeleteCardPopupOpen(false);
  }

  function handleUpdateUser(data) {
    api.editProfile(data)
    .then((data) => {
      setCurrentUser(data)
    })
    closeAllPopups();
  } 


  function handleUpdateAvatar(data) {
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
    setIsDeleteCardPopupOpen(true);
    setDeleteCard(card);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
  
    api.deleteCard(deleteCard._id).then((newCard) => {
      const newCards = cards.filter((c) => c._id !== deleteCard._id);
      setCards(newCards);
    });
    closeAllPopups();
  }
 

  function handleAddPlaceSubmit(data) {
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
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>  
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onUpdateUser={handleAddPlaceSubmit}/>
          <PopupWithForm title="Вы уверены?" name="delete-images" titleButton="Да" 
           isOpen={isDeleteCardPopupOpen ? 'popup_opened' : ''} onClose={closeAllPopups} onSubmit={handleSubmit}/>
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
          <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
