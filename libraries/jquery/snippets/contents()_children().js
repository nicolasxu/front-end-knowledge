/*
<div class="container">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  <br><br>
  Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat.
  <br><br>
  Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur.
</div>

*/

// content puts its children nodes(not descendent nodes, including text children into a jquery selection object)
// of course if one of the children nodes has child, it will still kinked to children. 


$( ".container" )
  .contents() // children() will apply the same logic, except does not return text node, only html tag children
    .filter(function() {
      return this.nodeType === 3;
    })
      .wrap( "<p></p>" )
      .end()
    .filter( "br" )
    .remove();


/*
	Explanation: 
	This code first retrieves the contents of <div class="container"> 
	and then filters it for text nodes, which are wrapped in paragraph
	tags. This is accomplished by testing the .nodeType property of 
	the element. This DOM property holds a numeric code indicating 
	the node's type; text nodes use the code 3.
	The contents are again filtered, this time for <br /> 
	elements, and these elements are removed.
 */