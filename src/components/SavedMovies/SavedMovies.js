import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function SavedMovies(props) {
  return (
    <main className="content content__movies_width">
      <SearchForm/>
      <MoviesCardList cards={props.SavedMovies}/>
    </main>
  ); 
}

export default SavedMovies;
