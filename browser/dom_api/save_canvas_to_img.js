function save_canvas_to_img() {
	var source = "http://stackoverflow.com/questions/923885/capture-html-canvas-as-gif-jpg-png-pdf";
	
	var canvas = document.getElementById("mycanvas");
	var img    = canvas.toDataURL("image/png");
	//with the value in IMG you can write it out as a new Image like so:

	document.write('<img src="'+img+'"/>');
}