function linkSelect (select_on, select_off) {
  $(select_off).css("background", "none");
  $(select_on).css("background", "black");
}
$(document).ready(function () {
    $('.parallax').parallax();
    $('.sidenav').sidenav().on('click tap', '.a', () => {
      $('.sidenav').sidenav('close');; //comp/Header
    });
    $(".dropdown-trigger").dropdown({ hover: true }); //comp/Header
    $(".a").click(function () {
      $('html, body').animate({ scrollTop: 0 }, 'fast'); //slow, medium, fast
    });
    $(".nav").click(function () {
      $('html, body').animate({ scrollTop: 0 }, 'fast'); //slow, medium, fast
    });
    linkSelect(".hm", "");
    $(".hm").click(function(){
      linkSelect(this, ".page");
    });
    $(".qs").click(function(){
      linkSelect(this, ".page");
    });
    $(".wk-drop").click(function(){
      linkSelect(".wk", ".page");
    });
    $(".local").click(function(){
      linkSelect("", ".page");
    });
    $(".hm-footer").click(function(){
      linkSelect(".hm", ".page");
    });
    $(".qs-footer").click(function(){
      linkSelect(".qs", ".page");
    });
    $(".wk-footer").click(function(){
      linkSelect(".wk", ".page");
    });
  });