//styles
import './header.scss';

//images
import search from './images/search.svg';
import user from './images/user.svg';
import basket from './images/basket.svg';


const Header = () => {
    return ( 
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a href="#" className="logo">Furniture</a>

                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__list-item"><a href="" className="menu__list-link">Home</a></li>
                            <li className="menu__list-item"><a href="" className="menu__list-link">Shop</a></li>
                            <li className="menu__list-item"><a href="" className="menu__list-link">Product</a></li>
                            <li className="menu__list-item"><a href="" className="menu__list-link">Contact Us</a></li>
                        </ul>
                    </nav>

                    <div className="header__buttons">
                        <button className="header__btn">
                            <img src={search} alt="" className="header__btn-img" />
                        </button>
                        <button className="header__btn">
                            <img src={user} alt="" className="header__btn-img" />
                        </button>
                        <button className="header__btn">
                            <img src={basket} alt="" className="header__btn-img" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;