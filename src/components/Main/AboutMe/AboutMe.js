import './AboutMe.css';
import avatar from '../../../images/avatar.svg';

function AboutMe() {
  return (
    <section id="aboutme" className="about-me">
      <h2 className="about-me__header">Студент</h2>
      <div className="about-me__profile">
        <div className="about-me__info">
          <p className="about-me__name">Виталий</p>
          <p className="about-me__about">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">Я родился и живу в Саратове, 
            закончил факультет экономики СГУ. У меня есть жена 
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. 
            Недавно начал кодить. С 2015 года работал в компании 
            «СКБ Контур». После того, как прошёл курс по веб-разработке, 
            начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <nav className="about-me__links">
            <a href="./" className="about-me__link">Facebook</a>
            <a href="./" className="about-me__link">Github</a>
          </nav>
        </div>
        <img className="about-me__avatar" src={avatar} alt={avatar}/>
      </div>
    </section>
  ); 
}

export default AboutMe;