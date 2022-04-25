import logo from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import './Form.css';
import React from 'react';

function Form(props) {
  const path = useLocation().pathname;

  return (
    <main className="form">
      <Link to="/"><img src={logo} alt="Logo" className="form__logo"/></Link>
      <h1 className="form__hello">{props.hello}</h1>
      <form className="form__form" onSubmit={props.handleSubmit} noValidate>
        <div>
          {props.children}
          <label htmlFor="email" className="form__header">E-mail</label>
          <input type="email" disabled={props.blockForm} className="form__input" id="login" name="login" required onChange={props.handleChange}/>
          {props.errors.login ? <span className="form__error">{props.errors.login}</span> : <></>}
          <label htmlFor="password" className="form__header">Пароль</label>
          <input type="password" disabled={props.blockForm} className={`form__input ${props.registerError? "form__input_error" : "" }`} id="password" name="password" required onChange={props.handleChange}/>
          {props.registerError !== "" ? <span className="form__error">{props.registerError}</span> : <></>}
        </div>
        {path === "/register" ? <button type="submit" className={`form__button ${!props.isValid || (props.errors.name !== (undefined||"") && props.errors.login !== (undefined||"")) ? "form__button_disabled" : "form__button_active"}`} disabled={!props.isValid || (props.errors.name !== (undefined||"") && props.errors.login !== (undefined||""))}>{props.button}</button> :
        <button type="submit" className={`form__button ${props.blockForm || !props.isValid || props.errors.login !== (undefined||"") ? "form__button_disabled" : "form__button_active"}`} disabled={props.blockForm || !props.isValid || props.errors.login !== (undefined||"")}>{props.button}</button>}
      </form>
      <div className="form__bottom">
        <p className="form__text">{props.register}</p>
        <Link className="form__signin" to={props.redirect}>{props.link}</Link>
      </div>
    </main>
  ); 
}

export default Form;