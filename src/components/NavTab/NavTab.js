import './NavTab.css';

function NavTab() {
  return (
    <nav className="nav-tab">
      <a href="#aboutproject" className="nav-tab__button nav-tab__button_promo">О проекте</a>
      <a href="#techs" className="nav-tab__button nav-tab__button_promo">Технологии</a>
      <a href="#aboutme" className="nav-tab__button nav-tab__button_promo">Студент</a>
    </nav>
  ); 
}

export default NavTab;