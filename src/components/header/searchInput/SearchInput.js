import './searchInput.scss';
import search from './search.svg';
import { useState } from 'react';

const SearchInput = () => {

    const [showSearchForm, setShowSearchForm] = useState(false);

    return ( 
        <div className="search-form">
            <input type="text" className={showSearchForm ? "search-form__input active" : "search-form__input"} />
            <button className="search-form__btn" onClick={() => setShowSearchForm(!showSearchForm)}>
                <img src={search} alt="" className="search-form__btn-img" />
            </button>
        </div>
     );
}
 
export default SearchInput;