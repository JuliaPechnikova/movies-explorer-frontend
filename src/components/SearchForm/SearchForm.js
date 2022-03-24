import './SearchForm.css';
import searchicon from '../../images/search-icon.svg';
import findicon from '../../images/search-find.svg';
import smalltumb from '../../images/searchform-smalltumb.svg';

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <div className="search-form__container">
          <img src={searchicon} alt="Search" className="search-form__search"/>
          <input type="search" placeholder="Фильм" className="search-form__input"/>
        </div>
        <div className="search-form__container">
          <div className="search-form__container">
            <button type="submit" className="search-form__submit-button"><img src={findicon} alt="Find"/></button>
            <span className="search-form__stroke"></span>
          </div>
          <div className="search-form__tumb-container">
            <img src={smalltumb} alt="Tumbler" className="search-form__tumb"/>
            <span className="search-form__tumb-description">Короткометражки</span>
          </div>
        </div>
      </form>
    </section>
  ); 
}

export default SearchForm;