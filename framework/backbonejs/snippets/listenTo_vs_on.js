var source = "http://stackoverflow.com/questions/16823746/backbone-js-listento-vs-on";

/*
listenTo is the newer and better option 
because these listeners will be automatically
removed for you during stopListening which 
is called when a view gets removed (via remove()).

*/

view.listenTo(model, 'change', view.render);


view.remove();
/*
Removes a view and its el from the DOM,
 and calls stopListening to remove any bound events that the view has listenTo\'d.

*/

/*
Catalog of Events 
Here\'s the complete list of built-in Backbone events, with arguments. You\'re also free to trigger your own events on Models, Collections and Views as you see fit. The Backbone object itself mixes in Events, and can be used to emit any global events that your application needs.

"add" (model, collection, options) — when a model is added to a collection.
"remove" (model, collection, options) — when a model is removed from a collection.
"update" (collection, options) — single event triggered after any number of models have been added or removed from a collection.
"reset" (collection, options) — when the collection\'s entire contents have been replaced.
"sort" (collection, options) — when the collection has been re-sorted.
"change" (model, options) — when a model\'s attributes have changed.
"change:[attribute]" (model, value, options) — when a specific attribute has been updated.
"destroy" (model, collection, options) — when a model is destroyed.
"request" (model_or_collection, xhr, options) — when a model or collection has started a request to the server.
"sync" (model_or_collection, resp, options) — when a model or collection has been successfully synced with the server.
"error" (model_or_collection, resp, options) — when a model\'s or collection\'s request to the server has failed.
"invalid" (model, error, options) — when a model\'s validation fails on the client.
"route:[name]" (params) — Fired by the router when a specific route is matched.
"route" (route, params) — Fired by the router when any route has been matched.
"route" (router, route, params) — Fired by history when any route has been matched.
"all" — this special event fires for any triggered event, passing the event name as the first argument.


*/