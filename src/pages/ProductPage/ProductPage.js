import './productPage.scss';

//components
import ReviewItem from './reviewItem/ReviewItem';
import { reviews } from '../../helpers/reviews/reviews';

const ProductPage = () => {
    return ( 
        <>

        <section className="reviews">
            <div className="container">
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
        </>
     );
}
 
export default ProductPage;