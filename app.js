const menuButton = document.querySelector(".menu-btn");
const menuArc = menuButton.querySelectorAll(".arc");
const overlay = document.querySelector(".overlay");
const navLinks = document.querySelectorAll(".nav-links a");

const navLinksWrapper = document.querySelector(".nav-links-wrapper");

menuButton.addEventListener("click", () => {
  navLinksWrapper.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
  menuArc.forEach((arc) => {
    arc.classList.toggle("arc-active");
  });
});
overlay.addEventListener("click", () => {
  navLinksWrapper.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
  menuArc.forEach((arc) => {
    arc.classList.remove("arc-active");
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinksWrapper.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
    menuArc.forEach((arc) => {
      arc.classList.remove("arc-active");
    });
  });
});

// tilt effect for the main image
const mainImage = document.querySelector(".main-image");

// coming soon modal
const appleComingSoon = document.querySelector(".apple-coming-soon");
const comingSoonModal = document.querySelector(".coming-soon-modal");
const closeModalBtn = document.querySelector(".close-modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");

appleComingSoon.addEventListener("click", (e) => {
  e.preventDefault();
  comingSoonModal.classList.add("modal-active");
  document.body.classList.add("no-scroll");
});
closeModalBtn.addEventListener("click", () => {
  comingSoonModal.classList.remove("modal-active");
  document.body.classList.remove("no-scroll");
});

modalOverlay.addEventListener("click", () => {
  comingSoonModal.classList.remove("modal-active");
  document.body.classList.remove("no-scroll");
});
