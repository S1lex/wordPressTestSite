   $(document).ready(function(){
      $('.slider').bxSlider({
        slideWidth: 250,
        slideHeight: 500,
        infiniteLoop: true,
        minSlides: 2,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin: 20,
        adaptiveHeight: true,
        pager: false,
        prevText: '<i class="fas fa-angle-left"></i>',
        nextText: '<i class="fas fa-angle-right"></i>'
      });

      $(function(){
        $('.bxslider').bxSlider({
          mode: 'fade',
          slideWidth: 1200,
          pager: true,
          controls: false,
          slideHeight: 675,
        });
      });
    });

    