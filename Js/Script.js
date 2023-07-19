$('.menu-burger, .menu-items').on('click', function() {
    $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
    $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
    $(".headerLeftSection").find('img').toggle();
    $("body").toggleClass("overflowHidden");
  });