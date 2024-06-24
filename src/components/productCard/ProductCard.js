import "./productCard.scss";

import star from "./star.svg";
import like from "./like.svg";

//components
import LikeBtn from "../likeButton/LikeButton";

const ProductCard = ({ img, name, price, descr }) => {
  return (
    <a href="" className="product-card">
      <div className="product-card__main">
        <p className="product-card__tag new">new</p>
        <p className="product-card__tag sale">-50%</p>
        <img src={img} alt="" className="product-card__img" />
        <div className="product-card__overlay">
          <LikeBtn/>

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

        <p className="product-card__descr">Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.</p>
        <div className="product-card__info-buttons">
          <button className="product-card__btn main-btn">Add to cart</button>
          <LikeBtn/>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
