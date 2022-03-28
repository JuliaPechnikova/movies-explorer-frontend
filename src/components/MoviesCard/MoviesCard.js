import './MoviesCard.css';
import saved from '../../images/save-on.svg';
import unsaved from '../../images/save-off.svg';
import deletesaved from '../../images/delete-save.svg';
import durationToHours from '../../utils/MinsToHours';
import { Link } from 'react-router-dom';

function MoviesCard(props) {
  const card = props.card;

  console.log(card.trailerLink === null, card.nameRU)



  return (
    <section className="movies-card">
      <div className="movies-card__header">
        <div className="movies-card__container">
          <h2 className="movies-card__film-name">{card.nameRU}</h2>
          <p className="movies-card__film-time">{durationToHours(card.duration)}</p>
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
      <a target="_blank" rel="noreferrer" href={card.trailerLink}>
        <img className="movies-card__image" src={`https://api.nomoreparties.co/${card.image.url}`} alt={card.image.name} />
      </a>
    </section>
  ); 
}

export default MoviesCard;