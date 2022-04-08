import './Profile.css';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import React from 'react';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <main className="profile">
      <h1 className="profile__hello">{`Привет, ${currentUser.name}!`}</h1>
      <form>
        <div className="profile__container">
          <label htmlFor="name" className="profile__header">Имя</label>
          <input value={name} className="profile__input" id="name" name="name" minLength="2" maxLength="30" required onChange={handleNameChange}/>
        </div>
        <div className="profile__container">
          <label htmlFor="email" className="profile__header">E-mail</label>
          <input type="email" value={currentUser.email} className="profile__input" id="email" name="email" required/>
        </div>
        <button type="submit" className="profile__button">Редактировать</button>
      </form>
      <Link className="profile__exit" to="/" onClick={props.onClick}>Выйти из аккаунта</Link>
    </main>
  ); 
}

export default Profile;