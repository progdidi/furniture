import './accountPage.scss';

import example from './example.png';

//components
import AccountInfo from './AccountInfo/AccountInfo';
import AccountAddress from './AccountAddress/AccountAddress';
import AccountOrders from './AccountOrders/AccountOrders';
import AccountWishlist from './AccountWishlist/AccountWishlist';

const AccountPage = () => {
    return ( 
        <section className="account-page">
            <div className="container">
                <h4 className="account-page__title page__title">My Account</h4>
                <div className="account-page__inner">
                    <div className="account-page__menu">
                        <div className="user-info">
                            <img src={example} alt="" className="user-info__img" />
                            <input type="file" className="user-info__img-btn" />
                            <p className="user-info__name">Sofia Havertz</p>
                        </div>

                        <ul className="account-menu__list">
                        <li className="account-menu__list-item"><button className="account-menu__btn active">Account</button></li>
                            <li className="account-menu__list-item"><button className="account-menu__btn">Address</button></li>
                            <li className="account-menu__list-item"><button className="account-menu__btn">Orders</button></li>
                            <li className="account-menu__list-item"><button className="account-menu__btn">Wishlist</button></li>
                            <li className="account-menu__list-item"><button className="account-menu__btn">Log Out</button></li>
                        </ul>
                       
                    </div>
                    <div className="account-page__info">
                        <AccountInfo/>

                        <AccountAddress/>

                        <AccountOrders/>

                        <AccountWishlist/>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default AccountPage;