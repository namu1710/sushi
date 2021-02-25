$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
    })

  var date = new Date().getFullYear()
  $('.year').text(date)
})