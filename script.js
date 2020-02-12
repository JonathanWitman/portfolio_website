$(document).ready(function(){

    let sizeSmall = window.matchMedia("(max-width: 871px)");
    let showBurger = 1;

//Toggle Nav
    if (jQuery(window).width() < 871) {
      $(".nav_container").hide();
      $('.hamburger').show();
    } else {
      $('.hamburger').hide();
      $(".nav_container").show();
    }
    jQuery(window).resize(function () {
      if (jQuery(window).width() < 871) {
        if (showBurger == 1) {
          $(".nav_container").hide();
        }
        $('.hamburger').show();
      } else {
        $('.hamburger').hide();
        $(".nav_container").show();
      }
    });
    $(".hamburger").click(function(){
      if (showBurger == 1) {
        $(".nav_container").show();
        showBurger = showBurger - 1;
      } else {
        $(".nav_container").hide();
        showBurger = showBurger + 1;
      }
    });

//Front end image hover effects
    $('.fe_jquery_wrapper').hover(function () {
      if (sizeSmall.matches) {
        $('.fe_button').addClass('fe_button_hover');
      } else {
        $(this).addClass('fe_img_hover');
        $('.fe_button').addClass('fe_button_hover');
      }
    });
    $( ".fe_jquery_wrapper" ).mouseout(function() {
      $('.fe_button').removeClass('fe_button_hover');
      $('.fe_jquery_wrapper').removeClass('fe_img_hover');
    });

});
