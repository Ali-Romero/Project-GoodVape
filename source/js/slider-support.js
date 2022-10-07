function initSliderSupport() {
  var progress = {
    $target: null,
    renderWrapper($el) {
      $el.addClass('progress-bar')

      $el.html(`
          <div class="progress-bar__track"></div>
          <div class="progress-bar__items"></div>
        `)

      return $el
    },
    init($target, count) {
      this.$target = this.renderWrapper($target);

      var elements = new Array(count - 1).fill('').map(function (_, i, arr) {
        var num = i + 1
        return {
          number: num,
          isLast: arr.length === num,
        }
      })

      var html = elements.map(function (el) {
        var inner = el.isLast ? `
            <div class="progress-bar__number">${el.number}</div>
            <div class="progress-bar__number">${count}</div>
          ` : `<div class="progress-bar__number">${el.number}</div>`

        return `<div class="progress-bar__item" data-progress-value="${el.number}">
            ${inner}
          </div>`
      }).join('')

      $target.find('.progress-bar__items').html(html)
    },
    set(number) {
      this.$target.find('.progress-bar__number').removeClass('active')

      this.$target.find(`.progress-bar__number:lt(${number})`).addClass('active')

      if (number === 1) {
        this.$target.find('.progress-bar__track').css({ width: '' })

        return
      }

      var $item = this.$target.find(`[data-progress-value="${number - 1}"]`)
      var left = $item.offset().left - this.$target.offset().left
      var offset = $item.width() + left

      this.$target.find('.progress-bar__track').css({ width: offset })  
    }
  }

  var sliderSupport = $('[data-slider-support]');

  sliderSupport.on('init', function (event, slick, currentSlide) {
    var cur = $(slick.$slides[slick.currentSlide])
    var next = cur.next();
    var prev = cur.prev();

    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    cur.removeClass('slick-snext').removeClass('slick-sprev');
    slick.$prev = prev;
    slick.$next = next;
  })

  sliderSupport.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var cur = $(slick.$slides[nextSlide]);
    var next = cur.next();
    var prev = cur.prev();

    slick.$prev.removeClass('slick-sprev');
    slick.$next.removeClass('slick-snext');
    prev.prev();
    prev.next();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    slick.$prev = prev;
    slick.$next = next;
    cur.removeClass('slick-next').removeClass('slick-sprev');
  });

  sliderSupport.on('init', function (event, slick) {
    progress.init($('.js-progress'), slick.slideCount)
    progress.set(1)
  })

  sliderSupport.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    progress.set(nextSlide + 1)
  })

  sliderSupport.slick({
    speed: 100,
    arrows: true,
    dots: true,
    focusOnSelect: true,
    prevArrow: $('.support-arrow-prev'),
    nextArrow: $('.support-arrow-next'),
    infinite: false,
    centerMode: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    swipe: true,
    customPaging: function (slider, i) {
      return '';
    },
  });
};



$(document).ready(function () {
  initSliderSupport()
});
