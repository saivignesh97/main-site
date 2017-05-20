$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $("nav").css('background-color', '#fff');
          $('#CS').css('color','red');
          $('#DS').css('color','red');
          $("a").css('color','#000');
          $('#colbut').css('color','#000');
          $('.sidenav .cont-sidenav a').css('color','#000');
          $('.sidenav').addClass('sidehover');
          $('#sidebar-toggle').css('color','#000');
$("nav").css('box-shadow','2px 2px 2px #333');
       } else {
          $("nav").css('background-color', 'transparent');
          $('#CS').css('color','white');
          $('#DS').css('color','white');
          $("a").css('color','#fff');
          $('.sidenav .cont-sidenav a').css('color','#000');
                    $('#colbut').css('color','#fff');
                    $('#sidebar-toggle').css('color','#fff');

          $("nav").css('box-shadow','0px 0px 0px transparent');

       }
   });
});