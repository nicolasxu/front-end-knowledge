$(document).ready(function() {
  $("a.Styleswitcher").click(function() { //swicth the LINK REL attribute with the value in A REL attribute 
    $('link[rel=stylesheet]').attr('href', $(this).attr('rel'));
  });

});
// <a class="styleswitcher" href="#" rel="default.css">Default Theme</a>
// <a class="styleswitcher" href="#" rel="red.css">Default Theme</a>
// <a class="styleswitcher" href="#" rel="blue.css">Default Theme</a>