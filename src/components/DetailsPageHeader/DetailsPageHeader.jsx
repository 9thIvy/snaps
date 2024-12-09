import '/src/components/Header/Header.scss';
function DetailsPageHeader(){
    return(
        <header className='header'>
            <h1 className="header__title">Snaps</h1>

            <div className='header__home'>
            <object className="arrow-icon" type="image/svg+xml" data="/src/assets/images/icons/Arrow.svg"></object>

            <h2>Home</h2>
            </div>
        </header>

    )
}
export default DetailsPageHeader;