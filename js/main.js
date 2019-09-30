$(document).ready(function(){
  let selector = ".navbar li";

  $(".navbar li").click(function(){
    $(".navbar li").removeClass('active');
    $(this).addClass('active');
  });
});


//$(".navbar ul").css({border: "3px solid"});
