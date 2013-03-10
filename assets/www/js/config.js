var database_name = "address_book_db";
var database_version = "1.0";
var database_displayname = "Address Book Database";
var database_size = 200000;

// jquery mobile configs
$(document).bind("mobileinit", function() {
	$.mobile.ajaxEnabled = false;
	$.mobile.linkBindingEnabled = false;
	$.mobile.hashListeningEnabled = false;
	$.mobile.pushStateEnabled = false;

	// Remove page from DOM when it's being replaced
	$('div[data-role="page"]').on('pagehide', function(event, ui) {
		$(event.currentTarget).remove();
	});
});
