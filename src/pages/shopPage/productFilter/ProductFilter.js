import './productFilter.scss';

const ProductFilter = () => {
    return ( 
        <div className="product-filter">
            
            <ul className="categories-list">
                <h4 className="categories-list__title">CATEGORIES</h4>
                <li className="categories-list__item">
                    <button className="categories-list-btn">Living Room</button>
                </li>
                <li className="categories-list__item">
                    <button className="categories-list-btn">Bedroom</button>
                </li>
                <li className="categories-list__item">
                    <button className="categories-list-btn active">Kitchen</button>
                </li>
                <li className="categories-list__item">
                    <button className="categories-list-btn">Bathroom</button>
                </li>
                <li className="categories-list__item">
                    <button className="categories-list-btn">Dinning</button>
                </li>
                <li className="categories-list__item">
                    <button className="categories-list-btn">Outdoor</button>
                </li>
                <li className="categories-list__item">
                    <button className="categories-list-btn">Outdoor</button>
                </li>
                <li className="categories-list__item">
                    <button className="categories-list-btn">Outdoor</button>
                </li>
            </ul>

            <div className="price-list">
                <h4 className="price-list__title">PRICE</h4>
                <form action="" className="price-form">
                    <label htmlFor="" className="price-form__label">All Price
                        <input type="checkbox" className="price-form__input" />
                    </label>
                    <label htmlFor="" className="price-form__label">$0.00 - 99.99
                        <input type="checkbox" className="price-form__input" />
                    </label>
                    <label htmlFor="" className="price-form__label">$100.00 - 199.99
                        <input type="checkbox" className="price-form__input" />
                    </label>
                    <label htmlFor="" className="price-form__label">$200.00 - 299.99
                        <input type="checkbox" className="price-form__input" />
                    </label>
                    <label htmlFor="" className="price-form__label">$300.00 - 399.99
                        <input type="checkbox" className="price-form__input" />
                    </label>
                    <label htmlFor="" className="price-form__label">$400.00+
                        <input type="checkbox" className="price-form__input" />
                    </label>
                </form>
            </div>
        </div>
     );
}
 
export default ProductFilter;