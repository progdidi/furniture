import "./productCard.scss";

import star from "./star.svg";
import like from "./like.svg";
import example from "./example.png";

const ProductCard = ({ img, name, price }) => {
  return (
    <div className="product-card">
      <div className="product-card__main">
        <p className="product-card__tag new">new</p>
        <p className="product-card__tag sale">-50%</p>
        <img src={example} alt="" className="product-card__img" />
        <div className="product-card__overlay">
          <button className="like-btn">
            <img src={like} alt="" className="like-btn__img" />
          </button>

          <button className="product-card__btn main-btn">Add to cart</button>
        </div>
      </div>

      <div className="product-card__info">
        <div className="product-card__rating">
          <img src={star} alt="" className="product-card__rating-img" />
          <img src={star} alt="" className="product-card__rating-img" />
          <img src={star} alt="" className="product-card__rating-img" />
          <img src={star} alt="" className="product-card__rating-img" />
          <img src={star} alt="" className="product-card__rating-img" />
        </div>

        <h6 className="product-card__title">{name}</h6>
        <p className="product-card__price">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
