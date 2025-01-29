document.addEventListener("DOMContentLoaded", function () {
  const navMenu = document.getElementById("navMenu");
  const navToggle = document.getElementById("menuToggle");

  navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");

    // Toggle between menu icons
    if (navMenu.classList.contains("show")) {
      navToggle.innerHTML = '<i class="fas fa-times"></i>'; // Close icon
    } else {
      navToggle.innerHTML = '<i class="fas fa-bars"></i>'; // Hamburger icon
    }
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
