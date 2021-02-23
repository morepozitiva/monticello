(function() {
  "use strict";

    var dialog = document.getElementById('modal1');
    document.querySelector('#show').onclick = function() {
      dialog.showModal();
    };
    document.querySelector('#close').onclick = function() {
      dialog.close();
    };
    var dialog2 = document.getElementById('modal2');
    document.querySelector('#show2').onclick = function() {
      dialog2.showModal();
    };
    document.querySelector('#close2').onclick = function() {
      dialog2.close();
    };

    $('.slider').slick()

    $('.slider2').slick({
      infinite: true,
      lazyLoad: 'ondemand',
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      responsive: [
        {
          breakpoint: 1164,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,       
          }
        },
        {
          breakpoint: 968,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  })();

