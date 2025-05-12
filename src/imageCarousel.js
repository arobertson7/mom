import emptyNavDot from "./empty-dot.svg";
import filledNavDot from "./filled-dot.svg";

let slidesQueue = [];
let currentSlideIndex = 0;

const carousel = (function () {
    const next = function (slidesContainer, navDotContainer) {
        const slides = slidesContainer.querySelectorAll(".slide");
        // get current slide
        // let currentSlideIndex = 0;
        // while (
        //     currentSlideIndex < slides.length &&
        //     slides[currentSlideIndex].style.visibility != "visible"
        // ) {
        //     currentSlideIndex++;
        // }
        const currentSlide = slides[currentSlideIndex];

        // get index of next slide, wraps back to front if current is the last slide
        const nextSlideIndex = (currentSlideIndex + 1) % slides.length;
        const nextSlide = slides[nextSlideIndex];

        // change slides
        currentSlide.style.opacity = "0";
        nextSlide.style.visibility = "visible";
        nextSlide.style.opacity = "1";
        // give prev slide time to fade out before 'hidden'
        setTimeout(() => {
            currentSlide.style.visibility = "hidden";
        }, 1500);

        updateNavDot(navDotContainer, currentSlideIndex, nextSlideIndex);

        currentSlideIndex++;
        currentSlideIndex = currentSlideIndex % slides.length;
    };

    const previous = function (slidesContainer, navDotContainer) {
        const slides = slidesContainer.querySelectorAll(".slide");
        // get current slide
        // let currentSlideIndex = 0;
        // while (
        //     currentSlideIndex < slides.length &&
        //     slides[currentSlideIndex].style.visibility != "visible"
        // ) {
        //     currentSlideIndex++;
        // }
        const currentSlide = slides[currentSlideIndex];

        // get index of prev slide, wraps back to end if current is the first slide
        let prevSlideIndex = currentSlideIndex - 1;
        if (prevSlideIndex == -1) {prevSlideIndex = slides.length - 1}
        const prevSlide = slides[prevSlideIndex];

        // change slides
        currentSlide.style.opacity = "0";
        prevSlide.style.visibility = "visible";
        prevSlide.style.opacity = "1";
        // give prev slide time to fade out before 'hidden'
        setTimeout(() => {
            currentSlide.style.visibility = "hidden";
        }, 1500);

        updateNavDot(navDotContainer, currentSlideIndex, prevSlideIndex);

        currentSlideIndex--;
        if (currentSlideIndex == -1) {currentSlideIndex = slides.length - 1}
    };

    const updateNavDot = function(navDotContainer, prevDotIndex, newDotIndex) {
        const dots = navDotContainer.querySelectorAll('img');
        dots[prevDotIndex].src = emptyNavDot;
        dots[newDotIndex].src = filledNavDot;
    }

    // source takes:
    //  1. 'next'
    //  2. 'prev'
    //  3. 'initialization' (skips the first two if's and only sets the the timeout at the end)
    const slideShow = function(slidesContainer, navDotContainer, source) {
        if (source == 'next') {
            next(slidesContainer, navDotContainer);

        }
        else if (source == 'prev') {
            previous(slidesContainer, navDotContainer);
        }

        // clear queue, removing upcoming timeouts, if there are any
        for (let i = slidesQueue.length - 1; i >= 0; i--) {
            clearTimeout(slidesQueue[i]);
            slidesQueue.pop();
        }

        // set timeout for upcoming slide
        const queuedSlide = setTimeout(() => {
            slideShow(slidesContainer, navDotContainer, 'next');
        }, 5000);
        slidesQueue.push(queuedSlide);
    }

    return { next, previous, slideShow };
})();

export default carousel;