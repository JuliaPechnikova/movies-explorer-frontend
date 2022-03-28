import './Techs.css';

function Techs() {
  return (
    <section id="techs" className="techs">
      <div className="techs__header-container">
        <h2 className="techs__header content__header">Технологии</h2>
      </div>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, 
        которые применили в дипломном проекте.</p>
      <nav className="nav-tab nav-tab__content_tech">
        <span className="nav-tab__button nav-tab__button_techs">HTML</span>
        <span className="nav-tab__button nav-tab__button_techs">CSS</span>
        <span className="nav-tab__button nav-tab__button_techs">JS</span>
        <span className="nav-tab__button nav-tab__button_techs">React</span>
        <span className="nav-tab__button nav-tab__button_techs">Git</span>
        <span className="nav-tab__button nav-tab__button_techs">Express.js</span>
        <span className="nav-tab__button nav-tab__button_techs">mongoDB</span>
      </nav>
    </section>
  ); 
}

export default Techs;