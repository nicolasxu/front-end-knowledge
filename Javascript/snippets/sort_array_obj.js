function sort_array_obj() {
	var source = "http://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript";

	var objs = [ 
	    { first_nom: 'Lazslo', last_nom: 'Jamf'     },
	    { first_nom: 'Pig',    last_nom: 'Bodine'   },
	    { first_nom: 'Pirate', last_nom: 'Prentice' }
	];
	function compare(a,b) {
	  if (a.last_nom < b.last_nom)
	    return -1;
	  if (a.last_nom > b.last_nom)
	    return 1;
	  return 0;
	}

	objs.sort(compare);
	// if no sort func provided, then arr is sorted based on
	// string order, not number. 
}