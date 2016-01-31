function redirect() {
	var origin = "http://stackoverflow.com/questions/503093/how-can-i-make-a-redirect-page-using-jquery";

	window.location.href="url"; //simulates normal navigation to a new page
	window.location.replace("url");//removes current url from history and replaces with new url
	window.location.assign("url");//adds new url to history stack and redirects to the new url

	window.history.back();//Simulates a back button click
	window.history.go(-1);//Simulates a back button click
	window.history.back(-1);//Simulates a back button click
	window.navigate("page.html");//Same as window.location="url" 
}