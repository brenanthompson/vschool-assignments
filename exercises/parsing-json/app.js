//var xhttp = new XMLHttpRequest();
//xhttp.onreadystatechange = function(){
//	if (this.readyState == 4 && this.status == 200){
////		code here
//	}
//}
//xhttp.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
//xhttp.send();

$("#pokeButton").click(function () {
	$.get("http://api.vschool.io:6543/pokemon.json", function (parsePokemon) {
		for (var i = 0; i < parsePokemon.objects[0].pokemon.length; i++) {
			var node = document.createElement("div");
			var textNode = document.createTextNode(parsePokemon.objects[0].pokemon[i].name);
			node.appendChild(textNode)
				//		console.log(parsePokemon.objects[0].pokemon[i].name);
			document.getElementById("pokeNames").appendChild(node);
		}
	});
});