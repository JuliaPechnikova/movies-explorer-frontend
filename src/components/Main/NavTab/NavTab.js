import './NavTab.css';

function NavTab() {
  return (
    <nav className="nav-tab">
      <button className="nav-tab__button">О проекте</button>
      <button className="nav-tab__button">Технологии</button>
      <button className="nav-tab__button">Студент</button>
    </nav>
  ); 
}

export default NavTab;