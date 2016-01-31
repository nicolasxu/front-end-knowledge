function add_remove_class() {
	// pure javascript
	var source = "http://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript";
	document.getElementById("MyElement").className = "MyClass";
	document.getElementById("MyElement").className += " MyClass";
	document.getElementById("MyElement").className =
  document.getElementById("MyElement").className.replace
    ( /(?:^|\s)MyClass(?!\S)/g , '' );

  // jquery
  $('#MyElement').addClass('MyClass');
  $('#MyElement').removeClass('MyClass');
  if ( $('#MyElement').hasClass('MyClass') ) {}
  $('#MyElement').toggleClass('MyClass');

	// HTML5
	document.getElementById("MyElement").classList.add('class');
	document.getElementById("MyElement").classList.remove('class');
	if ( document.getElementById("MyElement").classList.contains('class') ) {}
	document.getElementById("MyElement").classList.toggle('class');
}