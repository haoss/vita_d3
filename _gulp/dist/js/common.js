'use strict';

// Document ready
$(document).on('ready', function(){

  $('select.selectric').selectric();

  mobileNav();

  var swiperResearch = new Swiper('.research__carousel .swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.research__carousel .swiper-button-next',
      prevEl: '.research__carousel .swiper-button-prev',
    },
    pagination: {
      el: '.research__carousel .swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 3000,
    },
    // effect: 'fade'
  });

  var swiperTastes = new Swiper('.tastes__carousel .swiper-container', {
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    navigation: {
      nextEl: '.tastes__carousel .swiper-button-next',
      prevEl: '.tastes__carousel .swiper-button-prev',
    },
    pagination: {
      el: '.tastes__carousel .swiper-pagination',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 3
      }
    },
    autoplay: {
      delay: 3000,
    }
  });
});

$(window).on('load', function() { });
$(window).on('scroll', function() { });
$(window).on('resize', function() { });

(function($){
  $(window).on("load",function(){
      $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset: ".header"
      });
  });
})(jQuery);

function mobileNav() {
  var btn = $('.hamburger');
  var width = $(window).width();
  var navigation = $('.navigation');
  var links = navigation.find('li a');
  
  btn.each(function(){
    var _this = $(this);

    _this.on('click', function(e) {
      if (_this.hasClass('is-active')) {
        btn.removeClass('is-active');
        navigation.removeClass('is-active');
      } else {
        btn.addClass('is-active');
        navigation.addClass('is-active');
      }
    });    
  });

  links.on('click', function(){
    if (width <= 991 && navigation.hasClass('is-active')) {
      setTimeout(function(){
        btn.removeClass('is-active');
        navigation.removeClass('is-active');
      }, 300);
    }
  });
}