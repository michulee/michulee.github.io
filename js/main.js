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