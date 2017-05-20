//Side Bar Toggle
function openNav() {
    document.getElementById("mySidenav").style.width = "430px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
//Slider animation
function slide1(){
	$('#progress-bar1').animate({width: "90px"},6000);
}
function slide2(){
	$('#progress-bar2').animate({width: "90px"},6000);
}
function slide3(){
	$('#progress-bar3').animate({width: "90px"},6000);
}
function slide4(){
  $('#progress-bar4').animate({width: "90px"},6000);
}
function resetslider1(){
  $("#progress-bar1").css("width","0px");
}
function resetslider2(){
  $("#progress-bar2").css("width","0px");
}
function resetslider3(){
  $("#progress-bar3").css("width","0px");
}
function resetslider4(){
  $("#progress-bar4").css("width","0px");
}


function allsliders(){

	setTimeout(slide1,0000);

	setTimeout(slide2,7000);
	
	setTimeout(slide3,13000);
	  setTimeout(slide4,20000);
  resetslider1();
  resetslider2();
  resetslider3();
  resetslider4();
	
}


$(document).ready(function(){
allsliders();
var a=document.getElementById("im");
var array=["images/pic2.jpg","images/pic3.jpg","images/pic4.jpg","images/pic1.png"];
var c=0;
function move(){
a.setAttribute("src",array[c]);

c++;
if(c>=array.length)
c=0;
}
var y=setInterval(move,7000);

$("#progress-bar1").click(function(){
	$("#progress-bar1").stop(true,true);
	$("#progress-bar2").css("width","90px");
    $("#progress-bar3").css("width","90px");
    $("#progress-bar4").css("width","90px");
    clearInterval(y);
    a.setAttribute("src","images/pic1.png");
    clearInterval(progmove);
    /*document.getElementById("2").style.display="none";
    document.getElementById("3").style.display="none";
    document.getElementById("4").style.display="none";
    document.getElementById("1").style.display="block";
    document.getElementById("fig").style.webkitAnimationPlayState="paused";
*/
});


$("#progress-bar2").click(function(){
  $("#progress-bar2").stop(true,true);
  $("#progress-bar1").css("width","90px");
    $("#progress-bar3").css("width","90px");
    $("#progress-bar4").css("width","90px");
    clearInterval(y);
    a.setAttribute("src","images/pic2.jpg");
    clearInterval(progmove);
    /*document.getElementById("1").style.display="none";
    document.getElementById("3").style.display="none";
    document.getElementById("4").style.display="none";
    document.getElementById("2").style.display="block";
    document.getElementById("fig").style.webkitAnimationPlayState="paused";
 */ });


$("#progress-bar3").click(function(){
  $("#progress-bar3").stop(true,true);
  $("#progress-bar2").css("width","90px");
    $("#progress-bar1").css("width","90px");
    $("#progress-bar4").css("width","90px");
    clearInterval(y);
    a.setAttribute("src","images/pic3.jpg");
    clearInterval(progmove);
    /*document.getElementById("2").style.display="none";
    document.getElementById("1").style.display="none";
    document.getElementById("4").style.display="none";
    document.getElementById("3").style.display="block";
     document.getElementById("fig").style.webkitAnimationPlayState="paused";
*/
});


$("#progress-bar4").click(function(){
  $("#progress-bar4").stop(true,true);
  $("#progress-bar2").css("width","90px");
    $("#progress-bar3").css("width","90px");
    $("#progress-bar1").css("width","90px");
    clearInterval(y);
    a.setAttribute("src","images/pic4.jpg");
    clearInterval(progmove);
    /*document.getElementById("2").style.display="none";
    document.getElementById("3").style.display="none";
    document.getElementById("1").style.display="none";
    document.getElementById("4").style.display="block";
  document.getElementById("fig").style.webkitAnimationPlayState="paused";
*/
});
var progmove=setInterval(allsliders,28000);
});