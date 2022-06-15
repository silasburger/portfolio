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
    $('section').each(function(i) {
      if ($(this).position().top <= scrollDistance + viewHeight / 2) {
        $('.nav-link.active').removeClass('active');
        $('.nav-link')
          .eq(i)
          .addClass('active');

        $('.mobile-nav-link.active').removeClass('active');
        $('.mobile-nav-link')
          .eq(i)
          .addClass('active');
      }
    });
    if (Math.trunc(scrollDistance + viewHeight) >= Math.trunc($('.content').height())) {
      $('#navigation li a.active').removeClass('active');
      $('.nav-link.active').removeClass('active');
      $('.contact-link').addClass('active');
    } else if (scrollDistance === 0) {
      $('#navigation li a.active').removeClass('active');
      $('.nav-link.active').removeClass('active');
      $('.about-me-link').addClass('active');
    }
  })
  .scroll();
