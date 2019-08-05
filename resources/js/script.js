$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
    
    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        } 
    });


    //seInterval animate margin-left and the last slide go to the first position (0px) 

  var width = 450;
  var animationSpeed = 1000;
  var pause = 3000;
  var currentSlide = 1;
  // try and configure all the variables so that you can change it at any point( things of the same type at the same place)

  var $slider = $("#slider");
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');

  //the jQuery selector is used only once and the code is very efficient as you are CACHING THE DOM
  var interval;
  //have to define the variable outside startSlider() to have it in the scope of a function call

  function startSlider() {
  interval =  setInterval(function() {
      $($slideContainer).animate({
        "margin-left": "-=" + width
      }, animationSpeed, firstSlide);
    }, pause);

    function firstSlide() {
      currentSlide++;
      if (currentSlide === $slides.length) {
        currentSlide = 1;
        $slideContainer.css("margin-left", 0);
      }
    }
  }
  
  function stopSlider(){
    clearInterval(interval);
  }
  $slider.on("mouseenter", stopSlider).on("mouseleave", startSlider);

  startSlider();
});