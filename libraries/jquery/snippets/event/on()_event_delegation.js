/*
	On a data table with 1,000 rows in its tbody, 
	this example attaches a handler to 1,000 elements:
*/


$( "#dataTable tbody tr" ).on( "click", function() {
	// this is standard event binding, to every matched tr element
  console.log( $( this ).text() );
});

// below is event delegation



$( "#dataTable tbody" ).on( "click", "tr", function() {
  console.log( $( this ).text() );
});

