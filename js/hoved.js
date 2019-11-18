$('li').click(function() {
  $(this).siblings().find('a').removeClass('focus');
  $(this).find('a').addClass('focus');
});
