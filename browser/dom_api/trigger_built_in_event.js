function trigger_built_in_event() {
	function simulateClick() {
	  var event = new MouseEvent('click', {
	    'view': window,
	    'bubbles': true,
	    'cancelable': true
	  });
	  var cb = document.getElementById('checkbox'); 
	  var canceled = !cb.dispatchEvent(event);
	  if (canceled) {
	    // A handler called preventDefault.
	    alert("canceled");
	  } else {
	    // None of the handlers called preventDefault.
	    alert("not canceled");
	  }
	}
}