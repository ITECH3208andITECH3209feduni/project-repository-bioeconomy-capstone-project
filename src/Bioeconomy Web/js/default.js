const headerNav = document.querySelector("header nav");
const menuBtn = document.querySelector(".header-menu");
menuBtn.addEventListener("click", function() {
    if (this.children[0].checked) {
        headerNav.classList.add("active");
    } else {
        headerNav.className = "";
    }
})
window.onscroll = function() {
    if (headerNav.classList.contains("active")) {
        headerNav.classList.remove("active");
        menuBtn.children[0].checked = false
    }
};