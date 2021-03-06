$( document ).ready(function() {
  new WOW().init();

  $(window).load(function () {
    $(".loader-wrap").fadeOut(400,function () {
        $(this).remove();
        $(".loader-wrap").css({"display": "none"});
    });
    
});


$(window).on("scroll", function(){

  $('a[data-scroll]').on("click",function (e) {
    e.preventDefault();
    //Set Offset Distance from top to account for fixed nav
    var offset = 80;
    var target = ('#' + $(this).data('scroll'));
    var $target = $(target);
    //Animate the scroll to, include easing lib if you want more fancypants easings
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - offset
    }, 1000);
  });

});



  $('.sec-three .owl-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:false,
    rtl:true,
    dots:false,
    responsive:{
        0:{
            // autoWidth:true,
            items:1,
            dots:true,
            nav: false,
            loop: true
        },
        600:{
            items:3
        },
        1200:{
            items:5
        }
        
    }
  });
  $('.sec-four .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    rtl:true,
    stagePadding: 15,
    dots:true,
    responsive:{
        0:{
            items:2,
            dots:true
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})
$('.sponser .owl-carousel').owlCarousel({
  loop:false,
  margin:10,
  nav:false,
  dots:false,
  rtl:true,
  responsive:{
      0:{
          items:2,
          dots:true
      },
      600:{
          items:3
      },
      1000:{
          items:8
      }
  }
})
$("#menu").on("click", function () {

  $(".sm-nav").show();
  $(".sm-nav .menu").animate({"right": "0"});
  $("html").css({"overflow":"hidden"});

});
$(".sm-nav .overlay").on("click", function () {

  $(".sm-nav").fadeOut(300);
  $(".sm-nav .menu").animate({"right": "-290px"});
  $("html").css({"overflow":"auto"});

});
$(".sm-nav .fa-times").on("click", function () {

  $(".sm-nav").css({"display": "none"});
  $("html").css({"overflow":"auto"});

});

  // Toggle open
  $(".sideNav li").on("click", function(e) {
    $(this).find(".drop").slideToggle();
    $(this).siblings().find(".drop").slideUp();
    $(this).find("i").toggleClass("open");
    $(this).siblings().find("i").removeClass("open");
    e.stopPropagation();
});


  // open Side Nav
  $(".menuTriger").on("click", function() {
      $(this).fadeOut();
      $(".sideNav").toggleClass("open");
      $(".navover").toggleClass("open");
      $("body").css("overflow", "hidden");
  });


  // Close Side Nav
  $(".navover, .close1").on("click", function() {
      if($(".sideNav").hasClass("open")){
          $(".menuTriger").fadeIn();
          $(".navover").removeClass("open");
          $(".sideNav").toggleClass("open");
          $("body").css("overflow", "auto");
      }
  });

  // Main Slider
  $('.main-slider .owl-carousel').owlCarousel({
    autoplay: true,
    rtl: $('html').attr('lang') == 'ar',
    loop:true,
    nav:true,
    items: 1,
    dots: true,
    smartSpeed: 1000,
    navText: ["<span></span>","<span></span>"]
  });

  // clients Slider
  $('.clients .owl-carousel').owlCarousel({
    // autoplay: true,
    rtl:true,
    loop:true,
    nav:true,
    items: 7,
    dots: true,
    smartSpeed: 1000,
    responsive:{
      0:{
          items:1
      },
      768:{
          items:3
      },
      992:{
          items:5
      },
      1200:{
          items:7
      }
    },
    navText: ["<span></span>","<span></span>"]
  });

  //footer accordion
  if($(window).width() < 992){
    $(".foot-links button").attr("data-toggle", "collapse");
  }

  $('.foot-links button').on('click', function() {
      $(this).toggleClass("trans");
      $(this).parent().parent().siblings().find('.collapse').collapse('hide');
      $(this).parent().parent().siblings().find('button').removeClass("trans");
  });

})
