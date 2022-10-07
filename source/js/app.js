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

function initDemandToggle() {
  $('.js-arrow-demand').on('click', function () {
    $('.js-arrow-demand').removeClass('active')
    $(this).closest('.js-demand-parent').find('.js-demand-item').toggleClass('active')
  })
}

function initFinanceToggle() {
  $('.js-finance-click').on('click', function () {
    $(this).toggleClass('active-finance')
    $(this).closest('.js-finance-parent').find('.js-finance-content').slideToggle()
  })
}


function initRangeSlider() {
  var $range1 = $(".js-range-slider-1");
  var $range2 = $(".js-range-slider-2");
  var $range3 = $(".js-range-slider-3");
  var $total = $(".js-price")
  var $totalProfit = $(".js-total-profit")
    a = 1,
    b = 80,
    c = 650,
    profitNum = 30
  function sum() {

    var resultRevenue = a * b * c * profitNum
      $total.text(resultRevenue.toLocaleString());

    var resultProfit = resultRevenue * 26.76 / 100
      $totalProfit.text(resultProfit.toLocaleString());

  }

  sum()

  $range1.ionRangeSlider({
    skin: "big",
    type: "single",
    min: 1,
    max: 3,
    step: 1,
    grid: true,
    grid_snap: true,
    hide_min_max: true,
    hide_from_to: true,
    from: 1,
    prettify_enabled: false,
    onChange: function (data) {
      a = data.from;
      sum();
    }
  });

  $range2.ionRangeSlider({
    skin: "big",
    min: 75,
    max: 85,
    step: 5,
    grid: true,
    grid_snap: true,
    hide_min_max: true,
    hide_from_to: true,
    from: 80,
    onChange: function (data) {
      b = data.from;
      sum();
    }
  });

  $range3.ionRangeSlider({
    skin: "big",
    type: "single",
    min: 550,
    max: 800,
    step: 50,
    grid: true,
    grid_snap: true,
    hide_min_max: true,
    hide_from_to: true,
    from: 650,
    onChange: function (data) {
      c = data.from;
      sum();
    }
  });
  $('[data-tab-button]').on('click', function () {
    var id = $(this).attr('data-tab-target')
    var $tab = $('[data-tab="' + id + '"')

    $('[data-tab-button]').removeClass('active')
    $('[data-tab]').removeClass('active')

    $(this).addClass('active')
    $tab.addClass('active')
  })
};

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
  initDemandToggle()
  initFinanceToggle()
  initRangeSlider()

  $("input").inputmask()
});
