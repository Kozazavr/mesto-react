import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

    const urlRef = React.useRef('');

    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar: urlRef.current.value,
        });
    } 

    return (
      <PopupWithForm title="Обновить аватар" name="avatar" titleButton="Сохранить"
        isOpen={isOpen ? 'popup_opened' : ''} onClose={onClose} onSubmit={handleSubmit}>
        <div className="popup__field">
          <input id="input-avatar" type="url" className="popup__input popup__input_type_avatar" minLength="2"
            name="popup_avatar" autoComplete="off" placeholder="Ссылка на картинку" ref={urlRef}  required/>
          <span id="input-avatar-error" className="popup__input-error"></span>
        </div>
      </PopupWithForm>
    )
}

export default EditAvatarPopup;