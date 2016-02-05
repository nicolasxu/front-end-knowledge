
var source = "http://stackoverflow.com/questions/1557602/jquery-and-ajax-response-header";

$.ajax({
  type: 'POST',
  url:'url.do',
  data: formData,
  success: function(data, textStatus, request){
    alert(request.getResponseHeader('some_header'));
  },
  error: function (request, textStatus, errorThrown) {
    alert(request.getResponseHeader('some_header'));
  }
});