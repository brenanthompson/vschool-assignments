$('#addBtn').click(function () {
	var groceries = $('#groceries').val();

	var newGroceries = $('.shoppingList').append(`<li id="listItem"><button type="button" class="deleteBtn btn btn-default">X</button> ${groceries} </li>`);
	$('.deleteBtn').click(function(){
		$(this).parent().remove()
		console.log(this)
	});

});
