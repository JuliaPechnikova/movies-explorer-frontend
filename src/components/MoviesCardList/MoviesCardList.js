import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import React from 'react';

function MoviesCardList(props) {

  const cards = props.cards;
  const [maxCards, setMaxCards] = React.useState(0);
  const [hideButton, setHideButton] = React.useState(false);
  const [windowSize, setWindowSize] = React.useState(undefined);

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

  return (
    <section className="movies-card-list">
      <ul className={`movies-card-list__elements ${props.savedButton ? "movies-card-list__elements_saved-movies" : ""}`}> 
          {cards.length === 0 ? <p>Ничего не найдено</p> :
            cards.map((card, index) => ((index < maxCards) ? <MoviesCard card={card} key={card.id} savedButton={props.savedButton}/> : <></>))
          }
      </ul>
      {cards.length > 0 && cards.length > maxCards ? <button className="movies-card-list__button" onClick={handleClickButton}>Еще</button> : <></>}
    </section>
  ); 
}

export default MoviesCardList;