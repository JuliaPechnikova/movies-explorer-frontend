import SearchForm from './SearchForm/SearchForm.js';
import MoviesCardList from './MoviesCardList/MoviesCardList.js';
import Preloader from './Preloader/Preloader.js';

function Movies() {
  return (
    <main className="content">
      <SearchForm/>
      <MoviesCardList/>
      <Preloader/>
    </main>
  ); 
}

export default Movies;
