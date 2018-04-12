$(document).ready(function () {

 // this allows me to use animate.Css()
 $.fn.extend({
  animateCss: function (animationName, callback) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function () {
      $(this).removeClass('animated ' + animationName);
      if (callback) {
        callback();
      }
    });
    return this;
  }
});



// SCROLLS DOWN ON BUTTON LICK────────────────────────────────────────────────────

$("#arrowIcon").click(function () {
    scrollToAbout()
  })

  $("#nav-about").click(function () {
    console.log("hey")
    scrollToAbout()
  })

  $("#nav-contact").click(function () {
    scrollToContact()
  })

  $("#nav-portfolio").click(function () {
    scrollToPortfolio()
  })

  function scrollToPortfolio() {
    $('html,body').animate({
      scrollTop: $("#carouselDiv").offset().top
    },
      'slow');
  }


  function scrollToAbout() {
      console.log("HI im scrollToAbout");
    $('html,body').animate({
      scrollTop: $(".sectionAbout").offset().top
    },
      'slow');
  }

  function scrollToContact() {
    $('html,body').animate({
      scrollTop: $(".sectThree").offset().top
    },
      'slow');
  }


  $("#secondArrow").click(function () {
    $('html,body').animate({
      scrollTop: $("#carouselExampleIndicators").offset().top
    },
      'slow');
  });


//   END OF JQUERY DOC-ON-READY
});