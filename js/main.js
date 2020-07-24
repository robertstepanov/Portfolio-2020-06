let mainNavLinks = document.querySelectorAll("nav h4 a");

let mainSections = document.querySelectorAll("section div");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop + 160 && section.offsetTop + section.offsetHeight >= fromTop + 160
        )  {
            link.classList.add("current");
        } else {
            link.classList.remove("current");
        }
    });
});