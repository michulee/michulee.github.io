// TODO
/**
 * - slide left and right navigation
 */

// GLOBAL VARIABLES
let currentID = 0;
let previousID = 0;
let isNextSlide = false;

// DOM ELEMENTS
const imagesList = document.querySelector("#rotator_image").children;
const circleNavList = document.querySelector("#project_circle_nav").children;
const hoverLeftNav = document.querySelector("#rotator_hover_left");
const hoverRightNav = document.querySelector("#rotator_hover_right");

// EVENT LISTENER - IMAGE NAVIGATION
hoverLeftNav.addEventListener("click", () => {
    // modular components - can have both or just by itself
    prevSlide();
    prevCircle();

    // reset
    isNextSlide = false;
})
hoverRightNav.addEventListener("click", () => {
    // modular components - can have both or just by itself
    nextSlide();
    nextCircle();

    // reset
    isNextSlide = false;
})

// EVENT LISTENER - CIRCLE NAVIGATION
for(let e of circleNavList) {
    e.addEventListener("click", () => {
        // modular components - can have both or just by itself
        nextSlide();
        nextCircle();
    
        // reset
        isNextSlide = false;
    })

}

// IMAGE NAVIGATION
function nextSlide() {
    // make active slide disappear
    const activeSlide = document.querySelector("#rotator_image li.active");
    activeSlide.classList.toggle("active");

    // iterate slide and make it appear
    if(isNextSlide) {
        imagesList[currentID].classList.toggle("active");
    } else {
        if(currentID === imagesList.length-1) {
            currentID = 0;
        } else {
            currentID++;
        }
        imagesList[currentID].classList.toggle("active");
    }
    isNextSlide = true;
}
function prevSlide() {
    // make active slide disappear
    const activeSlide = document.querySelector("#rotator_image li.active");
    activeSlide.classList.toggle("active");

    // iterate slide and make it appear
    if(isNextSlide) {
        imagesList[currentID].classList.toggle("active");
    } else {
        if(currentID === previousID) {
            currentID = imagesList.length-1;
        } else {
            currentID--;
        }
        imagesList[currentID].classList.toggle("active");
    }
    isNextSlide = true;
}

// CIRCLE NAVIGATION
function nextCircle() {
    // make active button disappear
    const activeButton = document.querySelector("#project_circle_nav li.active");
    activeButton.classList.toggle("active");

    // iterate button and change active
    if(isNextSlide) {
        circleNavList[currentID].classList.toggle("active");
    } else {
        if(currentID === previousID) {
            currentID = 0;
        } else {
            currentID++;
        }
        circleNavList[currentID].classList.toggle("active");
    }
    isNextSlide = true;
}
function prevCircle() {
    // make active button disappear
    const activeButton = document.querySelector("#project_circle_nav li.active");
    activeButton.classList.toggle("active");

    // iterate button and change active
    if(isNextSlide) {
        circleNavList[currentID].classList.toggle("active");
    } else {
        if(currentID === previousID) {
            currentID = imagesList.length-1;
        } else {
            currentID--;
        }
        circleNavList[currentID].classList.toggle("active");
    }
    isNextSlide = true;
}


