define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/newContact.html'
], function( $, _, Backbone, newContactTemplate ) {

	var NewContactView = Backbone.View.extend({

		template: _.template( newContactTemplate ),

		// The DOM events specific to an item.
		events: {

		},


		initialize: function() {

		},

		// Re-render the titles of the todo item.
		render: function() {
			this.$el.html( this.template( ) );
			return this;
		},

	});

	return NewContactView;
});
