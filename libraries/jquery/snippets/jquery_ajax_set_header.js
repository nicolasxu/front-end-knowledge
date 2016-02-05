
var source = "http://stackoverflow.com/questions/14010851/set-request-header-jquery-ajax";

$.ajax({
	url: 'https://api.sandbox.slcedu.org/api/rest/v1/students/test1',
	type: 'GET',
	beforeSend: function (xhr) {
	    xhr.setRequestHeader('Authorization', 'bearer t-7614f875-8423-4f20-a674-d7cf3096290e');
	},
	data: {},
	success: function () { },
	error: function () { },
});