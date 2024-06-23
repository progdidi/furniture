import { NavLink } from "react-router-dom";
import './cartMenu.scss';
import CartItem from "../../../pages/cartPage/cartItem/CartItem";

const CartMenu = ({showCartMenu}) => {
    return ( 
        <div className={showCartMenu ? "cart-menu active" : "cart-menu"}>
            <h4 className="cart-menu__title">Cart</h4>

            <table className="cart-menu__table">
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </table>

            <div className="cart-menu__summary">
                <tr class="summary-subtotal">
                    <td>Subtotal</td>
                    <td>$99.00</td>
                </tr>
                <tr class="summary-total">
                    <td>Total</td>
                    <td>$234.00</td>
                </tr>
                <NavLink to="/cart" className="cart-menu__link main-btn">Checkout</NavLink>
                <NavLink to="/cart" className="cart-menu__link">View Cart</NavLink>
            </div>

            
        </div>
     );
}
 
export default CartMenu;

<NavLink to="/" className="menu__list-link">Home</NavLink>