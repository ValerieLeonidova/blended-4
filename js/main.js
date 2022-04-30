
    (function($){
        $(window).on("load",function(){
            $(".text-scroll").mCustomScrollbar({
                theme:"light-thin"
            });
        });
        
        $('.work-examples').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            infinite: false,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        });
    })(jQuery);
