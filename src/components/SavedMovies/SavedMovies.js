import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import {temp_saved_movies} from '../../utils/const.js';

function SavedMovies() {
  return (
    <main className="content">
      <SearchForm/>
      <MoviesCardList cards={temp_saved_movies} savedButton={true}/>
    </main>
  ); 
}

export default SavedMovies;
