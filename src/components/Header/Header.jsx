import './Header.scss'
import { useState } from 'react';

function Header(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () =>{
    setIsClicked(!isClicked);
    props.setStatus();
  }

  return (
    <header className='header'>
      <h1 className="header__title">Snaps</h1>
      <button onClick={handleClick} className={`header__button ${isClicked ? 'clicked': ''}`}>
        Filters
        <object className="filter-icon" type="image/svg+xml" data="/src/assets/images/icons/Filter.svg"></object>
        </button>
    </header>
  
  )
}
export default Header