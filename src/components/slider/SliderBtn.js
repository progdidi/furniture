import prev from './prev.svg';
import next from './next.svg';

const SliderBtn = ({direction, moveSlide}) => {
    return ( 
        <button 
        onClick={moveSlide}
        className={direction === "next" ? "slider-btn next" : "slider-btn prev"}>
            <img src={direction === "next" ? next : prev} alt="" className="slider-btn__img" />
        </button>
     );
}
 
export default SliderBtn;