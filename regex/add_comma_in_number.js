function add_comma_in_number() {
	function numberWithCommas(x) {
			return x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
}