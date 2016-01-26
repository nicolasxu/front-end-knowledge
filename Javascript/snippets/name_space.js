function name_space() {
	var source = "http://stackoverflow.com/questions/881515/how-do-i-declare-a-namespace-in-javascript";
	var your_namespace = your_namespace || {};
	your_namespace.Foo = {toAlert:'test'};
	your_namespace.Bar = function(arg) {
	    alert(arg);
	};
	with(your_namespace) {
	  Bar(Foo.toAlert);
	}
}