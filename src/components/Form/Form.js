import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './Form.css';
import React from 'react';
import validator from 'validator';

function Form(props) {

  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    if (props.name !== "") {
      props.onUpdateUserAuth({
        password,
        login,
        name: props.name
      });
    }
    else {
      props.onUpdateUserAuth({
        password,
        login
      });
    }
  }

  function handleLoginChange(e) {
    setLogin(e.target.value)
    if (!validator.isEmail(e.target.value)) {
      setError(true);
    }
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <main className="form">
      <Link to="/"><img src={logo} alt="Logo" className="form__logo"/></Link>
      <h1 className="form__hello">{props.hello}</h1>
      <form className="form__form" onSubmit={handleSubmit}>
        <div>
          {props.children}
          <label htmlFor="email" className="form__header">E-mail</label>
          <input type="email" value={login} className="form__input" id="email" name="email" required onChange={handleLoginChange}/>
          {error ? <span className="form__error">E-mail неверный</span> : <></>}
          <label htmlFor="password" className="form__header">Пароль</label>
          <input type="password" value={password} className="form__input form__error-input" id="password" name="email" required onChange={handlePasswordChange}/>
          {props.registerError ? <span className="form__error">Что-то пошло не так...</span> : <></>}
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