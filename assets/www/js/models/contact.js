define([
	'underscore',
	'backbone'
], function( _, Backbone ) {

	var Contact = Backbone.Model.extend({
		// Default attributes for the contact
		defaults: {
			title: '',
			firstName: '',
			lastName: '',
			mobileNumber:'',
			emailAddress:'',
			webAddress:'',
			gender:'',
			dateOfBirth:''
		},
	});

	return Contact;
});
