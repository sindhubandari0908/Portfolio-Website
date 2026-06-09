// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// =========================
// CLOSE MENU ON LINK CLICK
// =========================

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});

// =========================
// HEADER SHADOW ON SCROLL
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.08)";
    } else {
        header.style.boxShadow = "none";
    }
});

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const sections = document.querySelectorAll(
    ".about, .skills, .projects, .contact"
);

sections.forEach(section => {
    section.classList.add("hidden");
});

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {
    observer.observe(section);
});

// =========================
// HERO IMAGE FLOAT EFFECT
// =========================

const heroImage =
    document.querySelector(".hero-right img");

let position = 0;
let direction = 1;

function floatImage() {

    position += direction * 0.3;

    if (position > 15) direction = -1;
    if (position < -15) direction = 1;

    heroImage.style.transform =
        `translateY(${position}px)`;

    requestAnimationFrame(floatImage);
}

if (heroImage) {
    floatImage();
}

// =========================
// ACTIVE NAVIGATION LINK
// =========================

const navLinks =
    document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    document.querySelectorAll("section")
        .forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (
                pageYOffset >= sectionTop
            ) {
                current = section.getAttribute("id");
            }
        });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active-link");
        }
    });
});

// =========================
// CONTACT FORM
// =========================

const form =
    document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", e => {

        e.preventDefault();

        alert(
            "Thank you! Your message has been received."
        );

        form.reset();
    });
}

// =========================
// BUTTON RIPPLE EFFECT
// =========================

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-4px)";
    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0)";
    });
});

// =========================
// PRELOADER (OPTIONAL)
// =========================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
            "opacity .8s ease";

        document.body.style.opacity = "1";

    }, 100);
});

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });

        }

    });

});