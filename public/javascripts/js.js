
$(document).ready(function(){
   $('.slider').slider({full_width: true, height: 250, indicators: false});
 });

$('#whButton').on('click', function(){
  $('.campus_info div').css("display","none")
  $('#info_wh').css("display", "block");
  $('.mapspace').css("display", "none");
  $('#WH').css("display", "block");
  initMap();
  $('.btn-large').css("background-color", "#26a69a");
  $('#whButton').css("background-color", "grey");
});

$('#temButton').on('click', function(){
  $('.campus_info div').css("display","none")
  $('#info_tem').css("display", "block");
  $('.mapspace').css("display", "none");
  $('#Tem').css("display", "block");
  initMap();
  $('.btn-large').css("background-color", "#26a69a");
  $('#temButton').css("background-color", "grey");
});

$('#ashButton').on('click', function(){
  $('.campus_info div').css("display","none")
  $('#info_ash').css("display", "block");
  $('.mapspace').css("display", "none");
  $('#Ash').css("display", "block");
  initMap();
  $('.btn-large').css("background-color", "#26a69a");
  $('#ashButton').css("background-color", "grey");
});

$('#donButton').on('click', function(){
  $('.campus_info div').css("display","none")
  $('#info_don').css("display", "block");
  $('.mapspace').css("display", "none");
  $('#Don').css("display", "block");
  initMap();
  $('.btn-large').css("background-color", "#26a69a");
  $('#donButton').css("background-color", "grey");
});

$('#hawButton').on('click', function(){
  $('.campus_info div').css("display","none")
  $('#info_haw').css("display", "block");
  $('.mapspace').css("display", "none");
  $('#Haw').css("display", "block");
  initMap();
  $('.btn-large').css("background-color", "#26a69a");
  $('#hawButton').css("background-color", "grey");
});
