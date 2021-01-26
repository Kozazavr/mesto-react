import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js'
import api from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
// import { Route } from 'react-router-dom';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState([]);
  
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
    .then(data);
    setCurrentUser(data);
    closeAllPopups();
  } 

  React.useEffect(() => {
    api.getProfileData()
      .then(data => {
        setCurrentUser(data);
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
      />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>  
      <PopupWithForm title="Новое место" name="add-images" titleButton="Создать"
        isOpen={isAddPlacePopupOpen ? 'popup_opened' : ''}
        onClose={closeAllPopups}>
        <div className="popup__field">
          <input id="input-image-name" type="text" className="popup__input popup__input_type_image-name" minLength="2"
            maxLength="30" name="popup_name" autoComplete="off" placeholder="Название" required/>
          <span id="input-image-name-error" className="popup__input-error"></span>
        </div>
        <div className="popup__field">
          <input id="input-url" type="url" className="popup__input popup__input_type_image-link" 
            name="popup_job" autoComplete="off" placeholder="Ссылка на картинку" required/>
          <span id="input-url-error" className="popup__input-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm title="Вы уверены?" name="delete-images" titleButton="Да" />
      <PopupWithForm title="Обновить аватар" name="avatar" titleButton="Сохранить"
        isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''}
        onClose={closeAllPopups}>
        <div className="popup__field">
          <input id="input-avatar" type="url" className="popup__input popup__input_type_avatar" minLength="2"
            name="popup_avatar" autoComplete="off" placeholder="Ссылка на картинку" required/>
          <span id="input-avatar-error" className="popup__input-error"></span>
        </div>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      <Footer />
    </div>
  </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
