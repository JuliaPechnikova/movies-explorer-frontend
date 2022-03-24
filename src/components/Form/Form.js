import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './Form.css';

function Form(props) {
  return (
    <main className="form">
      <img src={logo} alt="Logo" className="form__logo"/>
      <h1 className="form__hello">{props.hello}</h1>
      <form className="form__form">
        <div>
          {props.children}
          <label htmlFor="email" className="form__header">E-mail</label>
          <input type="email" defaultValue="pochta@yandex.ru" className="form__input" id="email" name="email" required/>
          <label htmlFor="password" className="form__header">Пароль</label>
          <input type="password" defaultValue="••••••••••••••" className="form__input form__error-input" id="password" name="email" required/>
          <span className="form__error">Что-то пошло не так...</span>
        </div>
        <button type="submit" className="form__button">{props.button}</button>
      </form>
      <div className="form__bottom">
        <p className="form__text">{props.register}</p>
        <Link className="form__signin" to="/signin">{props.link}</Link>
      </div>
    </main>
  ); 
}

export default Form;