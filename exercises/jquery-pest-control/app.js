var goombaPrice = 60
var bobsPrice = 56
var cheepPrice = 55
var audio = $('#pipeSound');

$("#totalButton").click(function(){
	$("#output").text("171 Coins");
	audio.play();
});

$('#nightTime').click(function(){
	$('body').toggleClass('darkBackground');
})

