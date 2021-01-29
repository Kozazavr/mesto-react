import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup({isOpen, onClose, onUpdateUser, loading, validity}) {

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState(''); 
  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();// Запрещаем браузеру переходить по адресу формы
    onUpdateUser({ // Передаём значения управляемых компонентов во внешний обработчик
      name,
      about: description,
    });
  } 

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  return (

    <PopupWithForm title="Редактировать профиль" name="profile" titleButton="Сохранить"
    isOpen={isOpen ? 'popup_opened' : ''} onClose={onClose} onSubmit={handleSubmit} loading={loading} validity={validity}>
      <div className="popup__field">
        <input id="input-name" type="text" className="popup__input popup__input_type_name" minLength="2"
          maxLength="40" name="popup_name" autoComplete="off" placeholder="Имя" required value={name || ''} onChange={handleChangeName}/>
        <span id="input-name-error" className="popup__input-error"></span>
      </div>
      <div className="popup__field">
        <input id="input-job" type="text" className="popup__input popup__input_type_job" minLength="2"
          maxLength="200" name="popup_job" autoComplete="off" placeholder="О себе" required value={description || ''} onChange={handleChangeDescription}/>
        <span id="input-job-error" className="popup__input-error"></span>
      </div>
    </PopupWithForm>
  )
}

export default EditProfilePopup;

