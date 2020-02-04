$(document).ready(function(){
  //  $('h1').hide();

  for ( index = 0; index < 5; index++) {
      $('<div class="col-1">').appendTo('#effets');
      }
$('#show').click(function(){
  $function('#effets div').show(2000);
});
$("#effets div").click(function(){
  $( this ).hide(2000, function(){
    
  });
});
});