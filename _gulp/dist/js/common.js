'use strict';

// Document ready
$(document).on('ready', function(){

  $('select.selectric').selectric();

  // Magnific popup video
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
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
