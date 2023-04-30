const mainNavbar = document.querySelector("#main_header_navbar");
window.addEventListener("scroll",function() {
    mainNavbar.classList.toggle("fixed",window.scrollY > 400);
})