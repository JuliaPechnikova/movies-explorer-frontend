import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import React from 'react';

function Movies(props) {

  const [queryError, setQueryError] = React.useState(false);

  return (
    <main className="content content__movies_width">
      <SearchForm
        cards={props.unsortedMovies}
        onUpdateSearch={props.onUpdateSearch}
        setQueryError={setQueryError}/>
      <MoviesCardList 
        cards={props.searchedMovies}
        searchedMoviesError={props.searchedMoviesError}
        unsortedMovies={props.unsortedMovies}
        queryError={queryError}
        savedMovies={props.savedMovies}
        onSaveCard={props.onSaveCard}
        preloader={props.preloader}
      />
    </main>
  ); 
}

export default Movies;
