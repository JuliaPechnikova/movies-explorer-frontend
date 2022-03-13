import './Header.css';
import logo from '../../images/logo.svg';
import { ReactSVG } from 'react-svg';

function Header() {
  return (
    <section className="header">
        <ReactSVG className="header__logo" src={logo} alt="Logo"/>
        <nav>
          <a className="header__register" href='./'>Регистрация</a>
          <button className="header__sign-in">Войти</button>
        </nav>
    </section>
  ); 
}

export default Header;