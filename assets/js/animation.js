// doc-team-slider Carousel
$(document).ready(function () {
  $(".doc-team-slider").owlCarousel({
    loop: true,
    items: 3, // Corrected property name (it's "items", not "item")
    autoplay: true,
    dots: true,
    autoplayTimeout: 2000, // 3000ms = 3s
    autoplayHoverPause: true,
  });
});

// Second Carousel
$(document).ready(function () {
  $(".specialized-carousal").owlCarousel({
    items: 3,
    margin: 2,
    autoPlay: true,
    loop: true,
    nav: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
  });
});
//Lab-Lense-carousal

$(document).ready(function () {
  $(".Lab-Lense-carousal").owlCarousel({
    items: 4,
    autoPlay: true,
    loop: true,
    dots: true,
    nav: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
  });
});

$(document).ready(function () {
  $(".blog-container").owlCarousel({
    loop: true,
    items: 3, // Corrected property name (it's "items", not "item")
    autoplay: true,
    dots: true,
    autoplayTimeout: 3000, // 3000ms = 3s
    autoplayHoverPause: true,
  });
});

$(document).ready(function () {
  $(".blog-container1").owlCarousel({
    items: 3,
    margin: 2,
    autoPlay: true,
    loop: true,
    nav: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
  });
});

$(document).ready(function () {
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    items: 2, // Corrected property name (it's "items", not "item")
    autoplay: true,
    dots: true,
    margin: 5,
    autoplayTimeout: 9000, // 3000ms = 3s
    autoplayHoverPause: true,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  // Function to check if an element is in the viewport with a 20% offset
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    const threshold = window.innerHeight * 0.8; // 80% of the viewport height
    return rect.top < threshold && rect.bottom > 0;
  };

  // Function to handle scroll-triggered animations
  const handleScroll = () => {
    animatedElements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    });
  };

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Run on page load to handle already visible elements
  handleScroll();
});

window.addEventListener("scroll", function () {
  const header = document.querySelector(".topnav");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
