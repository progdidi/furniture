import "./productPage.scss";

//components
import ReviewItem from "./reviewItem/ReviewItem";
import { reviews } from "../../helpers/reviews/reviews";
import Newsletter from "../../components/newsletter/Newsletter";
import OfferTimer from "./offerTimer/OfferTimer";

//images
import example from "./example.png";

const ProductPage = () => {
  return (
    <>
      <section className="product">
        <div className="container">
          <div className="product__inner">
            <div className="product-media">
              <div className="product-slider">
                <div className="product-slider__main">
                  <img src="" alt="" className="product-slider__main-img" />
                </div>

                <div className="product-slider__items">
                  <div className="product-slider__item">
                    <img src="" alt="" className="product-slider__item-img" />
                  </div>

                  <div className="product-slider__item">
                    <img src="" alt="" className="product-slider__item-img" />
                  </div>

                  <div className="product-slider__item">
                    <img src="" alt="" className="product-slider__item-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-info">
              <div className="product-info__rating">5</div>
              <a href="" className="product-info__reviews">
                11 Reviews
              </a>
              <h4 className="product-info__title section__title">Tray Table</h4>
              <p className="product-info__descr">
                Buy one or buy a few and make every space where you sit more
                convenient. Light and easy to move around with removable tray
                top, handy for serving snacks.
              </p>
              <p className="product-info__price">$199.00</p>
              <OfferTimer />

              <div className="product-size">
                <p className="product-size__text">Measurements</p>
                <p className="product-size__num">17 1/2x20 5/8 "</p>
              </div>

              <div className="product-color">
                <p className="product-color__text">Choose Color</p>
                <div className="product-color__main">Black</div>
                <div className="product-color__items">
                  <div className="product-color__item">
                    <img src="" alt="" className="product-color__item-img" />
                  </div>
                  <div className="product-color__item">
                    <img src="" alt="" className="product-color__item-img" />
                  </div>
                  <div className="product-color__item">
                    <img src="" alt="" className="product-color__item-img" />
                  </div>
                  <div className="product-color__item">
                    <img src="" alt="" className="product-color__item-img" />
                  </div>
                </div>
              </div>

              <div className="product__buttons">
                <button className="product-btn"></button>
                <button className="product-btn like">Wishlist</button>
                <button className="product-btn basket main-btn">
                  Add to Cart
                </button>
              </div>

              <div className="product__tags">
                <div className="product__tag">
                  <p className="product__tag-name">SKU</p>
                  <p className="product__tag-info">1117</p>
                </div>

                <div className="product__tag">
                  <p className="product__tag-name">CATEGORY</p>
                  <p className="product__tag-info">Living Room, Bedroom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews">
        <div className="container">
          <h4 className="reviews__title section__title">Customer Reviews</h4>
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
      </section>

      <Newsletter />
    </>
  );
};

export default ProductPage;
