import './Profile.css';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import React from 'react';
import { useFormWithValidation } from '../../utils/Validation.js';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUserProfile({
      name: values.name || currentUser.name,
      login: values.login || currentUser.email,
    });
  }

  React.useEffect(() => {
    resetForm();
    props.setApiSuccess(false);
    props.setApiError(false);
  }, [resetForm]);

  return (
    <main className="profile">
      <h1 className="profile__hello">{`Привет, ${currentUser.name}!`}</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="profile__container">
          <label htmlFor="name" className="profile__header">Имя</label>
          <input className="profile__input" id="name" name="name" minLength="2" maxLength="30" required defaultValue={currentUser.name} onChange={handleChange}/>
        </div>
        {errors.name ? <span className="form__error">{errors.name}</span> : <></>}
        <div className="profile__container">
          <label htmlFor="email" className="profile__header">E-mail</label>
          <input type="email" className="profile__input" id="email" name="login" required defaultValue={currentUser.email} onChange={handleChange}/>
        </div>
        {errors.login ? <span className="form__error">{errors.login}</span> : <></>}
        {props.apiError ? <span className="form__error">Что-то пошло не так...</span> : <></>}
        {props.apiSuccess ? <span className="profile__success">Данные успешно изменены</span> : <></>}
        <button type="submit" className={`profile__button ${!isValid ? "profile__button_disabled" : ""}`} disabled={!isValid}>Редактировать</button>
      </form>
      <Link className="profile__exit" to="/" onClick={props.onClick}>Выйти из аккаунта</Link>
    </main>
  ); 
}

export default Profile;