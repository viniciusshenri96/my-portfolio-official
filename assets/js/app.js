"use script";

const aboutCourse = document.querySelector(".about__course");
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const headerNav = document.querySelector(".header__nav");

aboutCourse.addEventListener("click", function (e) {
  const clicked = e.target.closest(".about__course-name");
  if (!clicked) return;

  clicked.nextElementSibling.classList.toggle("active");
});

const openMenu = function () {
  headerNav.classList.add("active");
  closeBtn.classList.add("active");
  menuBtn.classList.add("active");
};

const closeMenu = function () {
  headerNav.classList.remove("active");
  closeBtn.classList.remove("active");
  menuBtn.classList.remove("active");
};

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

// VANTA.NET({
//   el: "#vanta",
//   mouseControls: false,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 400.0,
//   minWidth: 800.0,
//   scale: 1.0,
//   scaleMobile: 1.0,
//   color: 0x8783f2,
//   backgroundColor: 0x291059,
// });
