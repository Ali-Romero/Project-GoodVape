function detectLeavePage() {
  $(document).one('mouseleave', function (e) {
    if (e.clientY < 10) {
      setTimeout(function() {
        $('[data-remodal-id=modal-form-leave]').remodal().open()
      }, 2000)
    }
  })
}

window.addEventListener('load', function(){
  detectLeavePage()
});