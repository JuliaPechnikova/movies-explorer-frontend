import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <a href="./" className="portfolio__list-project">
          <p className="portfolio__list-text">Статичный сайт</p>
          <p className="portfolio__list-link">↗</p>
        </a>
        <a href="./" className="portfolio__list-project">
          <p className="portfolio__list-text">Адаптивный сайт</p>
          <p className="portfolio__list-link">↗</p>
        </a>
        <a href="./" className="portfolio__list-project">
          <p className="portfolio__list-text">Одностраничное приложение</p>
          <p className="portfolio__list-link">↗</p>
        </a>
      </ul>
    </section>
  ); 
}

export default Portfolio;