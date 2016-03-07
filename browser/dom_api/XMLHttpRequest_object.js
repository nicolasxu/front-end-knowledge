function XMLHttpRequest_object() {
	var w3c_spec = "https://xhr.spec.whatwg.org/";
	var tutorial = "https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started";
	var ajax     = "https://developer.mozilla.org/en-US/docs/AJAX";
	var handleProgress = "https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Monitoring_progress";
	var tutorial_good = "http://www.html5rocks.com/en/tutorials/file/xhr2/";
	// example:
	// Step 1: Sending request
	// Old compatibility code, no longer needed.
	if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
	    httpRequest = new XMLHttpRequest();
	} else if (window.ActiveXObject) { // IE 6 and older
	    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}

	httpRequest.onreadystatechange = nameOfTheFunction;

	// Next, after you've declared what will happen as soon 
	// as you receive the response, you need to actually make 
	// the request. You need to call the open() and send() 
	// methods of the HTTP request class, like this:

	httpRequest.open('GET', 'http://www.example.org/some.file', true);
	// 2nd param, you cannot call pages on 3rd-party domains. CORS here
	// 3rd, the optional third parameter sets whether the 
	//   request is asynchronous.
	httpRequest.send("name=value&anothername="+encodeURIComponent(myVar)+"&so=on");

  // Note that if you want to POST data, JSON, SOAP
  // you may have to set the MIME type of the request.

	httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	// Step 2 – Handling the server response

	function nameOfTheFunction() {
		if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
      	console.log("request success!");
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
	}
}