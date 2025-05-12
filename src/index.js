import "./styles.css";
import dropDown from "./dropDown.js";
import menuIcon from "./menu.svg";
import menuDownIcon from "./menu-down.svg"

import californiaImage from "./cali.jpg";
import dresdenImage from "./dresden.jpg";
import switzerlandImage from "./switzerland.jpg";
import amsterdamImage from "./amsterdam.jpg";
import nycImage from "./nyc.jpg";
import parisImage from "./paris.jpg";

import imageCarousel from "./imageCarousel.js";

// event listeners for list options
const californiaOption = document.querySelector('.california');
californiaOption.addEventListener("click", () => {
    const body = document.querySelector('body');
    body.style.background = `url(${californiaImage})`;
    body.style.backgroundSize = "cover";
})
const dresdenOption = document.querySelector('.dresden');
dresdenOption.addEventListener("click", () => {
    const body = document.querySelector('body');
    body.style.background = `url(${dresdenImage})`;
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
})
const switzerlandOption = document.querySelector('.switzerland');
switzerlandOption.addEventListener("click", () => {
    const body = document.querySelector('body');
    body.style.background = `url(${switzerlandImage})`;
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
})
const amsterdamOption = document.querySelector('.amsterdam');
amsterdamOption.addEventListener("click", () => {
    const body = document.querySelector('body');
    body.style.background = `url(${amsterdamImage})`;
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
})
const parisOption = document.querySelector('.paris');
parisOption.addEventListener("click", () => {
    const body = document.querySelector('body');
    body.style.background = `url(${parisImage})`;
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
})
const nycOption = document.querySelector('.nyc');
nycOption.addEventListener("click", () => {
    const body = document.querySelector('body');
    body.style.background = `url(${nycImage})`;
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
})

// ------------ MAIN SCRIPT ------------ //

const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

// menuButton.addEventListener("click", function() {
//     dropDown.toggle(menuButton, menu, menuIcon, menuDownIcon);
// })

const slides = document.getElementById("carousel-slides-container");
const navDotContainer = document.querySelector(".nav-dots");
const nextButton = document.querySelector(".next-slide-button");
const prevButton = document.querySelector(".prev-slide-button");

nextButton.addEventListener("click", function() {
    imageCarousel.next(slides, navDotContainer);
})

prevButton.addEventListener("click", function() {
    imageCarousel.previous(slides, navDotContainer);
})