$(window).on('load', function() {
  let $overlay = $('#overlay');
  let $body = $('body');
  $overlay.toggle();
  $body.toggleClass('no-scroll');

  AOS.init();

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    let target = this.hash;
    let $target = $(target);

    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top
        },
        900,
        'swing',
        function() {
          window.location.hash = target;
        }
      );
  });
});

$(window)
  .scroll(function() {
    let scrollDistance = $(window).scrollTop();
    let viewHeight = $(window).height();
    // Assign active class to nav links while scolling
    $('.main-section').each(function(i) {
      if ($(this).position().top <= scrollDistance + (viewHeight / 2)) {
        $('.nav-link.active').removeClass('active');
        $('.nav-link')
          .eq(i)
          .addClass('active');
      }
    });
    $('#projects article').each(function(i) {
      if (Math.round($(this).position().top) <= scrollDistance + (viewHeight / 2)) {
        $('#navigation li a.active').removeClass('active');
        $('#navigation li a')
          .eq(i)
          .addClass('active');
      }

      if($('#projects').position().top + $('#projects').height() <= scrollDistance + (viewHeight / 2) || $('#projects').position().top >= scrollDistance) {
        $('#navigation li a.active').removeClass('active');
      }
    });

  }).scroll();
