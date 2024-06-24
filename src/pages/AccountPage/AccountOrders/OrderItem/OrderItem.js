import './orderItem.scss';

const OrderItem = ({numberID, dates, status, price}) => {
    return ( 
        <>
            <tr className="order-item">
                <th className="account-orders__table-data">{numberID}</th>
                <th className="account-orders__table-data">{dates}</th>
                <th className="account-orders__table-data">{status}</th>
                <th className="account-orders__table-data">${price}</th>
            </tr>

            <div className="order-item__mobile">
                <ul className="order-item__header">
                    <li className="order-item__header-item">Number ID</li>
                    <li className="order-item__header-item">Dates</li>
                    <li className="order-item__header-item">Status</li>
                    <li className="order-item__header-item">Price</li>
                </ul>

                <ul className="order-item__data">
                    <li className="order-item__data-item">{numberID}</li>
                    <li className="order-item__data-item">{dates}</li>
                    <li className="order-item__data-item">{status}</li>
                    <li className="order-item__data-item">${price}</li>
                </ul>
            </div>
        </>
        

        
     );
}
 
export default OrderItem;