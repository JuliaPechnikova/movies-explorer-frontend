import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import React from 'react';

function Movies(props) {

  const [queryError, setQueryError] = React.useState(true);

  return (
    <main className="content content__movies_width">
      <SearchForm
        onUpdateSearch={props.onUpdateSearch}
        setQueryError={setQueryError}
        checkedState={props.checkedState}
        query={props.query}/>
      <MoviesCardList 
        cards={props.searchedMovies}
        searchedMoviesError={props.searchedMoviesError}
        queryError={queryError}
        savedMovies={props.savedMovies}
        onSaveCard={props.onSaveCard}
        preloader={props.preloader}
      />
    </main>
  ); 
}

export default Movies;
