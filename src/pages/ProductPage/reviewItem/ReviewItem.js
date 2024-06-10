import './reviewItem.scss';

const ReviewItem = ({img, name, text, rating}) => {
    return ( 
        <div className="review-item">
            <img src={img} alt="" className="review-item__img" />
            <div className="review-item__info">
                <h6 className="review-item__info-title">{name}</h6>
                <div className="review-item__info-rating">{rating}</div>
                <p className="review-item__info-text">{text}</p>
            </div>
        </div>
     );
}
 
export default ReviewItem;