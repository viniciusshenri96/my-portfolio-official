"use script";

const aboutCourse = document.querySelector(".about__course");

aboutCourse.addEventListener("click", function (e) {
  const clicked = e.target.closest(".about__course-name");
  if (!clicked) return;

  clicked.nextElementSibling.classList.toggle("active");
});

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
