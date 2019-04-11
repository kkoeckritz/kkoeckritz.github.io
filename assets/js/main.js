$(document).ready(function(){
  initMaterialize();
  // custom.carousel.slide("intro_carousel");
  custom.carousel.slide("portfolio_carousel");
  custom.text.change();
});

/**
 * Initialize Materialize objects
 */
function initMaterialize() {
  
  // pushpin
  $("#nav_float").pushpin({
    top: $("#nav_float").offset().top
  });
  
  $(".parallax").parallax();
  
  // scrollspy
  $(".scrollspy").scrollSpy({
    scrollOffset: 0
  });

  // // carousels
  // $("#intro_carousel").carousel({
  //   fullWidth: true,
  //   indicators: false,
  //   duration: 500
  // });

  $("#portfolio_carousel").carousel({
    fullWidth: true,
    indicators: true,
    duration: 400
  });

  // modal
  $('.modal').modal();
}

var custom = {

  carousel: {
    elem: {},
    inst: {},
    invl: {},
    slide: (c_id) => {

      // scroll through carousel every 10 seconds
      custom.carousel.elem[c_id] = document.getElementById(c_id);
      custom.carousel.inst[c_id] = M.Carousel.getInstance(custom.carousel.elem[c_id]);
      custom.carousel.invl[c_id] = setInterval(() => {

        // slide or cancel interval if touched
        if (c_id != "intro_carousel" && (custom.carousel.inst[c_id].pressed || custom.carousel.inst[c_id].dragged)) {
          clearInterval(custom.carousel.invl[c_id]);
          // console.log("halt!");
          custom.carousel.inst[c_id].options.duration = 200;
        } else {
          custom.carousel.inst[c_id].next();
          // console.log("slide!");
        }
      }, 10000);
    }
  },

  text: {
    invl: 0,
    choices: [
      "Unique?",
      "Beautiful?",
      "Distinctive?",
      "Engaging?",
      "Incredible?",
      "Bold?",
      "Spectacular?"
    ],
    change: () => {
      custom.text.invl = setInterval(() => {
        $("#intro_change").fadeOut(500, () => {
          $("#intro_change")
          .text(custom.text.choices[Math.floor(Math.random() * custom.text.choices.length)])
          .fadeIn(500);
          // console.log("change!");
        })
      }, 10000);
    }
  }
}