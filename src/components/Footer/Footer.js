import './Footer.css';

function Footer() {

  return (
    <section className="footer">
      <span className="footer__project-rights">Учебный проект Яндекс.Практикум х BeatFilm.</span>
      <div className="footer__container">
        <p className="footer__copyright">© 2022</p>
        <nav className="footer__links">
            <a className="footer__link" href="./">Яндекс.Практикум</a>
            <a className="footer__link" href="./">Github</a>
            <a className="footer__link" href="./">Facebook</a>
        </nav>
      </div>
    </section>
  ); 
}

export default Footer;