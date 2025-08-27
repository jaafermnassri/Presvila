console.log("works fine");
$(document).ready(function () {
  //==================================================
  // STICKY HEADER FUNCTION
  //==================================================
 
  var header = $(".header-main");
  var headerOffset = header.offset().top;

  $(window).scroll(function () {
    if ($(window).scrollTop() > headerOffset) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  });

//==================================================
// STICKY HEADER FUNCTION
//==================================================
//==================================================
  // REPEATING CARD FUNCTION
  //==================================================
  const divData = [
    { imageSrc: "https://i.imgur.com/DpdiBDq.png", text: "Hoodie Design" },
    { imageSrc: "https://i.imgur.com/z8vtZsT.png", text: "Product Printing" },
    { imageSrc: "https://i.imgur.com/ujvsbL3.png", text: "Package Design" },
    { imageSrc: "https://i.imgur.com/jzKp6PT.png", text: "Product Printing" },
    { imageSrc: "https://i.imgur.com/DpdiBDq.png", text: "Hoodie Design" },
    { imageSrc: "https://i.imgur.com/ujvsbL3.png", text: "Package Design" },
    { imageSrc: "https://i.imgur.com/z8vtZsT.png", text: "Product Printing" },
    { imageSrc: "https://i.imgur.com/jzKp6PT.png", text: "Package Design" },
  ];
  function generateServiceCards() {
    divData.forEach((item) => {
      const $div = $('<div class="service-card"></div>');
      $div.append(
        `<a href="#" class="srv-card-link"><div class="srv-img"><img src="${item.imageSrc}" alt="Image"></div><h5>${item.text}</h5></a>`
      );
      // $div.append(`<h5>${item.text}</h5>`);
      $("#service-cards").append($div);
    });
  }

  // Generate service cards
  generateServiceCards();
  $("#service-cards").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots:true,
    dotsForEach:true,
    items:4,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        margin: 0,
        loop: false,
        nav: false,
        dots: true,
      },
      768: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
  });

  $(".owl-prev").html('<i class="fas fa-arrow-left"></i>');
  $(".owl-next").html('<i class="fas fa-arrow-right"></i>');
  //==================================================
  // REPEATING CARD FUNCTION
  //==================================================
  //==================================================
  // OWL CAROUSEL FUNCTION
  //==================================================
  $(".hero-slider").owlCarousel({
    loop: true,

    nav: true,
    items: 3,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0,
        loop: true,
        dots: true,
      },
      600: {
        items: 1,
        nav: false,
        margin: 0,
        loop: true,
        dots: true,
      },
    },
  });

  $(".latest-designs").owlCarousel({

    loop: false,
    margin: 10,
    nav: false,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 0,
        loop: false,
        nav: false,
        dots: true,
      },
      600: {
        items: 1,
        margin: 0,
        loop: false,
        nav: false,
        dots: true,
      },
      768: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 2,
        nav: true,
        loop: false,
      }
    },
  });

  $(".reviews-sliders").owlCarousel({
    loop: false,
    margin: 10,
    items: 1,
    nav: true,
    dots: true,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>'  
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 0,
        loop: false,
        nav: false,
        dots: true,
      },
      600: {
        items: 1,
        margin: 0,
        loop: false,
        nav: false,
        dots: true,
      },
      768: {
        items: 3,
        nav: true,
      }
    },
  });
  //==================================================
  // OWL CAROUSEL FUNCTION
  //==================================================

  $('.menu-icon-boxx').click(function() {
    $('.nav-side').toggleClass('active');
    $('.drop-list').toggleClass('active');
});

  //==================================================
  // CLOSE X
  //==================================================
  $(".close").click(function () {
    $(".header-top").hide();
  });
  //==================================================
  // CLOSE X
  //==================================================

  //==================================================
  // ACCORDION
  //==================================================
  $(".accordion-item").click(function () {
    $(this).next(".accordion-content").slideToggle();
    $(this)
      .find(".toggle-icon i")
      .toggleClass("fa-plus-circle fa-minus-circle");
      $(this).find(".accordion-item").addClass("text-color4");
  });
  //==================================================
  // ACCORDION
  //==================================================
 
  //==================================================
  // PLAY BUTTON
  //==================================================
  var video = $("#myVideo")[0];
  var playPauseBtn = $("#playPauseBtn");

  // Hide the play button when the video starts playing
  video.addEventListener("play", function () {
    playPauseBtn.fadeOut();
  });

  // Show the play button when the video pauses or ends
  video.addEventListener("pause", function () {
    playPauseBtn.fadeIn();
  });

  video.addEventListener("ended", function () {
    playPauseBtn.fadeIn();
  });

  // Toggle play/pause when the button is clicked
  playPauseBtn.click(function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
  //==================================================
  // PLAY BUTTON
  //==================================================

  //==================================================
  // TOP BUTTON FUNCTION
  //==================================================

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scrollToTop").fadeIn();
    } else {
      $("#scrollToTop").fadeOut();
    }
  });

  $("#scrollToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });

  //==================================================
  // TOP BUTTON FUNCTION
  //==================================================



  //===================================END===========================
}); //========= Document ready closure ==============
