import example from './example.png';
import deleteImg from './delete.svg';

import './wishlistItem.scss';

const WishlistItem = () => {
    return ( 
        <tr className="wishlist-item">
            <td>
                <button className="wishlist-item__delete-btn">
                    <img src={deleteImg} alt="" className="wishlist-item__delete-img" />
                </button>
            </td>
            <td className="wishlist-item__data" >
                <div className="product-item">
                    <img src={example} alt="" className="product-item__img" />
                    <div className="product-item__info">
                        <h6 className="product-item__info-title">Tray Table</h6>
                        <p className="product-item__info-text">Color: Black</p>
                    </div>
                </div>
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