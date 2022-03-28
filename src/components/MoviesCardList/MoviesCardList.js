import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList(props) {
  const cards = props.cards;
  return (
    <section className="movies-card-list">
      <ul className={`movies-card-list__elements ${props.savedButton ? "movies-card-list__elements_saved-movies" : ""}`}> 
          {cards.map(card => (
            <MoviesCard card={card} key={card._id} savedButton={props.savedButton}/>
          ))}
      </ul>
      <button className={`movies-card-list__button ${props.savedButton ? "movies-card-list__button_saved-movies" : ""}`}>Еще</button>
    </section>
  ); 
}

export default MoviesCardList;