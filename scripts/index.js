$(document).ready(function() {
  $(".preview").hide();
  $(".preview").fadeIn(2000);
  $(".name").hide();
  $(".name").slideDown(2000);
});

$(function () {
  $('[data-toggle="popover"]').popover()
})
