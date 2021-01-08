import React from 'react'; 
// import '../index.css';




function PopupWithForm({title, name, titleButton, children, isOpen, onClose}) {
  return (
    <section className={`popup popup_${name} ${isOpen}`}>
      <form className="popup__container" name={name} noValidate>
        <button type="button" className="popup__close popup__close_profile" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button type="submit" className="popup__button popup__button_save">{titleButton}</button>
      </form>
    </section>
  );
}

export default PopupWithForm;


/* <section className="popup popup_profile">
  <form className="popup__container" name="profileForm" id="profileForm" noValidate>
    <button type="button" className="popup__close popup__close_profile"></button>
    <h2 className="popup__title">Редактировать профиль</h2>
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
    <button type="submit" className="popup__button popup__button_save">Сохранить</button>
  </form>
</section>
 <section className="popup popup_add-images">
        <form className="popup__container" name="add-images" noValidate>
          <button type="button" className="popup__close popup__close_add-images"></button>
          <h2 className="popup__title">Новое место</h2>
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
          <button type="submit" className="popup__button popup__button_create">Создать</button>
        </form>
      </section>
<section className="popup popup_delete-images">
  <form className="popup__container">
    <button type="button" className="popup__close popup__close_delete-images"></button>
    <h2 className="popup__title popup__title_delete">Вы уверены?</h2>
    <button type="submit" className="popup__button popup__button_delete">Да</button>
  </form>
</section>
<section className="popup popup_avatar">
  <form className="popup__container" name="avatar" id="avatarForm" noValidate>
    <button type="button" className="popup__close popup__close_profile"></button>
    <h2 className="popup__title">Обновить аватар</h2>
    <div className="popup__field">
      <input id="input-avatar" type="url" className="popup__input popup__input_type_avatar" minLength="2"
        name="popup_avatar" autoComplete="off" placeholder="Ссылка на картинку" required/>
      <span id="input-avatar-error" className="popup__input-error"></span>
    </div>
    <button type="submit" className="popup__button popup__button_avatar">Сохранить</button>
  </form>
</section> */

