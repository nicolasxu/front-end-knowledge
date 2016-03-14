var source = "https://learn.jquery.com/effects/intro-to-effects/";




// Instantaneously hide all paragraphs
$( "p" ).hide(); // an inline style display:none is added to the elements
 
// Instantaneously show all divs that have the hidden style class
$( "div.hidden" ).show();
// Slowly hide all paragraphs
$( "p" ).hide( "slow" );
 
// Quickly show all divs that have the hidden style class
$( "div.hidden" ).show( "fast" );
// Hide all paragraphs over half a second
$( "p" ).hide( 500 );
 
// Show all divs that have the hidden style class over 1.25 seconds
$( "div.hidden" ).show( 1250 );
// Hide all paragraphs using a slide up animation over 0.8 seconds
$( "p" ).slideUp( 800 );
 
// Show all hidden divs using a slide down animation over 0.6 seconds
$( "div.hidden" ).slideDown( 600 );

// Hide all paragraphs using a fade out animation over 1.5 seconds
$( "p" ).fadeOut( 1500 );
 
// Show all hidden divs using a fade in animation over 0.75 seconds
$( "div.hidden" ).fadeIn( 750 );

// Doing Something After an Animation Completes
// Fade in all hidden paragraphs; then add a style class to them (not quite right)
$( "p.hidden" ).fadeIn( 750 ).addClass( "lookAtMe" );

// Fade in all hidden paragraphs; then add a style class to them (correct with animation callback)
$( "p.hidden" ).fadeIn( 750, function() {
    // this = DOM element which has just finished being animated
    $( this ).addClass( "lookAtMe" );
});

// Run a callback even if there were no elements to animate
var someElement = $( "#nonexistent" );
 
var cb = function() {
    console.log( "done!" );
};
 
if ( someElement.length ) {
    someElement.fadeIn( 300, cb );
} else {
    cb();
}

// .delay() is used to introduce a delay between successive animations. For example:
// Hide all level 1 headings over half a second; then wait for 1.5 seconds
// and reveal all level 1 headings over 0.3 seconds
$( "h1" ).hide( 500 ).delay( 1500 ).show( 300 );

/*
jQuery.fx
The jQuery.fx object has a number of properties that control how effects are 
implemented. jQuery.fx.speeds maps the slow, normal, and fast duration arguments 
mentioned above to a specific number of milliseconds. The default value of 
jQuery.fx.speeds
*/

{
    slow: 600,
    fast: 200,
    _default: 400 // Default speed, used for "normal"
}

// jQuery.fx.interval controls the number of frames per second that is displayed in an animation. 
// 
// 
// Finally, jQuery.fx.off can be set to true to disable all animations.
$( "<button type='button'></button>" )
    .text( "Disable Animations" )
    .on( "click", function() {
        jQuery.fx.off = true;
    })
    .appendTo( document.body );