import React from 'react';
// import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

// React.useEffect(() => {
//   function handleMouseMove(event) {
//     setPosition({
//       top: event.pageY,
//       left: event.pageX,
//     });
//   }

//       // Список действий внутри одного хука
//   document.addEventListener('mousemove', handleMouseMove);
//   document.body.classList.add('no-cursor');

//       // Возвращаем функцию, которая удаляет эффекты
//   return () => {
//     document.body.classList.remove('no-cursor');
//     document.removeEventListener('mousemove', handleMouseMove);
//   };
// });








function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
  <div className="page">
    <div className="page__container">
      <Header />
      <Main onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
      />
      <PopupWithForm title="Редактировать профиль" name="profile" titleButton="Сохранить"
        isOpen={isEditProfilePopupOpen ? 'popup_opened' : ''}
        onClose={closeAllPopups}>
        <div className="popup__field">
          <input id="input-name" type="text" className="popup__input popup__input_type_name" minLength="2"
            maxLength="40" name="popup_name" autoComplete="off" placeholder="Имя" required/>
          <span id="input-name-error" className="popup__input-error"></span>
        </div>
        <div className="popup__field">
          <input id="input-job" type="text" className="popup__input popup__input_type_job" minLength="2"
            maxLength="200" name="popup_job" autoComplete="off" placeholder="О себе" required/>
          <span id="input-job-error" className="popup__input-error"></span>
        </div>
      </PopupWithForm>
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
      <ImagePopup />
      <Footer />
    </div>
  </div>
  );
}

export default App;
