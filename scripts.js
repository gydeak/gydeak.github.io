var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("container");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

$('#button1').hover(function() {
  $('#img1').css("width", "120px");
    }, function(){
    $('#img1').css("width", "90px");
  });

$('#button2').hover(function() {
  $('#img2').css("width", "120px");
    }, function(){
    $('#img2').css("width", "90px");
  });

$('#button3').hover(function() {
  $('#img3').css("width", "120px");
    }, function(){
    $('#img3').css("width", "90px");
  });

$('#button4').hover(function() {
  $('#img4').css("width", "120px");
    }, function(){
    $('#img4').css("width", "90px");
  });

/*$('#button1').click((event) {
  $('#img1').css("width", "120px");
    }, function(){
    $('#img1').css("width", "90px");
  });
  */
 
  