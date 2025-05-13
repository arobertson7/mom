import emptyNavDot from "./empty-dot.svg";
import filledNavDot from "./filled-dot.svg";

const carousel = (function () {
    let queuedSlide;
    let currentSlideIndex = 0;

    const next = function (slidesContainer, navDotContainer) {
        const slides = slidesContainer.querySelectorAll(".slide");
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
        }, 500);

        updateNavDot(navDotContainer, currentSlideIndex, nextSlideIndex);

        currentSlideIndex = ++currentSlideIndex % slides.length;
    };

    const previous = function (slidesContainer, navDotContainer) {
        const slides = slidesContainer.querySelectorAll(".slide");
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
        }, 500);

        updateNavDot(navDotContainer, currentSlideIndex, prevSlideIndex);

        currentSlideIndex--;
        if (currentSlideIndex == -1) {currentSlideIndex = slides.length - 1};
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

        clearTimeout(queuedSlide);

        // set timeout for upcoming slide
        queuedSlide = setTimeout(() => {
            slideShow(slidesContainer, navDotContainer, 'next');
        }, 5000);
    }

    return { slideShow };
})();

export default carousel;
