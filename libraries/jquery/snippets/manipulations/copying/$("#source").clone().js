var source = "https://api.jquery.com/clone/"

// regardless of parameter, it will deep clone selected elements. 
// no div element in p element. 

$( "#source" ).clone().prependTo( "p" );
$( "#source" ).clone().insertAfter( this );

.clone(true); // clone with 1st level with DataAndEvents 
.clone(true, true); // clone with deep DataAndEvents
