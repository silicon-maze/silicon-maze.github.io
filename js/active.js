// **********************************************
// ** Classy Nav - 1.1.0
// ** Responsive Megamenu Plugins
// ** Copyright (c) 2019 Designing World
// **********************************************

(function ($) {
  $.fn.classyNav = function (options) {

      // Variables
      var navContainer = $('.classy-nav-container');
      var classy_nav = $('.classynav ul');
      var classy_navli = $('.classynav > ul > li');
      var navbarToggler = $('.classy-navbar-toggler');
      var closeIcon = $('.classycloseIcon');
      var navToggler = $('.navbarToggler');
      var classyMenu = $('.classy-menu');
      var var_window = $(window);

      // default options
      var defaultOpt = $.extend({
          breakpoint: 991,
          openCloseSpeed: 500,
          megaopenCloseSpeed: 800
      }, options);

      return this.each(function () {

          // navbar toggler
          navbarToggler.on('click', function () {
              navToggler.toggleClass('active');
              classyMenu.toggleClass('menu-on');
          });

          // close icon
          closeIcon.on('click', function () {
              classyMenu.removeClass('menu-on');
              navToggler.removeClass('active');
          });

          // add dropdown & megamenu class in parent li class
          classy_navli.has('.dropdown').addClass('cn-dropdown-item');
          classy_navli.has('.megamenu').addClass('megamenu-item');

          // adds toggle button to li items that have children
          classy_nav.find('li a').each(function () {
              if ($(this).next().length > 0) {
                  $(this).parent('li').addClass('has-down').append('<span class="dd-trigger"></span>');
              }
          });

          // expands the dropdown menu on each click
          classy_nav.find('li .dd-trigger').on('click', function (e) {
              e.preventDefault();
              $(this).parent('li').children('ul').stop(true, true).slideToggle(defaultOpt.openCloseSpeed);
              $(this).parent('li').toggleClass('active');
          });

          // add padding in dropdown & megamenu item
          $('.megamenu-item').removeClass('has-down');

          // expands the megamenu on each click
          classy_nav.find('li .dd-trigger').on('click', function (e) {
              e.preventDefault();
              $(this).parent('li').children('.megamenu').slideToggle(defaultOpt.megaopenCloseSpeed);
          });

          // check browser width in real-time
          function breakpointCheck() {
              var windoWidth = window.innerWidth;
              if (windoWidth <= defaultOpt.breakpoint) {
                  navContainer.removeClass('breakpoint-off').addClass('breakpoint-on');
              } else {
                  navContainer.removeClass('breakpoint-on').addClass('breakpoint-off');
              }
          }

          breakpointCheck();

          var_window.on('resize', function () {
              breakpointCheck();
          });

          // sidebar menu enable
          if (defaultOpt.sideMenu === true) {
              navContainer.addClass('sidebar-menu-on').removeClass('breakpoint-off');
          }
      });
  };
  
}(jQuery));

