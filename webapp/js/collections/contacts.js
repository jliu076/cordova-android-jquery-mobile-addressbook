define([
	'underscore',
	'backbone',
	'models/contact'
], function( _, Backbone, Contact ) {
    //var db = window.openDatabase("contacts", "", "JQuery Mobile Address Book", 1024*1024);
	var Contacts = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: Contact

		// Save all of the contact items under the `"contacts"` namespace.
		//store: new WebSql(db, 'contacts')
	});

	return new Contacts();
});
