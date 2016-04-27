/*

<div class="room" id="kitchen">
    <div class="lightbulb on"></div>
    <div class="switch"></div>
    <div class="switch"></div>
    <div class="clapper"></div>
</div>
<div class="room" id="bedroom">
    <div class="lightbulb on"></div>
    <div class="switch"></div>
    <div class="switch"></div>
    <div class="clapper"></div>
</div>
<div id="master_switch"></div>


 */


$( ".lightbulb" ).on( "light:toggle", function( event ) {
    var light = $( this );
    if ( light.is( ".on" ) ) {
        light.trigger( "light:off" );
    } else {
        light.trigger( "light:on" );
    }
}).on( "light:on", function( event ) {
    $( this ).removeClass( "off" ).addClass( "on" );
}).on( "light:off", function( event ) {
    $( this ).removeClass( "on" ).addClass( "off" );
});
 
$( ".switch, .clapper" ).click(function() {
    var room = $( this ).closest( ".room" );
    room.find( ".lightbulb" ).trigger( "light:toggle" );
});
 
$( "#master_switch" ).click(function() {
    var lightbulbs = $( ".lightbulb" );
 
    // Check if any lightbulbs are on
    if ( lightbulbs.is( ".on" ) ) {
        lightbulbs.trigger( "light:off" );
    } else {
        lightbulbs.trigger( "light:on" );
    }
});



// example 2: event with data
$( document ).on( "myCustomEvent", {
    foo: "bar"
}, function( event, arg1, arg2 ) {
    console.log( event.data.foo ); // "bar"
    console.log( arg1 );           // "bim"
    console.log( arg2 );           // "baz"
});
 
$( document ).trigger( "myCustomEvent", [ "bim", "baz" ] );

