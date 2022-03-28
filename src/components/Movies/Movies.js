import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import {temp_all_movies} from '../../utils/const.js';

function Movies(props) {
  return (
    <main className="content content__movies_width">
      <SearchForm/>
      <MoviesCardList cards={props.movies} savedButton={false}/>
    </main>
  ); 
}

export default Movies;
