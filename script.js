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

// dialogue script
const dialogueWrapper = document.querySelector(".text_dialogue_wrapper");
dialogueWrapper.addEventListener("click", () => {
    if(document.querySelector("#text_dialogue li:last-child.active")) {
        // do nothing if on last dialogue
        return
    } else {
        nextDialogue();
        // hide blinker if on last dialogue
        if(document.querySelector("#text_dialogue li:last-child.active")) {
            document.querySelector(".text_blinker").classList.add("hidden");
        }
    }
})
function nextDialogue() {
    // remove active
    const current = document.querySelector("#text_dialogue li.active");
    const next = current.nextElementSibling;

    // toggle active for next element
    current.classList.toggle("active");
    next.classList.toggle("active");
    
}
