import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function Movies(props) {
  return (
    <main className="content content__movies_width">
      <SearchForm onUpdateSearch={props.onUpdateSearch} />
      <MoviesCardList cards={props.movies} savedButton={false}/>
    </main>
  ); 
}

export default Movies;
