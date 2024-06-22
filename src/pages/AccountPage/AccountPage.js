import './accountPage.scss';
import { useState } from 'react';

import example from './example.png';

//components
import AccountInfo from './AccountInfo/AccountInfo';
import AccountAddress from './AccountAddress/AccountAddress';
import AccountOrders from './AccountOrders/AccountOrders';
import AccountWishlist from './AccountWishlist/AccountWishlist';
import Modal from '../../components/modals/Modal';

//tabs navigation
import TabNavItem from '../../components/tabsNavigation/tabNavItem/TabNavItem';
import TabContent from '../../components/tabsNavigation/tabContent/TabContent';

const AccountPage = () => {

    const [activeTab, setActiveTab] = useState("info");
    const [showModal, setShowModal] = useState(false);


    return ( 
        <section className="account-page">
            <div className="container">
                <h4 className="account-page__title page__title">My Account</h4>
                <div className="account-page__inner">
                    <div className="account-page__menu">
                        <div className="user-info">
                            <img src={example} alt="" className="user-info__img" />
                            <p className="user-info__name">Sofia Havertz</p>
                        </div>

                        <ul className="account-menu__list">
                            <TabNavItem title="Account" id="info" activeTab={activeTab} setActiveTab={setActiveTab} tabClass="account-menu__btn"/>
                            <TabNavItem title="Address" id="address" activeTab={activeTab} setActiveTab={setActiveTab} tabClass="account-menu__btn"/>
                            <TabNavItem title="Orders" id="orders" activeTab={activeTab} setActiveTab={setActiveTab} tabClass="account-menu__btn"/>
                            <TabNavItem title="Wishlist" id="wishlist" activeTab={activeTab} setActiveTab={setActiveTab} tabClass="account-menu__btn"/>
                            <button className="account-menu__btn log-out" onClick={() => setShowModal(true)}>Log Out</button>
                        </ul>

                        <select className="account-menu__select">
                            <option className="account-menu__select-option">Account</option>
                            <option className="account-menu__select-option">Address</option>
                            <option className="account-menu__select-option">Orders</option>
                            <option className="account-menu__select-option">Wishlist</option>
                            <option className="account-menu__select-option">Log Out</option>
                        </select>

                        

                        
                       
                    </div>
                    <div className="account-page__info">
                        <TabContent id="info" activeTab={activeTab}>
                            <AccountInfo/>
                        </TabContent>

                        <TabContent id="address" activeTab={activeTab}>
                            <AccountAddress/> 
                        </TabContent>

                        <TabContent id="orders" activeTab={activeTab}>
                            <AccountOrders/>
                        </TabContent>

                        <TabContent id="wishlist" activeTab={activeTab}>
                            <AccountWishlist/>
                        </TabContent>

                    </div>
                </div>
            </div>

            <Modal showModal={showModal}/>
        </section>
     );
}
 
export default AccountPage;