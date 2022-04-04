import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader.js';

function MoviesCardList(props) {

  const cards = props.cards;

  const path = useLocation().pathname;

  const [maxCards, setMaxCards] = React.useState(0);

  const getWidth = () => window.innerWidth 
    || document.documentElement.clientWidth 
    || document.body.clientWidth;

  function useCurrentWidth() {
    // save current window width in the state object
    let [width, setWidth] = React.useState(getWidth());

    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    React.useEffect(() => {
      // timeoutId for debounce mechanism
      let timeoutId = null;
      const resizeListener = () => {
        // prevent execution of previous setTimeout
        clearTimeout(timeoutId);
        // change width from the state object after 150 milliseconds
        timeoutId = setTimeout(() => setWidth(getWidth()), 150);
      };
      // set resize listener
      window.addEventListener('resize', resizeListener);

      // clean up function
      return () => {
        // remove resize listener
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
      {props.unsortedMovies.length === 0 && props.searchedMoviesError === false ? <Preloader/> :
      <ul className={`movies-card-list__elements ${path === '/saved-movies' ? "movies-card-list__elements_saved-movies" : ""}`}>
        {props.searchedMoviesError ? <p>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p> : <></>}
        {props.queryError ? <p>Нужно ввести ключевое слово</p> : <></>}
        {props.queryError === false && props.searchedMoviesError === false && cards.length === 0 ? <p>Ничего не найдено</p> :
          displayedMovies.map(card => 
          <MoviesCard key={card.id} 
            card={card}
            savedMovies={props.savedMovies} 
            onSaveCard={props.onSaveCard}/>)
        }
      </ul>}
      {cards.length > 0 && cards.length > maxCards ? 
        <button className="movies-card-list__button" onClick={handleClickButton}>Еще</button> : <></>}
    </section>
  ); 
}

export default MoviesCardList;