import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <main className="profile">
      <h1 className="profile__hello">Привет, Виталий!</h1>
      <form>
        <div className="profile__container">
          <label for="name" className="profile__header">Имя</label>
          <input value="Виталий" className="profile__input" id="name" name="name" minLength="2" maxLength="30" required/>
        </div>
        <div className="profile__container">
          <label for="email" className="profile__header">E-mail</label>
          <input type="email" value="pochta@yandex.ru" className="profile__input" id="email" name="email" required/>
        </div>
        <button type="submit" className="profile__button">Редактировать</button>
      </form>
      <Link className="profile__exit" to="/">Выйти из аккаунта</Link>
    </main>
  ); 
}

export default Profile;