(function ($) {
  "use strict";

  var confer_window = $(window);

  // ****************************
  // :: 1.0 Preloader Active Code
  // ****************************

  confer_window.on("load", function () {
    $("#preloader").fadeOut("1000", function () {
      $(this).remove();
    });
  });

  // ****************************
  // :: 2.0 ClassyNav Active Code
  // ****************************

  if ($.fn.classyNav) {
    $("#classy-navbar").classyNav();
  }

  // *********************************
  // :: 3.0 Welcome Slides Active Code
  // *********************************

  if ($.fn.owlCarousel) {
    var welcomeSlider = $(".welcome-slides");
    welcomeSlider.owlCarousel({
      items: 1,
      loop: true,
      autoplay: false,
      smartSpeed: 1000,
      autoplayTimeout: 10000,
      nav: true,
      navText: [
        '<i class="zmdi zmdi-chevron-left"></i>',
        '<i class="zmdi zmdi-chevron-right"></i>',
      ],
    });

    welcomeSlider.on("translate.owl.carousel", function () {
      var layer = $("[data-animation]");
      layer.each(function () {
        var anim_name = $(this).data("animation");
        $(this)
          .removeClass("animated " + anim_name)
          .css("opacity", "0");
      });
    });

    $("[data-delay]").each(function () {
      var anim_del = $(this).data("delay");
      $(this).css("animation-delay", anim_del);
    });

    $("[data-duration]").each(function () {
      var anim_dur = $(this).data("duration");
      $(this).css("animation-duration", anim_dur);
    });

    welcomeSlider.on("translated.owl.carousel", function () {
      var layer = welcomeSlider
        .find(".owl-item.active")
        .find("[data-animation]");
      layer.each(function () {
        var anim_name = $(this).data("animation");
        $(this)
          .addClass("animated " + anim_name)
          .css("opacity", "1");
      });
    });
  }

  // ******************************
  // :: 17.0 ScrollDown Active Code
  // ******************************

  $("#scrollDown").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top - 75,
      },
      800
    );
  });

  // ************************************
  // :: 4.0 Instragram Slides Active Code
  // ************************************

  if ($.fn.owlCarousel) {
    var clientArea = $(".client-area");
    clientArea.owlCarousel({
      items: 2,
      loop: true,
      autoplay: true,
      smartSpeed: 1000,
      margin: 40,
      autoplayTimeout: 7000,
      nav: true,
      navText: [
        '<i class="zmdi zmdi-chevron-left"></i>',
        '<i class="zmdi zmdi-chevron-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
          margin: 15,
        },
        992: {
          margin: 20,
        },
        1200: {
          margin: 40,
        },
      },
    });
  }

  // *********************************
  // :: 5.0 Masonary Gallery Active Code
  // *********************************

  if ($.fn.imagesLoaded) {
    $(".confer-portfolio").imagesLoaded(function () {
      // filter items on button click
      $(".portfolio-menu").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({
          filter: filterValue,
        });
      });
      // init Isotope
      var $grid = $(".confer-portfolio").isotope({
        itemSelector: ".single_gallery_item",
        percentPosition: true,
        masonry: {
          columnWidth: ".single_gallery_item",
        },
      });
    });
  }

  // ***********************************
  // :: 6.0 Counter Up Active Code
  // ***********************************
  if ($.fn.counterUp) {
    $(".counter").counterUp({
      delay: 10,
      time: 2000,
    });
  }

  // ***********************************
  // :: 6.0 Portfolio Button Active Code
  // ***********************************

  $(".portfolio-menu button.btn").on("click", function () {
    $(".portfolio-menu button.btn").removeClass("active");
    $(this).addClass("active");
  });

  // ********************************
  // :: 7.0 Search Button Active Code
  // ********************************
  $(".search-btn").on("click", function () {
    $(".search-form").toggleClass("search-form-active");
  });

  // ************************
  // :: 8.0 Stick Active Code
  // ************************

  confer_window.on("scroll", function () {
    if (confer_window.scrollTop() > 0) {
      $(".header-area").addClass("sticky");
    } else {
      $(".header-area").removeClass("sticky");
    }
  });

  // *********************************
  // :: 9.0 Magnific Popup Active Code
  // *********************************
  if ($.fn.magnificPopup) {
    $(".video-play-btn").magnificPopup({
      type: "iframe",
    });
    $(".portfolio-img").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
        preload: [0, 2],
        navigateByImgClick: true,
        tPrev: "Previous",
        tNext: "Next",
      },
    });
    $(".single-gallery-item").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
        preload: [0, 2],
        navigateByImgClick: true,
        tPrev: "Previous",
        tNext: "Next",
      },
    });
  }

  // **************************
  // :: 10.0 Tooltip Active Code
  // **************************
  if ($.fn.tooltip) {
    $('[data-toggle="tooltip"]').tooltip();
  }

  // ***********************
  // :: 11.0 WOW Active Code
  // ***********************
  if (confer_window.width() > 767) {
    new WOW().init();
  }

  // ****************************
  // :: 12.0 Jarallax Active Code
  // ****************************
  if ($.fn.jarallax) {
    $(".jarallax").jarallax({
      speed: 0.5,
    });
  }

  // ****************************
  // :: 13.0 Countdown Active Code
  // ****************************
  if ($.fn.countdown) {
    $("#clock").countdown("2020/07/25 17:00:00", function (event) {
      $(this).html(
        event.strftime(
          "<div>%D <span>Days</span></div> <div>%H <span>Hours</span></div> <div>%M <span>Minutes</span></div> <div>%S <span>Seconds</span></div>"
        )
      );
    });
  }

  // ****************************
  // :: 13.0 Scrollup Active Code
  // ****************************
  if ($.fn.scrollUp) {
    confer_window.scrollUp({
      scrollSpeed: 1000,
      scrollText: '<i class="arrow_carrot-up"</i>',
    });
  }

  // *********************************
  // :: 14.0 Prevent Default 'a' Click
  // *********************************
  $('a[href="#"]').on("click", function ($) {
    $.preventDefault();
  });

  // *********************************
  // :: 14.0 Prevent Default 'a' Click
  // *********************************
  var pricingTable = $(".single-ticket-pricing-table");

  pricingTable.on("mouseenter", function () {
    pricingTable.removeClass("active");
    $(this).addClass("active");
  });
})(jQuery);


