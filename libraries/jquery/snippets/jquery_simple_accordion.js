

$('#accordion').find('.content').hide(); 
$('#accordion').find('.accordion-header').click(function() {
  var next = $(this).next();
  next.slideToggle('fast');
  $('.content').not(next).slideUp('fast');
  return false;
});