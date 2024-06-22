import './orderItem.scss';

const OrderItem = ({number, data, status, summ}) => {
    return ( 
        <>
            <tr className="order-item">
                <th className="account-orders__table-data">#3456_768</th>
                <th className="account-orders__table-data">October 11, 2023</th>
                <th className="account-orders__table-data">Delivered</th>
                <th className="account-orders__table-data">$1234.00</th>
            </tr>

            <div className="order-item__mobile">
                <ul className="order-item__header">
                    <li className="order-item__header-item">Number ID</li>
                    <li className="order-item__header-item">Dates</li>
                    <li className="order-item__header-item">Status</li>
                    <li className="order-item__header-item">Price</li>
                </ul>

                <ul className="order-item__data">
                    <li className="order-item__data-item">#3456_768</li>
                    <li className="order-item__data-item">October 11, 2023</li>
                    <li className="order-item__data-item">Delivered</li>
                    <li className="order-item__data-item">$1234.00</li>
                </ul>
            </div>
        </>
        

        
     );
}
 
export default OrderItem;