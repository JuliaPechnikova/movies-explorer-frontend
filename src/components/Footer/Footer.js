import './Footer.css';

function Footer() {

  return (
    <footer className="footer">
      <span className="footer__project-rights">Учебный проект Яндекс.Практикум х BeatFilm.</span>
      <div className="footer__container">
        <p className="footer__copyright">© 2022</p>
        <nav className="footer__links">
            <a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
            <a className="footer__link" href="https://github.com">Github</a>
            <a className="footer__link" href="https://facebook.com">Facebook</a>
        </nav>
      </div>
    </footer>
  ); 
}

export default Footer;