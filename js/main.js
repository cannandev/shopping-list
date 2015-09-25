function addItem() {
	var newItem = $('.add-item').val();
	var list = $('.items');
	if(newItem) { // make sure the value is not empty
		$(list).append('<li>'+newItem+'</li>');
		$('.add-item').val(''); //clears input 
	}
}

$(document).ready(function(){
	$('.form-submit').on('click', addItem);

	$(document).keydown(function(event) {
		if(event.which === 13) {
			addItem();
		}
	});

	$('.items').on('click', 'li', function(event) {
		event.preventDefault();
		if($(this).hasClass('checked')){
			$(this).removeClass('checked');
		}
		else {
			$(this).addClass('checked');
		}
	});


});
