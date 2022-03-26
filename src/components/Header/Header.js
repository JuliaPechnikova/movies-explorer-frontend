import './Header.css';
import logo from '../../images/logo.svg';
import { ReactSVG } from 'react-svg';
import { Link, useLocation } from 'react-router-dom';
import menu from '../../images/header-menu.svg'
import Navigation from '../Navigation/Navigation';
import React from 'react';

function Header() {
  const location = useLocation();

  const [isNavigationOpen, setNavigationOpen] = React.useState(false);
  
  const handleNavigationClick = () => {
    setNavigationOpen(true);
  }

  const close = () => {
    setNavigationOpen(false);
  }

  return (
    <header className="header">
      <Link to="/"><ReactSVG className="header__logo" src={logo} alt="Logo"/></Link>
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
          <button className="header__menu" onClick={handleNavigationClick}><img src={menu} alt="Меню"/></button>
        </nav> 
      }
      {<Navigation isOpen={isNavigationOpen} onClose={close}/>}
    </header>
  ); 
}

export default Header;