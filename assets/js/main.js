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



// this creates animations first section
$('.jumbo-Container').animateCss('flipInX', function () {
  $('.jumbotron-text').css("display", "block").animateCss('fadeIn');
});



// SCROLLS DOWN ON BUTTON LICK────────────────────────────────────────────────────

  $("#nav-home").click(function () {
    scrollToHome()
  })

  $("#down-arrow").click(function () {
    scrollToAbout()
  })

  $("#nav-about").click(function () {
    scrollToAbout()
  })

  $("#nav-exp").click(function () {
    scrollToExp()
  })

  $("#nav-edu").click(function () {
    scrollToEducation()
  })

  $("#nav-pro").click(function () {
    scrollToProjects()
  })

  $("#nav-skills").click(function () {
    scrollToSkills()
  })

  $("#nav-con").click(function () {
    scrollToSkills()
  })

  function scrollToHome() {
    $('html,body').animate({
      scrollTop: $(".jumbo-Container").offset().top
    },
      'slow');
  }

  function scrollToEducation() {
    $('html,body').animate({
      scrollTop: $(".education").offset().top
    },
      'slow');
  }

  function scrollToAbout() {
      console.log("HI im scrollToAbout");
    $('html,body').animate({
      scrollTop: $(".about").offset().top
    },
      'slow');
  }

  function scrollToExp() {
    $('html,body').animate({
      scrollTop: $(".experience").offset().top
    },
      'slow');
  }

  function scrollToProjects() {
    $('html,body').animate({
      scrollTop: $(".projects").offset().top
    },
      'slow');
  }

  function scrollToSkills() {
    $('html,body').animate({
      scrollTop: $(".skills").offset().top
    },
      'slow');
  }


  // $("#secondArrow").click(function () {
  //   $('html,body').animate({
  //     scrollTop: $("#carouselExampleIndicators").offset().top
  //   },
  //     'slow');
  // });


//   END OF JQUERY DOC-ON-READY
});