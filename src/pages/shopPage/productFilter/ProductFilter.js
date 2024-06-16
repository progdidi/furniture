import './productFilter.scss';

const ProductFilter = () => {
    return ( 
        <div className="product-filter__items">
            <div className="product-filter__item">
                <h5 className="product-filter__item-title">CATEGORIES</h5>
                <select name="" id="" className="product-filter__item-menu">
                    <option value="" className="product-filter__item-option">All Rooms</option>
                    <option value="" className="product-filter__item-option">Living Room</option>
                    <option value="" className="product-filter__item-option">Bedroom</option>
                    <option value="" className="product-filter__item-option">Kitchen</option>
                    <option value="" className="product-filter__item-option">Bathroom</option>
                    <option value="" className="product-filter__item-option">Dinning</option>
                    <option value="" className="product-filter__item-option">Outdoor</option>
                </select>
            </div>
            <div className="product-filter__item">
                <h5 className="product-filter__item-title">PRICE</h5>
                <select name="" id="" className="product-filter__item-menu">
                    <option value="" className="product-filter__item-option">All Price</option>
                    <option value="" className="product-filter__item-option">$0.00 - 99.99</option>
                    <option value="" className="product-filter__item-option">$100.00 - 199.99</option>
                    <option value="" className="product-filter__item-option">$200.00 - 299.99</option>
                    <option value="" className="product-filter__item-option">$300.00 - 399.99</option>
                    <option value="" className="product-filter__item-option">$400.00+</option>
                </select>
            </div>
        </div>

     );
}
 
export default ProductFilter;