$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var target = $(this.getAttribute('href'));

    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 100 
      }, 800, 'easeInOutExpo'); 
    }
  });
});
