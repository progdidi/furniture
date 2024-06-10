import './productPage.scss';

//components
import ReviewItem from './reviewItem/ReviewItem';
import { reviews } from '../../helpers/reviews/reviews';
import Newsletter from '../../components/newsletter/Newsletter';

//images
import example from './example.png';

const ProductPage = () => {
    return ( 
        <>

        <section className="product">
            <div className="container">
                <div className="product__inner">
                    <div className="product-media">
                        <img src={example} alt="" className="product-media__img" />
                    </div>
                    <div className="product-info">
                        <h4 className="product-info__title">Tray Table</h4>
                        <div className="product-info__descr">Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.</div>
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

        <Newsletter/>
        </>
     );
}
 
export default ProductPage;