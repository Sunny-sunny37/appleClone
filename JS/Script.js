$(document).ready(function () {
  $(".menu-title").click(function () {
    if ($(window).width() <= 768) {
      $(this).next(".menu-list").slideToggle();
    }
  });
});
