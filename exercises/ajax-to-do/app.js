var todos = [];

$.get('http://api.vschool.io/brenanthompson/todo', function (response) {
	var todos = response;

	for (var i = 0; i < todos.length; i++) {
		$('#todos').append(`<li> 
						   
		<h4>${ todos[i].title  }</h4>
		<h6>${ todos[i].title  }</h6>
		<p>${ todos[i].title }</p>
						   
	</li>`);
	}
	deleteEvent();
})

$("#submit").click(function () {
	var newTodo = {};
	newTodo.title = $("#title").val();
	newTodo.description = $("#description").val();
	newTodo.price = $("#price").val();

	console.log(newTodo);

	$.post('http://api.vschool.io/brenanthompson/todo/', newTodo, function (newTodo) {

		$('#todos').append(`<div data-item-id=${newTodo._id} class-"col-md-3 panel panel-info"> 
			<div class="panel-heading">${newTodo.title}</div>
				<div class="panel-title">${newTodo.description || "No description"}</div>
			<div class="panel-body">${newTodo.price || "No price"}</div>
			<button class="btn delete" type="button>x</button></div>
		`);
		todos.push(newTodo);
	})
	deleteEvent();
});


function deleteEvent() {

	$('.delete').click(function () {
		var _id = $(this).parent().attr("data-item-id");

		var deleteObj = {
			type: "DELETE",
			url: "http://api.vschool.io/brenanthompson/todo/" + _id,
			success: function (response) {
				console.log(response.msg)
			}
		};

		$.ajax(deleteObj);

		$(this).parent().remove();

	})
}
