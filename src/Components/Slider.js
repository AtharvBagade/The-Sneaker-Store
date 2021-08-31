import React from 'react';
import { useRef } from 'react';
import useSlider from '../Hooks/useSlider';


const Slider = ({Images}) => {
    
    const slideImage=useRef(null);
    const slideText=useRef(null);

    const {goToPrevSlide , goToNextSlide} = useSlider(slideImage,slideText,Images)

    
    return (

           <div className="slider-contain">
      
            <div className="slider" ref={slideImage}>
                
                
                <div className="slider-content">
                    
                    <button className="slider-button-prev" onClick={goToPrevSlide} >
                    <i class="fas fa-chevron-left"></i>
                    </button>
                   
                    <button className="slider-button-next" onClick={goToNextSlide} >
                    <i class="fas fa-chevron-right"></i>
                    </button>
                </div>

                <div className="slider-feature">
                        <p ref={slideText} className="feature-text"></p>
                    </div>
            </div>
            </div>
    )
}

export default Slider;

