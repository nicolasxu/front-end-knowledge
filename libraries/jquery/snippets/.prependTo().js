.prependTo( target )


// Insert every element in the set of matched elements to the beginning of the target.


<h2>Greetings</h2>
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>

$( "<p>Test</p>" ).prependTo( ".inner" );
// insert <p> to every matched elements. 2 <p> will be inserted before 2 .inner

