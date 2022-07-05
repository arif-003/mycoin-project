(function($) {
    "use strict";
  
  // Owl Carousel 
      // Home Slider    
        $("#home-slider").owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: true,
        autoplayTimeout: 10000,
        smartSpeed: 6000,
        autoHeight: false,
        touchDrag: true,
        mouseDrag: true,
        margin: 0,
        autoplay: true,
        slideSpeed: 2000,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
              items: 1,
              nav: false,
              dots: false,
          },
          600: {
              items: 1,
              nav: false,
              dots: false,
          },
          768: {
              items: 1,
              nav: false,
          },
          1100: {
              items: 1,
              nav: true,
          }
        }
      });
  
      // Testimonials Slider    
      $("#testimonials-slider").owlCarousel({
        loop: true,
        items: 2,
        dots: false,
        nav: false,
        autoplayTimeout: 10000,
        smartSpeed: 6000,
        autoHeight: false,
        touchDrag: true,
        mouseDrag: true,
        margin: 30,
        autoplay: true,
        slideSpeed: 2500,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
              items: 1,
              nav: false,
              dots: false,
          },
          600: {
              items: 1,
              nav: false,
              dots: false,
          },
          768: {
              items: 1,
              nav: false,
              dots: false,
          },
          1100: {
              items: 2,
              nav: false,
              dots: false,
          }
        }
      });
      
      // Clients Slider    
      $("#client-slider").owlCarousel({
        loop: true,
        items: 6,
        dots: false,
        nav: false,
        autoplayTimeout: 10000,
        smartSpeed: 10000,
        autoHeight: false,
        touchDrag: true,
        mouseDrag: true,
        margin: 30,
        autoplay: true,
        slideSpeed: 2500,
        navText: ['', ''],
        responsive: {
          0: {
              items: 1,
              nav: false,
              dots: false,
          },
          600: {
              items: 1,
              nav: false,
              dots: false,
          },
          768: {
              items: 4,
              nav: false,
              dots: false,
          },
          1100: {
              items: 6,
              nav: false,
              dots: false,
          }
        }
      });
  
    // News Two Slider    
      $("#news-two-slider").owlCarousel({
        loop: true,
        items: 3,
        dots: false,
        nav: false,
        autoplayTimeout: 10000,
        smartSpeed: 6000,
        autoHeight: false,
        touchDrag: true,
        mouseDrag: true,
        margin: 30,
        autoplay: true,
        slideSpeed: 2500,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
              items: 1,
              nav: false,
              dots: false,
          },
          600: {
              items: 1,
              nav: false,
              dots: false,
          },
          768: {
              items: 2,
              nav: false,
              dots: false,
          },
          1100: {
              items: 3,
              nav: false,
              dots: false,
          }
        }
      });
  
 
  // Smooth Scroll
      smoothScroll.init();
      
  // Mailchimp Form
      $('#subscribe-form').ajaxChimp({
          url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh9'
      });
  
  // Navigation 
      // Navigation / Menu
      $("#cssmenu").menumaker({
        title: "Menu",
        format: "multitoggle"
      });
  
  // Facts Count 
      if ($('.counter').length) {   
        $(function( $ ) {
          $('.counter').counterUp({
            delay: 20,
            time: 2000
          });
        });  
      }
  
  // Search
    $('.search-icon').on('click', function (e) {
      e.preventDefault();
      $('.search').addClass('active');
    });
  
    $('.search-close').on('click', function (e) {
      e.preventDefault();
      $('.search').removeClass('active');
    });
  
  // Popup Dialog    
      $('.gallery-block').magnificPopup({
        delegate: 'a',
        type: 'image',    
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',    
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          titleSrc: function(item) {
            return item.el.attr('title') + '<small>by MyCoin</small>';
          }
        }
      });  

 

  // Preloader   
      $(window).on('load', function()  { 
        $('.status').fadeOut();
        $('.preloader').delay(350).fadeOut('slow'); 
      });
  
  })(jQuery);