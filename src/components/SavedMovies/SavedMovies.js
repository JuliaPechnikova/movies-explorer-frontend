import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import React from 'react';

function SavedMovies(props) {

  const [queryError, setQueryError] = React.useState(false);

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
        savedMovies={props.savedMovies}
        queryError={queryError}
        onDeleteCard={props.onDeleteCard}
        preloader={props.preloader}
      />
    </main>
  ); 
}

export default SavedMovies;
