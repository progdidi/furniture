import './accountWishlist.scss';

//components
import WishlistItem from './WishlistItem/WishlistItem';

const AccountWishlist = () => {
    return ( 
        <div className="account-wishlist">
            <h4 className="account-wishlist__title account__title">Your Wishlist</h4>

            <table className="account-wishlist__table">
                <tr>
                    <th className="account-wishlist__table-header">Product</th>
                    <th className="account-wishlist__table-header">Price</th>
                    <th className="account-wishlist__table-header">Action</th>
                </tr>

                <WishlistItem/>
                <WishlistItem/>
                <WishlistItem/>
            </table>
        </div>
     );
}
 
export default AccountWishlist;