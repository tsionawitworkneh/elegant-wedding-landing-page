// Toggle mobile menu
const toggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu-items");
const icon = toggle.querySelector("i");

toggle.addEventListener("click", () => {

    // Toggle menu
    menu.classList.toggle("active");

    // Change icon
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");

});

// Change navbar background on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.nav-bar');

    if (window.scrollY > 0) {
        navbar.classList.add('nav-bar-scroll');
    } else {
        navbar.classList.remove('nav-bar-scroll');
    }
});

//review slider
const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".dot");

let current = 0;
let interval = setInterval(nextSlide, 5000);

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function nextSlide() {
    current++;
    if (current >= slides.length) current = 0;
    showSlide(current);
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        current = index;
        showSlide(current);

        clearInterval(interval);
        interval = setInterval(nextSlide, 5000);
    });
});