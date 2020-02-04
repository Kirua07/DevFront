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
$('#box1').click(function(){
  $(this).css('background-color','pink')
  $(this).hide(4000);
});
$('#box2').click(function(){
  $(this).css('background-color','purple')
  $(this).fadeOut(2000);
});
$('#box3').click(function(){
  $(this).css('background-color','blue')
  $(this).slideUp(4000);
});

  $('#animate div').click(function(){
      $(this).animate({
        "left":"300px"
      }, 3000);
      $(this).animate({
        "widht":"1000px"
      }, 4000);
  });

  $('li').addClass('alerte');
  $('#no-alerte').click(function(){
    $('li').removeClass();
  });

  var i= $('li').length + 1;
  //alert(i);
  $('#plus').click(function(){
    $('<li>ligne ' + i + '</li>').appendTo('ul');
    i++;
  });

  $('#moins').click(function(){
    $('li:last').remove()
    i--;
  });

  // agrandir ou diminuer la police
  $('boutton.taille').click(function(){
    var os = $('#toogle p').css('font-siaz');
    var number = parseFloat(os);
    var uom = os.slice(-2);
    if (this.id=='pluspetit') {
      number /= 1.4;
    }else{
      number *= 1.4;
    }
    console.log(number);
  });

});