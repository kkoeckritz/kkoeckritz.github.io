$(document).ready(function(){
  initMaterialize();
  initCustom();
});

function initMaterialize() {
  // sidenav
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
  
  // pushpin
  $('#content').pushpin({
    top: $("#content").offset().top
	});
  
  // scrollspy
  $(".scrollspy").scrollSpy({
    scrollOffset: 0
  });
}

function initCustom() {
  console.log("firing custom funcs");
}