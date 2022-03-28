import './AboutProject.css';

function AboutProject() {
  return (
    <section id="aboutproject" className="about-project main__content">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__paragraphs">
        <div>
          <h3 className="about-project__paragraph-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__paragraph">Составление плана, работу над бэкендом, вёрстку, 
            добавление функциональности и финальные доработки.</p>
        </div>
        <div>
          <h3 className="about-project__paragraph-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, 
          которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__diagram">
        <span className="about-project__indicator about-project__indicator_green">1 неделя</span>
        <span className="about-project__indicator about-project__indicator_grey">4 недели</span>
        <span className="about-project__caption">Back-end</span>
        <span className="about-project__caption">Front-end</span>
      </div>
    </section>
  ); 
}

export default AboutProject;