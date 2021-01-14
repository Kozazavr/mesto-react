import React from 'react'; 

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
