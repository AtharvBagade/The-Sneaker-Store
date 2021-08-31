import { useEffect } from "react";

 const useSlider = (slideImage,slideText,Images) => {
   
    let slideCounter=0;
    
    useEffect(() => startSlider())

    const startSlider = () =>{

    slideImage.current.style.backgroundImage=`url(${Images[0].src})`;
        slideText.current.innerHTML = Images[0].text;
    }

    const handleSlide = (slide) => {
        slideImage.current.style.backgroundImage = `url(${Images[slide - 1].src})`;
          slideText.current.innerHTML = Images[slide - 1].text;
         animateSlide(slideImage)
    }

    const animateSlide = () => {
        slideImage.current.classList.add('animate');
        setTimeout(() => {
          slideImage.current.classList.remove('animate');
        }, 700);
    }
    
    const goToPrevSlide = () => {
        if (slideCounter === 0) {
            handleSlide(Images.length)
            slideCounter = Images.length;
          }
        
        handleSlide(slideCounter)         
        slideCounter--;
    }

    const goToNextSlide = () => {
      if (slideCounter === Images.length - 1) {
        startSlider()
        slideCounter = -1;
        animateSlide(slideImage)
      }

      slideImage.current.style.backgroundImage = `url(${Images[slideCounter + 1].src})`;
      slideText.current.innerHTML = Images[slideCounter + 1].text;
      slideCounter++;
      animateSlide(slideImage)
    }

    return { goToPrevSlide, goToNextSlide }

}

export default useSlider;