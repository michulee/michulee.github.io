// Current Year for Footer
var d = new Date(); page.currentYear = d.getFullYear(); 

// https://stackoverflow.com/a/50279663/7799687
// Toggle down arrow icon
window.addEventListener('scroll', function () {
    if (this.oldScroll < this.scrollY) {
        document.getElementById('icon-down').innerText = '';
    } else if (this.scrollY == 0) {
        document.getElementById('icon-down').innerText = 'keyboard_arrow_down';
    }
    this.oldScroll = this.scrollY;
});

let slides = document.querySelectorAll('slide-item');

// detect left or right button
// keep track of count slide index

// let slideIndex = 0;
// document.getElementById('btn-left').addEventListener('click', function() {
//     slideIndex--;
// });
// document.getElementById('btn-right').addEventListener('click', function() {
//     slideIndex++;
// });

let slideIndex = 0;

document.getElementById('btn-left').addEventListener('click', setSlideIndex);
document.getElementById('btn-right').addEventListener('click', setSlideIndex);

function setSlideIndex() {
    slideIndex++;
}

function getSlideIndex() {
    return slideIndex;
}
setSlideIndex();
console.log(getSlideIndex(slideIndex));

// learn how to to use events and event.target
// find more on different ways to do click event listeners