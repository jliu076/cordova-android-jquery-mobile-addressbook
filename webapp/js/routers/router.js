define([
	'jquery',
	'backbone',
	'views/contacts',
	'views/newContact',
	'views/showContact'
], function( $, Backbone, ContactsView, NewContactView, ShowContactView) {

	var Workspace = Backbone.Router.extend({

	routes : {
		"" : "allContacts",
		"newContact" : "newContact",
		"showContact" : "showContact"
	},
	
	initialize : function() {
		// Handle back button throughout the application
		$('.back').on('click', function(event) {
			window.history.back();
			return false;
		});
		this.firstPage = true;
	},

	allContacts : function() {
		console.log('#allContacts');
		this.changePage(new ContactsView());
	},

	newContact : function() {
		console.log('#newContact');
		this.changePage(new NewContactView());
	},

	showContact : function() {
		console.log('#showContact');
		this.changePage(new ShowContactView());
	},

	changePage : function(page) {
		$(page.el).attr('data-role', 'page');
		page.render();
		$('body').append($(page.el));
		var transition = $.mobile.defaultPageTransition;
		// We don't want to slide the first page
		if (this.firstPage) {
			transition = 'none';
			this.firstPage = false;
		}
		$.mobile.changePage($(page.el), {
			changeHash : false,
			transition : transition
		});
	}
});

	return Workspace;
});
