$( "#draggable" ).draggable();
$( "#droppable" ).droppable({
	drop: function() {
		alert( "dropped" );
	}
});

