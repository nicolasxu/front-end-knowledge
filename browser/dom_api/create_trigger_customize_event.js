function create_trigger_customize_event() {
	// simple:
	var event = new Event('build');
	// complex: 
	var event = new CustomEvent('build', { 'detail': elem.dataset.time });
			


	// Listen for the event.
	elem.addEventListener('build', function (e) {
		log('The time is: ' + e.detail);  
	}, false);

	// Dispatch the event.
	elem.dispatchEvent(event);
}