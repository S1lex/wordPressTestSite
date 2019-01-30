   $(document).ready(function(){
      $('.slider').bxSlider({
        slideWidth: 300,
        slideHeight: 500,
        minSlides: 2,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin: 20,
        adaptiveHeight: true,
        prevText: '<i class="fas fa-angle-left"></i>',
        nextText: '<i class="fas fa-angle-right"></i>'
      });
    });

    $(document).ready(function(){
      $('.bxsliders').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 600
      });
    });