import { NavLink } from 'react-router-dom';
import { useState } from 'react';
//styles
import './header.scss';

//images
import search from './images/search.svg';
import user from './images/user.svg';
import basket from './images/basket.svg';

//components
import SignUpPopup from '../modals/SignUpPopup/SignUpPopup';
import CartMenu from './CartMenu/CartMenu';


const Header = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [showCartMenu, setShowCartMenu] = useState(false);

    return ( 
        <>
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <NavLink to="/" className="logo">Furniture</NavLink>

                    <nav className="menu">
                        <ul className={showMobileMenu ? "menu__list active" : "menu__list"}>
                            <li className="menu__list-item"><NavLink to="/" className="menu__list-link">Home</NavLink></li>
                            <li className="menu__list-item"><NavLink to="/shop" className="menu__list-link">Shop</NavLink></li>
                            <li className="menu__list-item"><NavLink to="/product" className="menu__list-link">Product</NavLink></li>
                            <li className="menu__list-item"><NavLink to="/contacts" className="menu__list-link">Contact us</NavLink></li>
                        </ul>
                    </nav>

                    <div className="header__buttons">
                        <button className="header__btn">
                            <img src={search} alt="" className="header__btn-img" />
                        </button>
                        <button className="header__btn" onClick={() => setShowSignup(!showSignup)}>
                            <img src={user} alt="" className="header__btn-img" />
                        </button>
                        <button className="header__btn" onClick={() => setShowCartMenu(!showCartMenu)}>
                            <img src={basket} alt="" className="header__btn-img" />
                        </button>
                    </div>

                    <button className="menu-btn" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                
            </div>
        </header>
        <SignUpPopup showSignUp={showSignup}/>
        <CartMenu showCartMenu={showCartMenu}/>
        </>
     );
}
 
export default Header;