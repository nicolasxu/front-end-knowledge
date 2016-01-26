function line_return () {
	function ss() {
		// correct
		return {
		    id : 1234,
		    title : 'Tony the Pony'
		};
		// error
		/*
			return 
		{
		    id : 1234,
		    title : 'Tony the Pony'
		};
		*/
	}
}