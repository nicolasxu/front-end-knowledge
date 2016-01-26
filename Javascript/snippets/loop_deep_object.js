function loop_deep_object() {
	var source = "http://stackoverflow.com/questions/921789/how-to-loop-through-javascript-object-literal-with-objects-as-members";
	var validation_messages = {
    "key_1": {
    	"your_name": "jimmy",
    	"your_msg": "hello world"
    },
    "key_2": {
    	"your_name": "billy",
    	"your_msg": "foo equals bar"
    }
	}

	// 
	for (var key in validation_messages) {
	  if (validation_messages.hasOwnProperty(key)) {
      var obj = validation_messages[key];
      for (var prop in obj) {
       if (obj.hasOwnProperty(prop)) {
          alert(prop + " = " + obj[prop]);
        }
      }
	  }
	}
}