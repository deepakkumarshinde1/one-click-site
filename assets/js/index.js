const mobile_nav = document.querySelector(".aka-mobile-navbar-btn");
const nav_header = document.querySelector(".aka-header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

$(function () {
  $(window).scroll(function () {
    var sticky = $(".fix-header"),
      scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass("fixed");
    else sticky.removeClass("fixed");
  });

  var myCarousalOne = $(".deep-my-carousel");
  myCarousalOne.owlCarousel({
    margin: 0,
    items: 1,
    loop: true,
    mouseDrag: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".deep-preview").on("click", function () {
    myCarousalOne.trigger("prev.owl.carousel");
  });

  $(".deep-next").on("click", function () {
    myCarousalOne.trigger("next.owl.carousel");
  });
});
