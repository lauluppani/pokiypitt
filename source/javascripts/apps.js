navExpands = function () {
  $('header').addClass('nav-is-open');
  $('button.lines-button.x').addClass('close');
  $('header nav .row.hide').slideDown(1000);
}
navCollapses = function () {
  $('header').removeClass('nav-is-open');
  $('button.lines-button.x').removeClass('close');
  $('header nav .row.hide').slideUp(1000);
}

mobileClass = function () {
  var windowWidth = $(window).width();
  if ( windowWidth < 768 ) {
    $('body').addClass('mobile');
    $('button.lines-button.x').hasClass('close');
    if ($('nav .wrapper').hasClass('closed')) {
      navExpands();
    }
    
  } else {
    $('body').removeClass('mobile');
    if (!$('nav .wrapper').hasClass('closed')) {
      navCollapses();
    }

  }
}


$(document).ready(function(){

  mobileClass();

  // Animated Hamburger Icon  
  $('button.lines-button.x').click(function() {
    if ( !$(this).hasClass('close') ) {
      navExpands();
      if ($('body').hasClass('mobile')) {
      }    
    } else {
      navCollapses();
      if ($('body').hasClass('mobile')) {
      } 
    }      
    return false;
  });

  $('.galeria-wrapper').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true,
      tCounter: ''
    }
  });
});


var initialScrollEvent = true;

$(window).scroll(function() {
  if (!initialScrollEvent) {
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
        $("body").addClass("scroll");
    } else {
        $("body").removeClass("scroll");
    }
  }
  initialScrollEvent = false;
});

$(window).resize(function() {
  mobileClass();
});


