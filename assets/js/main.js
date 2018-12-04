$(document).ready(function(){
  initMaterialize();
  initCustom();
});

/**
 * Initialize Materialize objects
 */
function initMaterialize() {
  
  // pushpin
  $('#content').pushpin({
    top: $("#content").offset().top
	});
  
  // scrollspy
  $(".scrollspy").scrollSpy({
    scrollOffset: 0
  });

  // slider
  $('.slider').slider();
}

function initCustom() {
  console.log("firing custom funcs");
}