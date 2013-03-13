define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/contacts.html'
], function( $, _, Backbone, contactsTemplate ) {

	var ContactView = Backbone.View.extend({

		template: _.template(contactsTemplate ),

		// The DOM events specific to an item.
		events: {

		},

		// The ContactView listens for changes to its model, re-rendering. Since there's
		// a one-to-one correspondence between a **Contact** and a **ContactView** in this
		// app, we set a direct reference on the model for convenience.
		initialize: function() {

		},

		// Re-render the titles of the todo item.
		render: function() {
			this.$el.html( this.template( ) );
			return this;
		},

	});

	return ContactView;
});
