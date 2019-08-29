$(document).ready(function() {
  
  $('#nav > li > a').click(function() {
    if($(this).parent().hasClass('current')) {
      $(this).parents('#nav').find('.current')
      .removeClass('current');
      $(this).parents('#nav').find('ul:visible').
      slideUp(250);
    } else {
      $(this).parents('#nav').find('.current').
      removeClass('current');
      $(this).parents('#nav').find('ul:visible').
      slideUp(250);
      $(this).parent().addClass('current');
      $(this).siblings('ul').slideDown(250);
    }
    return false;
  });
  
});