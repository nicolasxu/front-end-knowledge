function format_date() {
	// 1. use Moment.js
	var a = moment([2010, 1, 14, 15, 25, 50, 125]);
	a.format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"
	a.format("ddd, hA");                       // "Sun, 3PM"

	// 2. use plain javascript
	var d = (new Date()+'').split(' ');
	// ["Tue", "Sep", "03", "2013", "21:54:52", "GMT-0500", "(Central", "Daylight", "Time)"]
	[d[3], d[1], d[2], d[4]].join(' ');
	// "2013 Sep 03 21:58:03" 
}