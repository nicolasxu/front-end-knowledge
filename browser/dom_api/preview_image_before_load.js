function preview_image_before_load() {
	var source = "http://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded";
	// 1. use URL.createObjectURL to load file
	/*
	<input type="file" accept="image/*" onchange="loadFile(event)">
	<img id="output"/>
	<script>
	  var loadFile = function(event) {
	    var output = document.getElementById('output');
	    output.src = URL.createObjectURL(event.target.files[0]);
	  };
	</script>				
	*/

	// 2. use FileReader.readAsDataURL()
	/*
	<input type="file" accept="image/*" onchange="loadFile(event)">
	<img id="output"/>
	<script>
	  var loadFile = function(event) {
	    var reader = new FileReader();
	    reader.onload = function(){
	      var output = document.getElementById('output');
	      output.src = reader.result;
	    };
	    reader.readAsDataURL(event.target.files[0]);
	  };
	</script>
	*/
}