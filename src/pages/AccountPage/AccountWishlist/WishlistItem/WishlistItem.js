import example from './example.png';

import './wishlistItem.scss';

const WishlistItem = () => {
    return ( 
        <tr className="wishlist-item">
            <td className="wishlist-item__data">
                <img src={example} alt="" className="wishlist-item__data-img" />
            </td>
            <td className="wishlist-item__data">
                <p className="wishlist-item__data-price">$8.80</p>
            </td>
            <td className="wishlist-item__data">
                <button className="wishlist-item__data-btn main-btn">Add to cart</button>
            </td>
        </tr>
     );
}
 
export default WishlistItem;