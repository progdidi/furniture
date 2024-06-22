import './accountAddress.scss';
import editImg from './edit.svg';

const AccountAddress = () => {
    return ( 
        <div className="account-address">
            <h5 className="account-address__title account__title">Address</h5>
            <div className="account-address__inner">
                <div className="account-address__item">
                    <h6 className="account-address__item-title">Billing Address</h6>
                    <p className="account-address__item-text">Sofia Havertz</p>
                    <p className="account-address__item-text">(+1) 234 567 890</p>
                    <p className="account-address__item-text">345 Long Island, NewYork, United States</p>
                    <button className="account-address__item-btn">
                        <img src={editImg} alt="" className="account-address__item-img" />
                        Edit
                    </button>
                </div>
                <div className="account-address__item">
                    <h6 className="account-address__item-title">Shipping Address</h6>
                    <p className="account-address__item-text">Sofia Havertz</p>
                    <p className="account-address__item-text">(+1) 234 567 890</p>
                    <p className="account-address__item-text">345 Long Island, NewYork, United States</p>
                    <button className="account-address__item-btn">
                        <img src={editImg} alt="" className="account-address__item-img" />
                        Edit
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default AccountAddress;