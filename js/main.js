function updateCount() {
	var count = $('.count').find('span');
	var listLength = $('.items li').not('.checked').size();
	count.text(listLength);
}

function addItem() {
	var newItem = $('.add-item').val();
	var list = $('.items');
	if(newItem) { // make sure the value is not empty
		$(list).append('<li>' + newItem + '</li>');
		$('.add-item').val(''); //clears input 
	}
	updateCount();
}

$(document).ready(function(){
	$('.form-submit').on('click', addItem);

	$(document).keydown(function(event) {
		if(event.which === 13) {
			addItem();
		}
	});

	$('.items').on('click', 'li', function(event) {
		event.preventDefault(); //do I need this?
		if($(this).hasClass('checked')){
			$(this).removeClass('checked');
		}
		else {
			$(this).addClass('checked');
		}
		updateCount();		
	}).on('mouseenter', 'li', function(event) {
		event.preventDefault();
		$(this).addClass('selected').append('<button>Remove</button');
	}).on('mouseleave', 'li', function(event) {
		event.preventDefault();
		$(this).removeClass('selected');
		$(this).find('button').remove();
	}).on('click', 'button', function(event) {
		event.preventDefault();
		$(this).parent().remove();
		updateCount();
	});

	$('.angle').click(function(){
		$(this).next('p').toggle('slow', function(){
			$('.fa-angle-double-up').toggle();
			$('.fa-angle-double-down').toggle();
		});
	});

});
