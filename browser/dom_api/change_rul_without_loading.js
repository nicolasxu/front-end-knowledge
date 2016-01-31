var state = { 'page_id': 1, 'user_id': 5 }; // state object
var title = 'Hello World'; 							    // page title
var url = 'hello-world.html';               // url

history.pushState(state, title, url);



var source = "http://stackoverflow.com/questions/824349/modify-the-url-without-reloading-the-page";
				// only works for HTML5
				window.history.pushState('page2', 'Title', '/page2.php');
				// MDN: https://developer.mozilla.org/en-US/docs/Web/API/History_API