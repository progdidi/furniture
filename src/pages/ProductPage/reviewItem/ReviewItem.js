import "./reviewItem.scss";
import ProductRating from "../../../components/productRating/ProductRating";

const ReviewItem = ({ img, name, text, rating }) => {
  return (
    <div className="review-item">
      <img src={img} alt="" className="review-item__img" />
      <div className="review-item__info">
        <h6 className="review-item__info-title">{name}</h6>
        <div className="review-item__info-rating">
          <ProductRating/>
        </div>
        <p className="review-item__info-text">{text}</p>
        <div className="review-item__buttons">
          <button className="review-item__btn">like</button>
          <button className="review-item__btn">replay</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
