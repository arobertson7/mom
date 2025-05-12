import "./styles.css";

import imageCarousel from "./imageCarousel.js";



// ------------ MAIN SCRIPT ------------ //

const navMessage = document.getElementById("nav-message");
setTimeout(() => {
    navMessage.style.opacity = "0";
}, 2000);

setTimeout(() => {
    navMessage.textContent = "Love, Austin ♥️";
    navMessage.style.opacity = "1";
}, 3000);

setTimeout(() => {
    navMessage.style.opacity = "0";
}, 6000);

setTimeout(() => {
    navMessage.textContent = "Happy Mother's Day 💐";
    navMessage.style.opacity = "1";
}, 7000);

//

const slides = document.getElementById("carousel-slides-container");
const navDotContainer = document.querySelector(".nav-dots");
const nextButton = document.querySelector(".next-slide-button");
const prevButton = document.querySelector(".prev-slide-button");

nextButton.addEventListener("click", function() {
    imageCarousel.slideShow(slides, navDotContainer, 'next');
})

prevButton.addEventListener("click", function() {
    imageCarousel.slideShow(slides, navDotContainer, 'prev');
})

imageCarousel.slideShow(slides, navDotContainer, 'initialization');