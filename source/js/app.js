function initSliderMain() {
  $('[data-slider-main]').slick({
    arrows: false,
    variableWidth: true,
    slidesToShow: 3,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          adaptiveHeight: true,
        }
      }
    ]
  })
}


function setCurrentYear() {
  $('[data-current-year]').text(new Date().getFullYear())
}

function initWow() {
  var wow = new WOW(
    {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
      scrollContainer: null
    }
  );
  wow.init()
}

$(document).ready(function() {
  setCurrentYear()
  initWow()
  initSliderMain()

  $("input").inputmask()
});
