function format_money() {
	var source = "http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript?page=1&tab=active#tab-top";
	// 1. use integer to represent money value, e.g: 100 is 1 dollar
	
	// must run toFixed() first to introduce '.' in the string
	(1111134).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}



function format_money_number() {
	var source = "http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript";
	function numberWithCommas(x) {
		return x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
}