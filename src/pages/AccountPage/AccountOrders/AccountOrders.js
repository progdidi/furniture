import './accountOrders.scss';
import { orders } from '../../../helpers/orders/orders';
import OrderItem from './OrderItem/OrderItem';

const AccountOrders = ({id="orders"}) => {
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

                {orders.map((order) => {
                    return (
                        <OrderItem
                        numberID={order.numberID}
                        dates={order.dates}
                        status={order.status}
                        price={order.price}
                        key={order.id}
                        />
                    );
                })}

            </table>
        </div>
     );
}
 
export default AccountOrders;