(function() {
  /**
   * Scroll behavior
   */

  require('smooth-scroll').init({ updateURL: false })
  require('gumshoe').init({ activeClass: '-active' })

  /**
   * Spam prevention
   */

  // SUBJECT=お問い合わせ - いちょう心理オフィス
  var EMAIL = 'ichou.shinri@gmail.com'
  var SUBJECT = '%e3%81%8a%e5%95%8f%e3%81%84%e5%90%88%e3%82%8f%e3%81%9b%20%2d%20%e3%81%84%e3%81%a1%e3%82%87%e3%81%86%e5%bf%83%e7%90%86%e3%82%aa%e3%83%95%e3%82%a3%e3%82%b9'
  var contact = document.getElementById('contact')

  contact.addEventListener('click', function() {
    this.href = 'mailto:' + EMAIL + '?subject=' + SUBJECT
  })
})()
