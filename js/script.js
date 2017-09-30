$('.peek-a-boo .clickable').click(function() {
  $('#bird-showing').slideToggle();
  $('#bird-hidden').slideToggle();
});

$('.image .clickable').click(function() {
  $('#image-showing').fadeToggle();
  $('#image-hidden').fadeToggle();
});
