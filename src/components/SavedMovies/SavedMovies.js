import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import React from 'react';

function SavedMovies(props) {

  const [queryError, setQueryError] = React.useState(false);

  return (
    <main className="content content__movies_width">
      <SearchForm
        cards={props.savedMovies}
        onUpdateSearch={props.onUpdateSearch}
        setQueryError={setQueryError}/>
      <MoviesCardList
        cards={props.searchedMovies}
        searchedMoviesError={props.searchedMoviesError}
        unsortedMovies={props.unsortedMovies}
        queryError={queryError}
        savedMovies={props.savedMovies}
        onDeleteCard={props.onDeleteCard}
      />
    </main>
  ); 
}

export default SavedMovies;
