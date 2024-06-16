import star from "./star.svg";
import './productRating.scss';

const ProductRating = () => {
  return (
    <div className="product-rating">
      <img src={star} alt="" className="product-rating__img" />
      <img src={star} alt="" className="product-rating__img" />
      <img src={star} alt="" className="product-rating__img" />
      <img src={star} alt="" className="product-rating__img" />
      <img src={star} alt="" className="product-rating__img" />
    </div>
  );
};

export default ProductRating;
