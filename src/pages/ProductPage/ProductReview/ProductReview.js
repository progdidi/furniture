import './productReview.scss';

import ReviewItem from "../reviewItem/ReviewItem";
import { reviews } from "../../../helpers/reviews/reviews";
import ProductRating from "../../../components/productRating/ProductRating";

const ProductReview = ({id="reviews"}) => {
    return ( 
        <section className="reviews">
          <div className="container">
            <h4 className="reviews__title">Customer Reviews</h4>
            <div className="reviews-summary">
              <ProductRating />
              <p className="reviews-summary__text"><span>11 </span>Reviews</p>
            </div>
            

            <form action="" className="review-form">
              <input type="text" className="review-form__input" />
              <button className="review-form__btn main-btn">Write Review</button>
            </form>

            <div className="reviews__items">
              <div className="reviews__items-header">
                <h5 className="reviews__items-title">11 Reviews</h5>
                <select name="" id="" className="reviews__items-sort">
                  <option value="" className="reviews__items-sort-option">Newest</option>
                  <option value="" className="reviews__items-sort-option">Newest</option>
                  <option value="" className="reviews__items-sort-option">Newest</option>
                </select>
              </div>
              

              {reviews.map((review) => {
                return (
                  <ReviewItem
                    img={review.img}
                    name={review.name}
                    text={review.text}
                    rating={review.rating}
                    key={review.id}
                  />
                );
              })}
            </div>

            <button className="reviews-btn">Load more</button>
          </div>
        </section>
     );
}
 
export default ProductReview;