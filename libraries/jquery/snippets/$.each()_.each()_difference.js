var source = "https://learn.jquery.com/using-jquery-core/iterating/";

$.each();
$('input').each();

$.map();
$('li').map();


// Incorrect:
$.each( $( "p" ), function() {
    // Do something
});

// if it is a jquery collection, then alway use .each()


$('p').each(function (index, value){
	// value is each DOM element in jquery collection
	if(this === value) {
		console.log(true);
		// always true
	}

	$.ajax({
        success: function( data ) {
            // The context has changed.
            // The "this" keyword no longer refers to listItem.
            this !== value; // true
        }
    });
});
var sum = 0;
$.each( [3,4,5,6], function( index, value ){
  sum += value;
});
 
console.log( sum ); // 15


// map //
$( "li" ).map( function(index, element) {
    return this.id;
}).get();
/*
	Notice the .get() chained at the end. .map() actually returns a 
	jQuery-wrapped collection, even if we return strings out of the callback. 
	We need to use the argument-less version of .get() in order to return a
	basic JavaScript array that we can work with. 
	To concatenate into a string, we can chain the plain JS .join() array 
	method after .get().
 */

/* 
	$.map() works on plain JavaScript arrays while .map() works on jQuery element 
	collections. Because it's working on a plain array, $.map() returns a plain
 	array and .get() does not need to be called – in fact, it will throw an 
 	error as it's not a native JavaScript method.
*/

// sometime, jquery will loop through the collection
// sometime, it will not. 


// The following is a list of methods that require .each():



.attr() (getter)
.css() (getter)
.data() (getter)
.height() (getter)
.html() (getter)
.innerHeight()
.innerWidth()
.offset() (getter)
.outerHeight()
.outerWidth()
.position()
.prop() (getter)
.scrollLeft() (getter)
.scrollTop() (getter)
.val() (getter)
.width() (getter)