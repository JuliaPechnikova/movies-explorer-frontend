import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList(props) {
  const cards = props.cards;
  let maxCards;

  if (window.innerWidth > 1270) {
    maxCards = 12;
  }
  else if (window.innerWidth < 1270 && window.innerWidth > 765) {
    maxCards = 8;
  }  
  else if (window.innerWidth < 765) {
    maxCards = 5;
  }

  return (
    <section className="movies-card-list">
      <ul className={`movies-card-list__elements ${props.savedButton ? "movies-card-list__elements_saved-movies" : ""}`}> 
          {cards.map((card, index) => (
            (index < maxCards) ? <MoviesCard card={card} key={card.id} savedButton={props.savedButton}/> : <></>))
}     </ul>
      <button className={`movies-card-list__button ${props.savedButton ? "movies-card-list__button_saved-movies" : ""}`}>Еще</button>
    </section>
  ); 
}

export default MoviesCardList;