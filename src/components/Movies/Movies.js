import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import {temp_all_movies} from '../../utils/const.js';

function Movies() {
  return (
    <main className="content">
      <SearchForm/>
      <MoviesCardList cards={temp_all_movies} savedButton={false}/>
    </main>
  ); 
}

export default Movies;
