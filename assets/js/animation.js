// doc-team-slider Carousel
$(document).ready(function () {
  $(".doc-team-slider").owlCarousel({
    loop: true,
    margin: 5,
    items: 3,
    autoplay: true,
    dots: true,
    autoplayTimeout: 2000, // 3000ms = 3s
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1, // Show 1 item for screens <= 600px
        margin: 10,
      },
      765: {
        items: 2, // Show 2 items for screens <= 1200px
        margin: 15,
      },
      1000: {
        items: 3, // Show 3 items for screens > 1200px
        margin: 20,
      },
    },
  });
});

// Second Carousel
$(document).ready(function () {
  $(".specialized-carousal").owlCarousel({
    loop: true,
    items: 3,
    autoplay: true,
    dots: true,
    autoplayTimeout: 2000, // 3000ms = 3s
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1, // Show 1 item for screens <= 600px
        margin: 25,
      },
      765: {
        items: 2, // Show 2 items for screens <= 1200px
        margin: 15,
      },
      1000: {
        items: 3, // Show 3 items for screens > 1200px
        margin: 20,
      },
    },
  });
});
//Lab-Lense-carousal

$(document).ready(function () {
  $(".Lab-Lense-carousal").owlCarousel({
    items: 4,
    autoPlay: true,
    loop: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1, // Show 1 item for screens <= 600px
      },
      765: {
        items: 2, // Show 2 items for screens <= 1200px
      },
      1000: {
        items: 3, // Show 3 items for screens > 1200px
      },
      1300: {
        items: 4, // Show 3 items for screens > 1200px
      },
    },
  });
});

$(document).ready(function () {
  $(".blog-container1").owlCarousel({
    items: 3,
    margin: 2,
    autoPlay: true,
    loop: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1, // Show 1 item for screens <= 600px
        margin: 10,
      },
      765: {
        items: 2, // Show 2 items for screens <= 1200px
        margin: 15,
      },
      1000: {
        items: 3, // Show 3 items for screens > 1200px
        margin: 20,
      },
    },
  });
});

$(document).ready(function () {
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    items: 2,
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
