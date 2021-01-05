// import '../index.css';
import headerLogo from '../images/header_logo.svg';

function Header() {
  return (
      <header className="header">
        <img
          className="header__logo"
          alt="Логотип MestoRussia"
          src={headerLogo}
        />
      </header>
  );
}

export default Header;
