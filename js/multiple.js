// Recognizing Multiple Events using recognizeWith()


var el = $('div').get(0);

// Alternate way of binding Hammer to an element (see http://hammerjs.github.io/api/#hammer.manager)
var hammer = new Hammer.Manager(el);


hammer.add(new Hammer.Tap({event: 'doubletap', taps: 2}));
hammer.add(TODO);   // add one for 'singletap'


hammer.get('doubletap').TODO;       // Tell hammer to recognize 'doubletap' with 'singletap'
hammer.get('singletap').requireFailure('doubletap');

hammer.on(/* which? */, function(e) {
	// display to console
	// set element's textContent
});

