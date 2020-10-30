// Color hashtag
let hashtag = '#';
let colorHashtag = hashtag.fontcolor('gray');
// Add hashtag to beginning of skill
let skills = document.querySelectorAll('#hashtag > li');
skills.forEach(addHashtag);
function addHashtag(item, index) {
    skills[index].innerHTML = colorHashtag + item.innerHTML;
}
