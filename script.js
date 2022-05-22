// only one rocket may appear depending on scroll position
window.onscroll = () => {
    var scrollPos = document.getElementsByTagName("body")[0].scrollTop;
    // scroll position 15 is slightly past the hero banner section
    if(scrollPos >= 115) {
        document.getElementById("btn_middle_container").style.opacity = "0";

        document.getElementById("btn_top_container").style.opacity = "1";
        document.getElementById("btn_top_container").style.height = "auto";
    } else {
        document.getElementById("btn_middle_container").style.opacity = "1";
        document.getElementById("btn_middle_container").style.height = "auto";

        document.getElementById("btn_top_container").style.opacity = "0";
    }
};