let menuIcon = document.querySelector("#menu-icon")
  , navbar = document.querySelector(".navbar");
menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x"),
    navbar.classList.toggle("active")
}
;
let sections = document.querySelectorAll("section")
  , navLinks = document.querySelectorAll("header nav a");
window.onscroll = ()=>{
    sections.forEach(a=>{
        let b = window.scrollY
          , c = a.offsetTop - 150
          , d = a.offsetHeight
          , e = a.getAttribute("id");
        b >= c && b < c + d && navLinks.forEach(a=>{
            a.classList.remove("active"),
            document.querySelector("header nav a[href*=" + e + "]").classList.add("active")
        }
        )
    }
    );
    let a = document.querySelector("header");
    a.classList.toggle("sticky", 100 < window.scrollY),
    menuIcon.classList.remove("bx-x"),
    navbar.classList.remove("active")
}
,
ScrollReveal({
    distance: "80px",
    duration: 2e3,
    delay: 200
}),
ScrollReveal().reveal(".home-content, .heading", {
    origin: "top"
}),
ScrollReveal().reveal(".home-img, .services-container, .portifolio-box, .to-do, .skill-container, .contact form ", {
    origin: "bottom"
}),
ScrollReveal().reveal(".home-content h1, .about-img", {
    origin: "left"
}),
ScrollReveal().reveal(".home-content p, .about-content", {
    origin: "right"
});
const typed = new Typed(".multiple-text",{
    strings: ["Front-end Developer", "Freelancer", "Student"],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 1e3,
    loop: !0
});
