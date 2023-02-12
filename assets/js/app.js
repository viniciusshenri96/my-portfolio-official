"use script";

const aboutCourse = document.querySelector(".about__course");
const navButton = document.querySelector(".menu-mobile");
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const headerNav = document.querySelector(".header__nav");
const projectsInfo = document.querySelectorAll(".projects__info");
const projectBtn = document.querySelector(".btn--project");
const overlay = document.querySelector(".overlay");

const eventAdd = "click";
const classAct = "active";

aboutCourse.addEventListener("click", function (e) {
  const clicked = e.target.closest(".about__course-name");
  if (!clicked) return;
  clicked.classList.toggle("active");
  clicked.nextElementSibling.classList.toggle("active");
});

const openMenu = function () {
  headerNav.classList.add("active");
  closeBtn.classList.add("active");
  menuBtn.classList.add("active");
  overlay.classList.add("active");
  navButton.setAttribute("aria-expanded", "true");

  outsideClick(headerNav, eventAdd, () => {
    headerNav.classList.remove("active");
    closeBtn.classList.remove("active");
    menuBtn.classList.remove("active");
    overlay.classList.remove("active");
    navButton.setAttribute("aria-expanded", "false");
  });
};

const closeMenu = function () {
  headerNav.classList.remove("active");
  closeBtn.classList.remove("active");
  menuBtn.classList.remove("active");
  overlay.classList.remove("active");
  navButton.setAttribute("aria-expanded", "false");
};

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

function outsideClick(element, eventAdd, callback) {
  const html = document.querySelector("html");
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    setTimeout(() => html.addEventListener(eventAdd, handleOutsideClick));
    element.setAttribute(outside, "");
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      html.removeEventListener(eventAdd, handleOutsideClick);
      callback();
    }
  }
}

//
projectBtn.addEventListener("click", function () {
  document
    .getElementById("projetos")
    .scrollIntoView({ behavior: "smooth", block: "start" });
});

// Implementing Page Navigation
document.querySelector(".header__list").addEventListener("click", function (e) {
  if (e.target.classList.contains("header__link")) {
    e.preventDefault();
    const sectionId = e.target.getAttribute("href");
    document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
  }
});

// Clock
const degre = 6;
const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

setInterval(() => {
  let date = new Date();
  let hh = date.getHours() * 30;
  let mm = date.getMinutes() * degre;
  let ss = date.getSeconds() * degre;

  // prettier-ignore
  hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
});

// Revealing Elements on Scroll
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);

  section.classList.add("section--hidden");
});
