import './cartItem.scss';

//components
import Counter from '../../../components/counter/Counter';

//images
import example from './example.png';

const CartItem = () => {
    return ( 
        <tr  className="order-table__item">
            <td width="50%">
                <div className="product-item">
                    <img src={example} alt="" className="product-item__img" />
                    <div className="product-item__info">
                        <h6 className="product-item__info-title">Tray Table</h6>
                        <p className="product-item__info-text">Color: Black</p>
                        <button className="product-item__info-btn">Remove</button>
                    </div>
                </div>
            </td>
            <td>
                <Counter/>
            </td>
            <td class="total">$19.00</td>
            <td class="subtotal">$38.00</td>
        </tr>
     );
}
 
export default CartItem;