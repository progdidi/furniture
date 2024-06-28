import { useState } from "react";
import SliderBtn from "./SliderBtn";

const Slider = () => {
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
            <SliderBtn moveSlide={nextSlide} direction={"next"}/>
            <SliderBtn moveSlide={prevSlide} direction={"prev"}/>
        </div>
     );
}
 
export default Slider;