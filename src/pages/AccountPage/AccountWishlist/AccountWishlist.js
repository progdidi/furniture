import './accountWishlist.scss';

//components
import WishlistItem from './WishlistItem/WishlistItem';

const AccountWishlist = ({id="wishlist"}) => {
    return ( 
        <div className="account-wishlist">
            <h4 className="account-wishlist__title account__title">Your Wishlist</h4>

            <table className="account-wishlist__table">
                <tr>
                    <th width="40px"></th>
                    <th className="account-wishlist__table-header" width="30%">Product</th>
                    <th className="account-wishlist__table-header">Price</th>
                    <th className="account-wishlist__table-header" width="20%">Action</th>
                </tr>

                <WishlistItem/>
                <WishlistItem/>
                <WishlistItem/>
            </table>
        </div>
     );
}
 
export default AccountWishlist;