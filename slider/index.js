const sliderContainer = document.querySelector(".slider-container"),
    sliderMain = sliderContainer.querySelector(".slider-main"),
    slideShifterToLeft = sliderMain.querySelector(".slide-shifter--left"),
    slideShifterToRight = sliderMain.querySelector(".slide-shifter--right"),
    sliderScreen = sliderMain.querySelector(".slider-screen"),
    slider = sliderScreen.querySelector(".slider"),
    slide = slider.querySelector(".slider__slide");

let slideState = 1;

const changeSlideState = () => {

}

const slideShiftToRight = () => {
    const sliderPosition = slider.style.left;
    const sliderWidth = slide.style.width;
    slider.style.left = `${parseInt(sliderPosition) + parseInt(sliderWidth)}`; 
}

const slideShiftToLeft = () => {
    
}

const init = () => {
    slideShifterToRight.addEventListener("click", slideShiftToRight);
}

init();