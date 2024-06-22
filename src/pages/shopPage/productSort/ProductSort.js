import sort from './sort.svg';
import './productSort.scss';

import { useState } from 'react';

const ProductSort = () => {

    const [showSortMenu, setShowsortMenu] = useState(false);


    return ( 
        <div className="product-sort">
            <p className="product-sort__text">Sort by</p>
            <div className="product-sort__menu">
                <button className="product-sort__menu-btn" 
                    role="combobox"
                    aria-labelledby="select button"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    aria-controls="select-dropdown"
                    onClick={() => setShowsortMenu(!showSortMenu)}>
                    <span className="selected-value"></span>
                    <img src={sort} alt="" className="product-sort__menu-img" />
                </button>

                <ul className={showSortMenu ? "product-sort__list active" : "product-sort__list"} role='listbox'>

                    <li className="product-sort__list-item" role="option">
                        <input type="radio" id="lowPrice" className="product-sort__list-input" name="sort-products"/>
                        <label htmlFor="lowPrice" className="product-sort__list-label">Price: low to high</label>
                    </li>

                    <li className="product-sort__list-item" role="option">
                        <input type="radio" id="highPrice" className="product-sort__list-input" name="sort-products"/>
                        <label htmlFor="highPrice" className="product-sort__list-label">Price: high to low</label>
                    </li>

                    <li className="product-sort__list-item" role="option">
                        <input type="radio" id="popular" className="product-sort__list-input" name="sort-products"/>
                        <label htmlFor="popular" className="product-sort__list-label">Popularity</label>
                    </li>

                    <li className="product-sort__list-item" role="option">
                        <input type="radio" id="rating" className="product-sort__list-input" name="sort-products"/>
                        <label htmlFor="rating" className="product-sort__list-label">Rating</label>
                    </li>

                </ul>
            </div>
        </div>
     );
}
 
export default ProductSort;