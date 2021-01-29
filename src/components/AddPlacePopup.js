import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup({isOpen, onClose, onUpdateUser, loading}) {

  const [name, setName] = React.useState('');
  const [url, setUrl] = React.useState(''); 
  
  function handleSetName(e) {
    setName(e.target.value);
  }

  function handleSetUrl (e) {
    setUrl(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ 
      name,
      link: url
    });
  } 

  React.useEffect(() => {
    setName('');
    setUrl('');
  }, [isOpen]);

  return (
    <PopupWithForm title="Новое место" name="add-images" titleButton="Создать"
    isOpen={isOpen ? 'popup_opened' : ''} onClose={onClose} onSubmit={handleSubmit} loading={loading}>
      <div className="popup__field">
        <input id="input-image-name" type="text" className="popup__input popup__input_type_image-name" minLength="2"
          maxLength="30" name="popup_name" autoComplete="off" placeholder="Название" value={name || ''} onChange={handleSetName} required />
        <span id="input-image-name-error" className="popup__input-error"></span>
      </div>
      <div className="popup__field">
        <input id="input-url" type="url" className="popup__input popup__input_type_image-link" 
          name="popup_job" autoComplete="off" placeholder="Ссылка на картинку" value={url || ''} onChange={handleSetUrl} required/>
        <span id="input-url-error" className="popup__input-error"></span>
      </div>
    </PopupWithForm>
  )
}

export default AddPlacePopup;