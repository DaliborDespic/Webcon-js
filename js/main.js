// typed biblioteka
var typed = new Typed(".element", {
  // Waits 1000ms after typing "First"
  strings: [
    "Kodiranje uzivo sredom",
    "30 dana kodiranja.",
    "JS radionica.",
    "Custom ",
    "WP Radionica",
  ],
  loop: true,
  typeSpeed: 100,
  smartBackspace: true,
  backSpeed: 100,
  loopCount: Infinity,
});

// navigacija
$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $("nav").addClass("stickyAdd");
  } else {
    $("nav").removeClass("stickyAdd");
  }
});

// iskustvo progress bar
var waypoint = new Waypoint({
  element: document.getElementById("iskustvo"),
  handler: function (direction) {
    var progress = document.querySelectorAll(".progress-bar");
    progress[0].setAttribute("style", "width:95%; transition: 1s;");
    progress[1].setAttribute("style", "width:73%; transition: 1s;");
    progress[2].setAttribute("style", "width:32%; transition: 1s;");
    progress[3].setAttribute("style", "width:84%; transition: 1s;");
  },
  offset: "90%",
});

// tehnologije - owl.slider
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1500,
  autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

// radionice - filterizer

var filterizd = $(".filter-container").filterizr({
  animationDuration: 0.5,
});
