
/*

'this' in event handler points to the html dom element that
trigger the event. 

wrap a $ around to make it jquery object. 


 */

$( "#dataTable tbody" ).on( "click", "tr", function() {
  console.log( $( this ).text() );
});