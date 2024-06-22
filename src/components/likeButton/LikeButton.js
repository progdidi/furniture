import like from './like.svg';
import './likeButton.scss';

const LikeBtn = () => {
    return ( 
        <button className="like-btn">
            <img src={like} alt="" className="like-btn__img" />
            Wishlist
        </button>
     );
}
 
export default LikeBtn;