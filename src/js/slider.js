import {SliderTech} from "../../lib/slider-tech/sliderCreate.js";

const sliderReview = new SliderTech('.slider', {
    slidersView: 1,
    speed: 0.6,
    counter: false,
    dots: true,
    autoplay: true,
    timeout: 5,
})
sliderReview.initSlider()
