
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

  $("input").inputmask()
});
