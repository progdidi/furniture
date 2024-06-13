import './cartPage.scss';

//components
import CartItem from './cartItem/CartItem';

const CartPage = () => {
    return ( 
        <>

        <section className="cart">
            <div className="container">
                    <h3 className="cart__title">Cart</h3>

                    <div className="cart__buttons">
                        <button className="cart__btn order active">
                            <span className="cart__btn-num">1</span>
                            Shopping cart
                        </button>
                        <button className="cart__btn checkout">
                            <span className="cart__btn-num">2</span>
                            Checkout details
                        </button>
                        <button className="cart__btn complete">
                            <span className="cart__btn-num">3</span>
                            Order complete
                        </button>
                    </div>

                    <div className="cart__tabs">
                        <div className="cart-tab order">
                            <div className="order-details">
                                <table className="order-table">
                                    <tr className="order-table__header">
                                        <th className="order-table__product" width="50%">Product</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Subtotal</th>
                                    </tr>

                                    <CartItem/>
                                    <CartItem/>
                                    <CartItem/>
                                </table>

                                <form action="" className="order-summary">
                                    <h4 className="order-summary__title">Cart summary</h4>
                                    <fieldset className="order-summary__shipping">
                                        <label htmlFor="" className="order-summary__shipping-label">
                                            <input type="radio" className="order-summary__shipping-input" />Free shipping  $0.00
                                        </label>
                                        <label htmlFor="" className="order-summary__shipping-label">
                                            <input type="radio" className="order-summary__shipping-input" />Express shipping +$15.00
                                        </label>
                                        <label htmlFor="" className="order-summary__shipping-label">
                                            <input type="radio" className="order-summary__shipping-input" />Pick Up %21.00
                                        </label>
                                    </fieldset>

                                    <div className="order-sum">
                                        <div className="order-sum__item">
                                            <p className="order-sum__item-text">Subtotal</p>
                                            <p className="order-sum__item-num">$1234.00</p>
                                        </div>
                                        <div className="order-sum__item">
                                            <p className="order-sum__item-text">Total</p>
                                            <p className="order-sum__item-num">$1345.00</p>
                                        </div>
                                    </div>

                                    <button className="order-summary__btn main-btn">Checkout</button>
                                  
                                </form>
                            </div>

                            <div className="order-caupon">
                                <h5 className="order-caupon__title">Have a coupon?</h5>
                                <p className="order-caupon__text">Add your code for an instant cart discount</p>
                                <form action="" className="order-caupon__form">
                                    <input type="text" className="order-caupon__form-input" placeholder='Coupon Code' />
                                    <button type="submit" calss="order-caupon__form-btn">Apply</button>
                                </form>
                            </div>
                        </div>


                        <div className="cart-tab checkout"></div>
                        <div className="cart-tab complete"></div>
                    </div>
            </div>
        </section>
        
        </>
     );
}
 
export default CartPage;