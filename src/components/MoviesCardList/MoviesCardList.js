import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import React from 'react';

function MoviesCardList(props) {

  const cards = props.cards;
  const [maxCards, setMaxCards] = React.useState(0);
  const [hideButton, setHideButton] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth > 1270) {
      setMaxCards(12);
    }
    else if (window.innerWidth < 1270 && window.innerWidth > 765) {
      setMaxCards(8)  
    }  
    else if (window.innerWidth < 765) {
      setMaxCards(5)  
    }
  }, [window.innerWidth]);

  function handleClickButton () {
    if (window.innerWidth > 1270) {
      setMaxCards(maxCards + 3);
    }
    else if (window.innerWidth < 1270) {
      setMaxCards(maxCards + 2);
    }
  }

  return (
    <section className="movies-card-list">
      <ul className={`movies-card-list__elements ${props.savedButton ? "movies-card-list__elements_saved-movies" : ""}`}> 
          {cards.length === 0 ? <p>Ничего не найдено</p> :
            cards.map((card, index) => ((index < maxCards) ? <MoviesCard card={card} key={card.id} savedButton={props.savedButton}/> : <></>))
          }
      </ul>
      {cards.length === 0 || props.savedButton === true ? <></> : <button className="movies-card-list__button" onClick={handleClickButton}>Еще</button>}
    </section>
  ); 
}

export default MoviesCardList;