import '/src/components/Footer/Footer.scss';

function Footer(){
    return(
        <section className='footer'>
            
            <div className="footer__meta">
            <h1 className='footer__title'>Snaps</h1>
                <div className='footer__group'>
                    <a>For photographers</a>
                    <a>Hire talent</a>
                    <a>Inspiration</a>
                </div>

                <div className='footer__group'>
                    <a>About</a>
                    <a>Careers</a>
                    <a>Support</a>
                </div>


                <div className='footer__media-icons'>
                    <a href='https://diasporafoundation.org/'>
                        <img src='/src/assets/images/icons/Facebook.svg'></img>
                    </a>
                    <a href='https://joinmastodon.org/'>
                        <img src='/src/assets/images/icons/twitter.svg'></img>
                    </a>
                    <a href='https://pixelfed.org/'>
                        <img src='/src/assets/images/icons/Instagram.svg'></img>
                    </a>
                    <a href='https://pinterest.com'>
                        <img src='/src/assets/images/icons/Pinterest.svg'></img>
                    </a>
                </div>
            </div>

        
        <div className='footer__legal'>
            <p>© 2024 Snaps</p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
        </div>
        </section>
    );
}

export default Footer;