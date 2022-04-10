import './SearchForm.css';
import findicon from '../../images/search-find.svg';
import React from 'react';

function SearchForm(props) {

  const [query, setQuery] = React.useState("");
  const [checkedState, setCheckedState] = React.useState(false);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    if (query === "") {
      props.setQueryError(true);
      props.onUpdateSearch(null);
    }
    else {
      props.setQueryError(false);
      props.onUpdateSearch(query, checkedState);
    }
  }

  function handleSearchChange(e) {
    setQuery(e.target.value);
  }

  function handleSearchChangeShort(e) {
    if (!checkedState) {
      setCheckedState(true);
    }
    else {
      setCheckedState(false);
    }
  }


  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <div className="search-form__container">
          <label htmlFor="search" className="search-form__search"></label>
          <input type="search" id="search" placeholder="Фильм" className="search-form__input" onChange={handleSearchChange}/>
        </div>
        <div className="search-form__container">
          <div className="search-form__container">
            <button type="submit" className="search-form__submit-button"><img src={findicon} alt="Find"/></button>
            <span className="search-form__stroke"></span>
          </div>
          <div className="search-form__tumb-container">
            <label className="search-form__tumb">
              <input type="checkbox" id="tumb" className="search-form__tumb-inner" checked={checkedState} onChange={handleSearchChangeShort}/>
              <span className="search-form__tumb-slider"></span>
            </label>
            <label htmlFor="tumb" className="search-form__tumb-description">Короткометражки</label>
          </div>
        </div>
      </form>
    </section>
  ); 
}

export default SearchForm;