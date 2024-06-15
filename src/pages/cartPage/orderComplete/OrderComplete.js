import './orderComplete.scss';

import example from './example.png';

const OrderComplete = () => {
    return ( 
        <div className="order-complete">
            <h5 className="complete__subtitle">Thank you! 🎉</h5>
            <h4 className="complete__title">Your order has been received</h4>

            <div className="complete__items">
                <div className="complete__item"><img src={example} alt="" className="complete__item-img" /></div>
                <div className="complete__item"><img src={example} alt="" className="complete__item-img" /></div>
                <div className="complete__item"><img src={example} alt="" className="complete__item-img" /></div>
            </div>

            <table className="complete__table">
                <tr className="complete__table-row">
                    <td className="complete__table-item">Order code:</td>
                    <td className="complete__table-info">#0123_45678</td>
                </tr>
                <tr className="complete__table-row">
                    <td className="complete__table-item">Date:</td>
                    <td className="complete__table-info">October 19, 2023</td>
                </tr>
                <tr className="complete__table-row">
                    <td className="complete__table-item">Total:</td>
                    <td className="complete__table-info">$1,345.00</td>
                </tr>
                <tr className="complete__table-row">
                    <td className="complete__table-item">Payment method:</td>
                    <td className="complete__table-info">Credit Card</td>
                </tr>
            </table>

            <a href="" className="complete__link main-btn">Purchase history</a>
        </div>
     );
}
 
export default OrderComplete;