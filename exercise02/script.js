/*  This refactored code assumes that the HTML follows best practices 
and the "nav" ID is present only once in the HTML layout */

$(document).ready(function() {
  
  $('#nav > li > a').click(function() {
    //first, we test if the clicked element is the active one, base on that we define the current of empty classd to be applied
    const activeItem = $(this).parent().hasClass('current') ? '' : 'current';
    //Removing the "current"class and hiding the submenus happens whether we select a new menu item or click on the active item
    $('#nav').find('.current').removeClass('current').find('ul:visible').slideUp(250);
    //We apply the class from the evaluation made by the constant "activeItem"
    $(this).parent().addClass(activeItem);
    //Finally, if we have determined that the clicked item will be the new active one, we show the submenu
    if(activeItem === 'current') {
      $(this).siblings('ul').slideDown(250);
    }
    return false;
  });
  
});