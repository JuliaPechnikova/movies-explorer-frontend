import './Header.css';
import logo from '../../images/logo.svg';
import { ReactSVG } from 'react-svg';
import { Link, useLocation } from 'react-router-dom';
//import Navigation from './Navigation.js';

function Header() {
  const location = useLocation();
  

  return (
    <header className="header">
      <ReactSVG className="header__logo" src={logo} alt="Logo"/>
      { location.pathname === "/" &&
        <nav>
          <Link className="header__register" to="/signup">Регистрация</Link>
          <Link className="header__sign-in" to="/signin">Войти</Link>
        </nav>
      }
      { location.pathname !== "/" &&
        <nav className="header__container">
          <div>
            <Link className="header__films" to="/movies">Фильмы</Link>
            <Link className="header__saved-films" to="/saved-movies">Сохраненные фильмы</Link>
          </div>
          <Link className="header__profile" to="/profile">Аккаунт</Link>
        </nav> 
      }
    </header>
  ); 
}

export default Header;