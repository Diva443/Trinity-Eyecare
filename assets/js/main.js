document.addEventListener("DOMContentLoaded", function () {
  const navMenu = document.getElementById("navMenu");
  const menuIcon = document.querySelector(".menu-icon");
  const cancelIcon = document.querySelector(".cancel-icon");

  menuIcon.addEventListener("click", function () {
    navMenu.classList.add("active"); // Show the menu
    menuIcon.style.display = "none"; // Hide the menu icon
    cancelIcon.style.display = "block"; // Show the cancel icon
  });

  cancelIcon.addEventListener("click", function () {
    navMenu.classList.remove("active"); // Hide the menu
    menuIcon.style.display = "block"; // Show the menu icon
    cancelIcon.style.display = "none"; // Hide the cancel icon
  });
});

//hero-doctor slider
var swiper = new Swiper(".mySwiper", {
  loop: true, // Enables continuous loop mode
  autoplay: {
    delay: 3000, // Delay between slides in milliseconds
    disableOnInteraction: false, // Continue autoplay after user interaction
  },
  navigation: {
    nextEl: ".swiper-button-next", // Optional for adding navigation arrows
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination", // Optional for adding pagination dots
    clickable: true,
  },
});
