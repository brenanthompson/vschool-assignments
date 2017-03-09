document.getElementById("button").addEventListener("click", function () {
	var form = document.getElementById("form");
	var firstName = form.firstName.value;
	var lastName = form.lastName.value;
	var age = form.age.value;
	var gender = form.gender.value;
	var destination = form.destination.value;
	var foodstuffs = [];

	for (var i = 0; i < form.foodstuffs.length; i++) {
		if (form.foodstuffs[i].checked) {
			foodstuffs.push(form.foodstuffs[i].value)
		}
	}
	var gimmeForm = `First name: ${firstName} \nLast name: ${lastName} \nAge: ${age} \nGender: ${gender} \nDestination: ${destination} \nDietary restrictions: ${foodstuffs}`

	alert(gimmeForm);
})