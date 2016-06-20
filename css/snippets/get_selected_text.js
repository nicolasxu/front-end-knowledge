var source = "http://stackoverflow.com/questions/5379120/get-the-highlighted-selected-text";


var featureDemo = "http://www.slate.com/blogs/the_slatest/2016/02/09/last_night_s_fishballrevolution_in_hong_kong_explained.html?utm_content=inf_80_2641_2&wpsrc=socialedge&tse_id=INF_7f8cfbc6ae9346b4b3edd088e4415db1";



window.getSelection().toString();


// You can also listen to the click event to get the position of click,
// so that you can display a text box relative the event position. 




// event positions
var x;
var y;
if(e.pageX || e.pageY) {
	x = e.pageX;
	y = e.pageY;
}

// event position relative to canvas
var stackOverflow = "http://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element";
function example() {

	var x;
	var y;
	if (e.pageX || e.pageY) { 
	  x = e.pageX;
	  y = e.pageY;
	}
	else { 
	  x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
	  y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
	} 
	x -= gCanvasElement.offsetLeft;
	y -= gCanvasElement.offsetTop;


}
