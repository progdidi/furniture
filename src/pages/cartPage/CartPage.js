import './cartPage.scss';

//components
import OrderDetails from './orderDetails/OrderDetails';
import OrderCheckout from './orderCheckout/OrderCheckout';
import OrderComplete from './orderComplete/OrderComplete';


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
                        {/* <div className="cart-tab order">
                            <OrderDetails/>
                        </div> */}


                        <div className="cart-tab checkout">
                            <OrderCheckout/>
                        </div>
                        <div className="cart-tab complete">
                            <OrderComplete/>
                        </div>
                    </div>
            </div>
        </section>
        
        </>
     );
}
 
export default CartPage;