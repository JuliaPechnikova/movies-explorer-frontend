import './MoviesCard.css';
import saved from '../../images/save-on.svg';
import unsaved from '../../images/save-off.svg';
import deletesaved from '../../images/delete-save.svg';
import durationToHours from '../../utils/MinsToHours';
import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
  const card = props.card;
  const savedMovies = props.savedMovies;

  const isSaved = savedMovies.some(id => id.movieId === card.id);

  const path = useLocation().pathname;

  function handleClick() {
    props.onSaveCard(card);
  }

  return (
    <li className="movies-card" >
      <div className="movies-card__header">
        <div className="movies-card__container">
          <h2 className="movies-card__film-name">{card.nameRU}</h2>
          <p className="movies-card__film-time">{durationToHours(card.duration)}</p>
        </div>
        {path === '/saved-movies' &&
          (<button className="movies-card__button">
            <img src={deletesaved} alt="Delete"/>
          </button>)}
        {path === '/movies' &&
          (<button className="movies-card__button" onClick={handleClick}>
            {isSaved ? <img src={saved} alt="Save"/> : <img src={unsaved} alt="Unsaved"/>}
          </button>)
        }
      </div>
      <a target="_blank" rel="noreferrer" href={card.trailerLink}>
        <img className="movies-card__image" src={`https://api.nomoreparties.co/${card.image.url}`} alt={card.image.name} />
      </a>
    </li>
  ); 
}

export default MoviesCard;