import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader.js';

function MoviesCardList(props) {

  let cards = props.cards;

  const path = useLocation().pathname;

  if (path === "/saved-movies") {
    cards = cards.map(c => {
      const [cards_filtered] = props.savedMovies.filter(m => 
        c.id === m.movieId
      )
      return cards_filtered}
    ).filter(card => card !== undefined);
  }

  const [maxCards, setMaxCards] = React.useState(0);

  const getWidth = () => window.innerWidth 
    || document.documentElement.clientWidth 
    || document.body.clientWidth;

  function useCurrentWidth() {
    let [width, setWidth] = React.useState(getWidth());
    React.useEffect(() => {
      let timeoutId = null;
      const resizeListener = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => setWidth(getWidth()), 150);
      };
      window.addEventListener('resize', resizeListener);
      return () => {
        window.removeEventListener('resize', resizeListener);
      }
    }, [])

    return width;
  }

  let width = useCurrentWidth();

  React.useEffect(() => {
    if (width > 1270) {
      setMaxCards(12);
    }
    else if (width < 1270 && width > 765) {
      setMaxCards(8)  
    }  
    else if (width < 765) {
      setMaxCards(5)  
    }
  }, [width]);

  function handleClickButton () {
    if (width > 1270) {
      setMaxCards(maxCards + 3);
    }
    else if (width < 1270) {
      setMaxCards(maxCards + 2);
    }
  }

  const displayedMovies = cards.filter((card, index) => (index < maxCards));

  return (
    <section className="movies-card-list">
      {props.preloader === true && props.searchedMoviesError === false ? <Preloader/> :
      <ul className={`movies-card-list__elements ${path === '/saved-movies' ? "movies-card-list__elements_saved-movies" : ""} ${props.searchedMoviesError || cards.length === 0 ? "movies-card-list__elements_error" : ""}`}>
        {props.searchedMoviesError ? <p className="movies-card-list__error-message">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p> : <></>}
        {props.queryError && !props.searchedMoviesError ? <p className="movies-card-list__error-message">Нужно ввести ключевое слово</p> : <></>}
        {props.queryError === false && props.searchedMoviesError === false && cards.length === 0 ? <p className="movies-card-list__error-message">Ничего не найдено</p> :
        props.searchedMoviesError === false ?
          displayedMovies.map(card => 
          <MoviesCard key={card.id || card._id} 
            card={card}
            savedMovies={props.savedMovies} 
            onSaveCard={props.onSaveCard}
            onDeleteCard={props.onDeleteCard}/>) : <></>
        }
      </ul>}
      {cards.length > 0 && cards.length > maxCards && props.searchedMoviesError === false ? 
        <button className="movies-card-list__button" onClick={handleClickButton}>Еще</button> : <></>}
    </section>
  ); 
}

export default MoviesCardList;