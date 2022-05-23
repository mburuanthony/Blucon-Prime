const header = document.querySelector("header#header");
const navbar = document.querySelector("nav#navbar");
const toggleMenu = document.getElementById("toggle-menu");

const navMenuContainer = document.getElementById("navbarSupportedContent");
const navMenu = document.querySelector(".navbar-nav.ml-auto");

toggleMenu.onclick = function () {
    navMenu.classList.toggle("shown");
};

function disableScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function (e) {
        window.scrollTo({
            left: scrollLeft,
            top: scrollTop,
            behavior: "smooth",
        });
        e.preventDefault();
    };
}

function enableScroll() {
    let prevScrollY = window.pageYOffset;
    header.classList.remove("show-bg");
    window.onscroll = function () {
        const scrollY = window.pageYOffset;
        if (scrollY < 70) {
            header.classList.remove("show-bg");
            return;
        } else header.classList.add("show-bg");
        if (navMenu.classList.contains("shown")) return;
        const scrollingDown = scrollY > prevScrollY;
        const scrollingUp = scrollY < prevScrollY;
        if (scrollingDown) {
            if (scrollY > window.innerHeight - 64)
                header.classList.add("hidden");
        } else if (scrollingUp) {
            header.classList.remove("hidden");
        }
        prevScrollY = scrollY;
    };
}
enableScroll();

// Change active links on click
const links = document.querySelectorAll(".navbar-nav.ml-auto .nav-item a");
function toggleActive() {
    links.forEach(link => {
        link.addEventListener("click", ev => {
            links.forEach(
                item => item.parentElement.classList.remove("active") // li element
            );
            ev.target.parentElement.classList.add("active"); // li element
            // hide the navigation menu when one clicks a link
            // if (navMenu.classList.contains("shown")) {
            //     if (window.matchMedia("(max-width: 768px)")) {
            //         navMenu.classList.remove("shown");
            //         header.classList.add("hidden");
            //     }
            // }
        });
    });
}
toggleActive();

// Change active links on scroll
// const intersectOptions = {
//     threshold: 0.1,
// };
// var observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             let section = entry.target;
//             links.forEach(link => {
//                 const linkId = link.getAttribute("href").replace("#", "");
//                 const sectionId = section.id;
//                 const isHome = linkId === "" && sectionId === "banner";
//                 console.log(`LinkId: ${linkId}, SectionId: ${sectionId}`);
//                 if (linkId === sectionId || isHome)
//                     link.parentElement.classList.add("active"); // li element
//                 else link.parentElement.classList.remove("active"); // li element
//             });
//         }
//     });
// }, intersectOptions);
// const sections = document.querySelectorAll("section.section");
// sections.forEach(section => observer.observe(section));
