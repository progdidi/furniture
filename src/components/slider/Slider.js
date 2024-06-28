import { useState } from "react";
import SliderBtn from "./SliderBtn";
import './slider.scss';

const Slider = ({dataSlider}) => {
    const [slideIndex, setSlideIndex] = useState(1);


    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return ( 
        <div className="slider-wrapper">
            {dataSlider.map((obj, index, img) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={obj.img} 
                        />
                    </div>
                )
            })}

            <div className="slider__buttons">
                <SliderBtn moveSlide={prevSlide} direction={"prev"}/>
                <SliderBtn moveSlide={nextSlide} direction={"next"}/>
                
            </div>

            

            <div className="slider__dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "slider-dot active" : "slider-dot"}
                    ></div>
                ))}
            </div>
        </div>
     );
}
 
export default Slider;