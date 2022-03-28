import cross from '../../images/cross.svg'
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <nav className={`navigation ${props.isOpen ? 'navigation_opened' : ''}`}>
      <div className="navigation__background"></div>
      <button  className="navigation__cross" onClick={props.onClose}><img src={cross} alt="Закрыть"></img></button>
      <Link className="navigation__link" to="/" onClick={props.onClose}>Главная</Link>
      <Link className="navigation__link navigation__link_active" to="/movies" onClick={props.onClose}>Фильмы</Link>
      <Link className="navigation__link" to="/saved-movies" onClick={props.onClose}>Сохраненные фильмы</Link>
      <Link className="navigation__profile header__profile" to="/profile" onClick={props.onClose}>Аккаунт</Link>
    </nav>
  ); 
}

export default Navigation;