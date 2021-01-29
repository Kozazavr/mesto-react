import React from 'react';

function PopupWithForm({title, name, titleButton, children, isOpen, onClose, onSubmit, loading, validity}) {
  
  let isActiveButton = validity ? '' : 'popup__button_inactive';
  console.log(isActiveButton);
 
  return (
    <section className={`popup popup_${name} ${isOpen}`}>
      <form className="popup__container" name={name} onSubmit={onSubmit} noValidate>
        <button type="button" className="popup__close" onClick={onClose} />
        <h2 className="popup__title">{title}</h2>
        {children}
        <button type="submit" className={`popup__button popup__button_${name} ${isActiveButton}`} disabled={!isActiveButton}>{!loading ? titleButton : "Сохранение..."}</button>
      </form>
    </section>
  );
}

export default PopupWithForm;


///    buttonElement.classList.add(this._inactiveButtonClass);
///buttonElement.setAttribute('disabled', 'secondAttribute');