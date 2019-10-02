$(function(){
  let selector = ".navbar-nav li";

  $(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
  });
  // $(selector).css({border: "3px solid"});
});


