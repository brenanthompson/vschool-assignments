$('#clickCounter').click(function () {
	if (localStorage.getItem('highScore')) {
		var count = localStorage.getItem('highScore')
		count++;
		localStorage.setItem('highScore', count);
		$('#output').html(function () {
			return count
		});
	} else {
		var count = 1;
		localStorage.setItem('highScore', count)
	}
});



//$(function(){
//	var highScore = localStorage.getItem('highScore');
//	highScore = highScore ? 
//});
