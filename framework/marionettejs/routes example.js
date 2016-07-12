var source = "http://backbonejs.org/#Router";


var Workspace = Backbone.Router.extend({

  routes: {
    "help":                 "help",    // #help
    "search/:query":        "search",  // #search/kiwis
    "search/:query/p:page": "search",   // #search/kiwis/p7
    "login(/)": "login"  // #login and #login/
  },

  help: function() {
    ...
  },

  search: function(query, page) {
    ...
  }

});

/*

For example, a route of "search/:query/p:page" will match a 
fragment of #search/obama/p2, passing "obama" and "2" to the action.

*/



/*
A route of "file/*path" will match #file/folder/file.txt, 
passing "folder/file.txt" to the action.
*/


/*
A nested optional route of "docs(/:section)(/:subsection)" will 
match #docs, #docs/faq, and #docs/faq/installing, passing "faq" 
to the action in the second case, and passing "faq" and 
"installing" to the action in the third.

*/


routes: {
  "help/:page":         "help",
  "download/*path":     "download",
  "folder/:name":       "openFolder",
  "folder/:name-:mode": "openFolder"
}

router.on("route:help", function(page) {
  ...
});
/*
When the visitor presses the back button, or enters a URL, and a 
particular route is matched, the name of the action will be fired 
as an event, so that other objects can listen to the router, and 
be notified. In the following example, visiting #help/uploading 
will fire a route:help event from the router.

*/

