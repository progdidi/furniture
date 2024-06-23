import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
//styles
import './header.scss';

//images
import user from './images/user.svg';
import basket from './images/basket.svg';

//components
import SignUp from '../modals/SignUp/SignUp';
import Modal from '../modals/Modal';
import SearchInput from './searchInput/SearchInput';


const Header = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [menuFixed, setMenuFixed] = useState('header');

    const fixingMenu = () => {
        if(window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 200 ? setMenuFixed('header fixed') : setMenuFixed('header');
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', fixingMenu);
    })

    return ( 
        <>
        <header className={menuFixed}>
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
                        <SearchInput/>
                        <button className="header__btn" onClick={() => setShowSignup(!showSignup)}>
                            <img src={user} alt="" className="header__btn-img" />
                        </button>
                        <button className="header__btn" onClick={() => setShowModal(!showModal)}>
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
        <SignUp showSignUp={showSignup}/>
        <Modal showModal={showModal} setShowModal={setShowModal} activeModal="cart"/>
        </>
     );
}
 
export default Header;