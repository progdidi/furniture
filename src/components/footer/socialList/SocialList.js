import inst from './images/instagram.svg';
import fb from './images/facebook.svg';
import youtube from './images/youtube.svg';

const SocialList = () => {
    return (
        <ul className="social-list">
            <li className="social-list__item"><a href="" className="social-list__link"><img src={inst} alt="" className="social-list__img" /></a></li>
            <li className="social-list__item"><a href="" className="social-list__link"><img src={fb} alt="" className="social-list__img" /></a></li>
            <li className="social-list__item"><a href="" className="social-list__link"><img src={youtube} alt="" className="social-list__img" /></a></li>
        </ul>
    )
}

export default SocialList;