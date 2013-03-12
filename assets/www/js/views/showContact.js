define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/showContact.html'
], function( $, _, Backbone, showContactTemplate ) {

	var ShowContactView = Backbone.View.extend({

		template: _.template( showContactTemplate ),

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

	return ShowContactView;
});
