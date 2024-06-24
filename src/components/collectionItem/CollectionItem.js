import "./collectionItem.scss";
import { NavLink } from "react-router-dom";

const CollectionItem = ({ img, name, link }) => {
  return (

    <NavLink to="/shop" className="collection-item">
      <img src={img} alt="" className="collection-item__img" />
      <div className="collection-item__info">
        <h5 className="collection-item__title">{name}</h5>
        <NavLink to="/shop" className="collection-item__link main-link"> Shop Now</NavLink>
        
      </div>
    </NavLink>
  );
};

export default CollectionItem;
