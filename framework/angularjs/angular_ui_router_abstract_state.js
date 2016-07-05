"An 'abstract' state is simply a state that can't be transitioned to. It is activated implicitly when one of its descendants are activated."
var source = "https://github.com/angular-ui/ui-router/wiki/Nested-States-and-Nested-Views";

/*

Some examples of how you might use an abstract state are:

- To prepend a url to all child state urls.
- To insert a template with its own ui-view(s) that its child states will populate.
		Optionally assign a controller to the template. The controller must pair to a template.
		Additionally, inherit $scope objects down to children, just understand that this happens via the view hierarchy, not the state hierarchy.
- To provide resolved dependencies via resolve for use by child states.
- To provide inherited custom data via data for use by child states or an event listener.
- To run an onEnter or onExit function that may modify the application in someway.
Any combination of the above.


*/


"note: "
// Remember: Abstract states still need their own <ui-view/> for their children to plug into. 

// example:

$stateProvider
    .state('contacts', {
        abstract: true,
        url: '/contacts',

        // Note: abstract still needs a ui-view for its children to populate.
        // You can simply add it inline here.
        template: '<ui-view/>'
    })
    .state('contacts.list', {
        // url will become '/contacts/list'
        url: '/list'
        //...more
    })
    .state('contacts.detail', {
        // url will become '/contacts/detail'
        url: '/detail',
        //...more
    })