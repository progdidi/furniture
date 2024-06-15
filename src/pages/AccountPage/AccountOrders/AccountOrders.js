import './accountOrders.scss';

const AccountOrders = () => {
    return ( 
        <div className="account-orders">
            <h5 className="account-orders__title account__title">Orders History</h5>

            <table className="account-orders__table">
                <tr>
                    <th className="account-orders__table-header">Number ID</th>
                    <th className="account-orders__table-header">Dates</th>
                    <th className="account-orders__table-header">Status</th>
                    <th className="account-orders__table-header">Price</th>
                </tr>

                <tr>
                    <th className="account-orders__table-data">#3456_768</th>
                    <th className="account-orders__table-data">October 11, 2023</th>
                    <th className="account-orders__table-data">Delivered</th>
                    <th className="account-orders__table-data">$1234.00</th>
                </tr>

                <tr>
                    <th className="account-orders__table-data">#3456_768</th>
                    <th className="account-orders__table-data">October 11, 2023</th>
                    <th className="account-orders__table-data">Delivered</th>
                    <th className="account-orders__table-data">$1234.00</th>
                </tr>

                <tr>
                    <th className="account-orders__table-data">#3456_768</th>
                    <th className="account-orders__table-data">October 11, 2023</th>
                    <th className="account-orders__table-data">Delivered</th>
                    <th className="account-orders__table-data">$1234.00</th>
                </tr>
            </table>
        </div>
     );
}
 
export default AccountOrders;