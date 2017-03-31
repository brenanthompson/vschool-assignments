$('#addBtn').click(function () {
	var groceries = $('#groceries').val();

	var newGroceries = $('.shoppingList').append(`<li id="listItem"><button type="button" id="deleteBtn" class="btn btn-default">X</button> ${groceries} </li>`);
	$('#deleteBtn').click(function(){
		$(this).parent().remove();
	});

});
