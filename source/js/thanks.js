function getTitleTemplate(name, city) {
  var name = name || 'Спасибо'
  var nameTemplate = [
    '<h1 class="thanks-section__title">',
    name,
    ',',
    '<br>',
    '<span class="text-white"> благодарим вас за обращение в компанию ---COMPANY--- ©</span>',
    '</h1>',
  ]
  var cityTemplate = [
    '<h1 class="thanks-section__title">',
    name,
    ',',
    '<span class="text-white"> благодарим Вас за заявку </span>',
    '<br>',
    '<span class="text-white">на город ',
    city,
    '</span>',
    '<span class="text-white"> на франшизу </span>',
    '<br>',
    '<span class="text-white">в компанию ---COMPANY--- ©</span>',
    '</div>',
    '</h1>',
  ]

  return city ? cityTemplate.join('') : nameTemplate.join('')
}

function getDocumentTitle(name) {
  return name
    ? name + ', спасибо, ваша заявка принята'
    : 'Cпасибо, ваша заявка принята'
}

function setTitle() {
  var lead_name = localStorage.getItem('lead_name')
  var city = localStorage.getItem('city')
  
  document.querySelector('[data-thanks-title]').innerHTML = getTitleTemplate(lead_name, city)
  document.title = getDocumentTitle(lead_name)
}

$(document).ready(function () {
  setTitle()
})
