$(document).ready(function() {
  var mins;

  $('.submit-btn').click(function(e) { 
    e.preventDefault();
    mins = parseInt($('#minutes').val());
    $('.box').text(mins);
  });

  $('#start').on('click', function() {
    $('.box').text(' ');
    setInterval(function timer() {
    $('.box').text(mins--);
    if (mins == -1) {
        //$('.box').fadeOut('slow');
        //clearInterval(timer); 
        for(i=0; i<100; i++) {
          window.clearInterval(i);
        }  
    }  
    $('#stop').on('click', function(){
     for(i=0; i<100; i++) {
      window.clearInterval(i);
    }
    });
      
    return timer;
    }(), 1000);

 });
  
  $("#reset").on("click", function() {
    $('#minutes').val('');
    $('.box').text(' ');

 });
});

