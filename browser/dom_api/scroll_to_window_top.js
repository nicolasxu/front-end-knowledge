function scroll_to_window_top () {
	var source = "http://stackoverflow.com/questions/1144805/how-do-i-scroll-to-the-top-of-the-page-with-jquery";
	// 1. native javascript way
	window.scrollTo(0 /* x */, 0 /* y */);
	// no animation

	// 2. jquery with animate
	$("a[href='#top']").click(function(e) {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  // it actually animate on an DOM property
	  // window.document.body.scrollTop
	  e.preventDefault();
	});

}