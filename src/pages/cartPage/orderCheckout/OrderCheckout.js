import './orderCheckout.scss';

//components
import CartItem from '../cartItem/CartItem';

const OrderCheckout = ({id="checkout"}) => {
    return ( 
        <div className="checkout">
            <div className="checkout__main">
                <form action="" className="checkout-form">
                    <fieldset className="checkout-form__fieldset">
                        <h5 className="checkout-form__title">Contact Infomation</h5>
                        <div className="inline">
                            <label htmlFor="" className="checkout-form__label">fIRST Name<input type="text" className="checkout-form__input" placeholder='First name'/></label>
                            <label htmlFor="" className="checkout-form__label">lAST Name<input type="text" className="checkout-form__input" placeholder='Last name'/></label>
                        </div>
                       
                        <label htmlFor="" className="checkout-form__label">Phone Number<input type="text" className="checkout-form__input" placeholder='Phone number'/></label>
                        <label htmlFor="" className="checkout-form__label">Email address<input type="text" className="checkout-form__input" placeholder='Your Email'/></label>
                    </fieldset>

                    <fieldset className="checkout-form__fieldset">
                        <h5 className="checkout-form__title">Shipping Address</h5>
                        <label htmlFor="" className="checkout-form__label">Street Address *<input type="text" className="checkout-form__input" placeholder='Stress Address'/></label>
                        <label htmlFor="" className="checkout-form__label">Country *<input type="text" className="checkout-form__input" placeholder='Country'/></label>
                        <label htmlFor="" className="checkout-form__label">Town / City *<input type="text" className="checkout-form__input" placeholder='Town / City'/></label>
                        <div className="inline">
                            <label htmlFor="" className="checkout-form__label">State<input type="text" className="checkout-form__input" placeholder='State'/></label>
                            <label htmlFor="" className="checkout-form__label">Zip Code<input type="text" className="checkout-form__input" placeholder='Zip Code'/></label>
                        </div>
                        
                        <label htmlFor="" className="checkout-form__label check"><input type="checkbox" className="checkout-form__input" />Use a different billing address (optional)</label>
                    </fieldset>

                    <fieldset className="checkout-form__fieldset">
                        <h5 className="checkout-form__title">Payment method</h5>
                        <label htmlFor="" className="checkout-form__label radio radio-label active"><input type="radio" className="checkout-form__input" />Pay by Card Credit</label>
                        <label htmlFor="" className="checkout-form__label radio radio-label"><input type="radio" className="checkout-form__input" placeholder=''/>Paypal</label>
                        <label htmlFor="" className="checkout-form__label">Card Number<input type="text" className="checkout-form__input" placeholder='1234 1234 1234' /></label>
                        <div className="inline">
                            <label htmlFor="" className="checkout-form__label">Expiration date<input type="text" className="checkout-form__input" placeholder='MM/YY'/></label>
                            <label htmlFor="" className="checkout-form__label">CVC<input type="text" className="checkout-form__input" placeholder='CVC code'/></label>
                        </div>
                        
                    </fieldset>
                    
                    <button type="submit" class="checkout-form__btn main-btn">Place Order</button>
                    
                </form>
            </div>
            <div className="checkout-summary">
                <h4 className="checkout-summary__title">Order summary</h4>
                <table className="checkout-summary__items">
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </table>

                <div className="checkout-summary__caupon">
                    <input className="checkout-summary__caupon-input"/>
                    <button className="checkout-summary__caupon-btn main-btn">Apply</button>
                    <div className="checkout-summary__caupon-info"><span>JenkateMW</span><span class="sum">-$25.00 [Remove]</span></div>
                </div>

                <div className="checkout-summary__total">
                    <div className="checkout-summary__total-item">
                        <p className="checkout-summary__total-text">Shipping</p>
                        <p className="checkout-summary__total-num">Free</p>
                    </div>
                    <div className="checkout-summary__total-item">
                        <p className="checkout-summary__total-text">Subtotal</p>
                        <p className="checkout-summary__total-num">$99.00</p>
                    </div>
                    <div className="checkout-summary__total-item total">
                        <p className="checkout-summary__total-text">Total</p>
                        <p className="checkout-summary__total-num">$234.00</p>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default OrderCheckout;