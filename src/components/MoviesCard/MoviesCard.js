import './MoviesCard.css';
import saved from '../../images/save-on.svg';
import unsaved from '../../images/save-off.svg';
import deletesaved from '../../images/delete-save.svg';

function MoviesCard(props) {
  const card = props.card;

  return (
    <section className="movies-card">
      <div className="movies-card__header">
        <div className="movies-card__container">
          <h2 className="movies-card__film-name">{card.name}</h2>
          <p className="movies-card__film-time">{card.time}</p>
        </div>
        {props.savedButton ? 
          (<button className="movies-card__button">
            <img src={deletesaved} alt="Delete"/>
          </button>) :
          (<button className="movies-card__button">
            {card.saved ? <img src={saved} alt="Save"/> : <img src={unsaved} alt="Unsaved"/>}
          </button>)
        }
      </div>
      <img className="movies-card__image" src={card.link} alt={card.name} />
    </section>
  ); 
}

export default MoviesCard;