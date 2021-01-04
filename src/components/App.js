// import '../index.css';
import headerLogo from '../images/header_logo.svg';

function App() {
  return (
  <body className="page">
    <div className="page__container">
      <header className="header">
        <img
          className="header__logo"
          alt="Логотип MestoRussia"
          src={headerLogo}
        />
      </header>
      <main className="page__content">
        
        <section className="profile page__profile">
          <div className="profile__container">
            <div className="profile__container-avatar">
              <img 
                src="#" 
                alt="Аватар"
                className="profile__avatar"
              />
              <div className="profile__avatar-cover">
                <button className="profile__button-edit-avatar" type="button"></button>
              </div>
            </div>
            <div className="profile__info">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button className="profile__button" type="button"></button>
              <p className="profile__job">Исследователь океана</p>
            </div>
          </div>
          <button className="profile__button-add-images" type="button"></button>
        </section>
        <section className="cards page__cards"></section> 

        <section className="popup popup_profile">
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
          <form className="popup__container" name="addImageForm" noValidate>
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
        </section>

        <section className="popup popup_view-images">
          <figure className="popup__picture-container">
            <button type="button" className="popup__close popup__close_view-image"></button>
            <img 
              className="popup__picture" 
              alt="Фото" 
              src="#"
            />
            <figcaption className="popup__picture-figcaption">
              <h2 className="popup__picture-title">Фото</h2>
            </figcaption> 
          </figure>
        </section>
      </main>
      <footer className="footer page__footer">
        <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
      </footer>
    </div>
  </body>
  );
}

export default App;
