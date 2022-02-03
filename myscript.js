$(document).ready(function(){
	for(let n=1; n <= 10; n++)
	{
    $(".wrong"+n).click(function(){
      $(".wrong"+n).css({"background-color": "red"});
        alert("Non!");
});

	$(".right"+n).click(function(){
	  $(".right"+n).css({"background-color": "lime"});
	    $(".go"+n).css({"visibility": "visible"});
});

	$(".go1").click(function(){
	  $(".q1").css({"display": "block"});
});

	$(".go2").click(function(){
	  $(".q2").css({"display": "block"});
});

	$(".go3").click(function(){
	  $(".q3").css({"display": "block"});
});

	$(".go4").click(function(){
	  $(".q4").css({"display": "block"});
});

	$(".go5").click(function(){
	  $(".q5").css({"display": "block"});
});

	$(".go6").click(function(){
	  $(".q6").css({"display": "block"});
});

	$(".go7").click(function(){
	  $(".q7").css({"display": "block"});
});

	$(".go8").click(function(){
	  $(".q8").css({"display": "block"});
});

	$(".go9").click(function(){
	$(".questions").fadeOut();
	$(".answers").fadeOut();
	$(".suivante").fadeOut();
	$("h1").fadeOut();
	$("body").css({"background-color": "black"});
	$("#fin").css({"display": "block"});
});

	}
});
