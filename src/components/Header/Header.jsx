import './Header.scss'

function Header(props) {
  return (
    <header className='header'>
      <h1 className="title">Snaps</h1>
      <button onClick={props.setStatus} className="header__button">Filter</button>
    </header>
  
  )
}
export default Header