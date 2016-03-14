$( "#content" ).delegate( "*", "focus blur", function() {
  var elem = $( this );
  setTimeout(function() {
    elem.toggleClass( "focused", elem.is( ":focus" ) );
  }, 0 );
});
var state = true; // or false
elem.toggleClass( "focused", stats );
// 2nd param determines whether or not to add or remove the class. 