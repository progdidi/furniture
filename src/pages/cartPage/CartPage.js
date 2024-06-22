import './cartPage.scss';
import { useState } from 'react';

//components
import OrderDetails from './orderDetails/OrderDetails';
import OrderCheckout from './orderCheckout/OrderCheckout';
import OrderComplete from './orderComplete/OrderComplete';
//tabs
import TabContent from '../../components/tabsNavigation/tabContent/TabContent';
import TabNavItem from '../../components/tabsNavigation/tabNavItem/TabNavItem';


const CartPage = () => {
    const [activeTab, setActiveTab] = useState("order");

    return ( 
        <>

        <section className="cart">
            <div className="container">
                    <h3 className="cart__title">Cart</h3>

                    <div className="cart__buttons">
                        <div className="cart__btn">
                            <span>1</span>
                            <TabNavItem title="Shopping cart" id="order" activeTab={activeTab} setActiveTab={setActiveTab} tabClass="cart__btn-item"></TabNavItem>
                        </div>

                        <div className="cart__btn">
                            <span>2</span>
                            <TabNavItem title="Checkout details" id="checkout" activeTab={activeTab} setActiveTab={setActiveTab} tabClass="cart__btn-item"/>

                        </div>

                        <div className="cart__btn">
                            <span>3</span>
                            <TabNavItem title=" Order complete" id="complete" activeTab={activeTab} setActiveTab={setActiveTab} tabClass="cart__btn-item"/>
                        </div>
                        

                        
                        


                    </div>

                    <div className="cart__tabs">
                        <TabContent id="order" activeTab={activeTab}>
                            <OrderDetails/>
                        </TabContent>

                        <TabContent id="checkout" activeTab={activeTab}>
                            <OrderCheckout/>
                        </TabContent>

                        <TabContent id="complete" activeTab={activeTab}>
                            <OrderComplete/>
                        </TabContent>

                    </div>
            </div>
        </section>
        
        </>
     );
}
 
export default CartPage;