import './accountOrders.scss';
import OrderItem from './OrderItem/OrderItem';

const AccountOrders = () => {
    return ( 
        <div className="account-orders">
            <h5 className="account-orders__title account__title">Orders History</h5>

            <table className="account-orders__table">
                <tr >
                    <th className="account-orders__table-header">Number ID</th>
                    <th className="account-orders__table-header">Dates</th>
                    <th className="account-orders__table-header">Status</th>
                    <th className="account-orders__table-header">Price</th>
                </tr>

                <OrderItem/>
                <OrderItem/>
                <OrderItem/>
                <OrderItem/>
                <OrderItem/>
            </table>
        </div>
     );
}
 
export default AccountOrders;