import { NavLink } from "react-router-dom";
import './cartMenu.scss';

const CartMenu = ({showCartMenu}) => {
    return ( 
        <div className={showCartMenu ? "cart-menu active" : "cart-menu"}>
            <h4 className="cart-menu__title">Cart</h4>

            <table className="cart-menu__table"></table>

            <div className="cart-menu__summary">
                <NavLink to="/cart" className="cart-menu__link main-btn">Checkout</NavLink>
                <NavLink to="/cart" className="cart-menu__link">View Cart</NavLink>
            </div>

            
        </div>
     );
}
 
export default CartMenu;

<NavLink to="/" className="menu__list-link">Home</NavLink>