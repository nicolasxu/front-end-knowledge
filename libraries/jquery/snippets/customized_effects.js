// Custom effects with .animate()
$( "div.funtimes" ).animate(
    {
        left: "+=50",
        opacity: 0.25
    },
 
    // Duration
    300,
 
    // Callback to invoke when the animation is finished
    function() {
        console.log( "done!" );
    }
);


// Per-property easing
$( "div.funtimes" ).animate({
    left: [ "+=50", "swing" ],
    opacity: [ 0.25, "linear" ]
}, 300 );