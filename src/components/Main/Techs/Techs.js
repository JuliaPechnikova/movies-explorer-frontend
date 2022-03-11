import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__header content__header">Технологии</h2>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__peragraph">На курсе веб-разработки мы освоили технологии, 
        которые применили в дипломном проекте.</p>
      <nav className="nav-tab">
        <button className="nav-tab__button nav-tab__button_techs">HTML</button>
        <button className="nav-tab__button nav-tab__button_techs">CSS</button>
        <button className="nav-tab__button nav-tab__button_techs">JS</button>
        <button className="nav-tab__button nav-tab__button_techs">React</button>
        <button className="nav-tab__button nav-tab__button_techs">Git</button>
        <button className="nav-tab__button nav-tab__button_techs">Express.js</button>
        <button className="nav-tab__button nav-tab__button_techs">mongoDB</button>
      </nav>
    </section>
  ); 
}

export default Techs;