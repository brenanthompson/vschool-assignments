var tauntsArr = ['n00b!', 'YOU LIVE IN A FOSTER HOME!', 'NICE YELLOW TEETH YOU HAVE THERE HONKEY', "YOUR PARENTS DON'T LOVE YOU"];
var randomMath = function (min, max) {
   return Math.floor(Math.random() * (max - min) + min);
};

$('#subButton').click(function () {
	var name = $('#name').val();
	var game = $('#game').val();
	var date = $('#date').val();
	var score = $('#score').val();
	
	if ($('#tauntOne').prop('checked')) {
		var i = randomMath(4, 0);
			var taunts = tauntsArr[i];
	} else {
			var taunts = "I'm a pansy!";
	};

	var newPerson = $('#highScores').append(`<tr><td> ${name}  </td><td> ${game}</td> <td> ${date} </td> <td> ${score} </td> <td> ${taunts} </td> </tr>`);
});
