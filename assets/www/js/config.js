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
	
	// switch off jqm transition for Android devices
	// slide 46 of http://www.slideshare.net/AgentK/real-world-lessons-in-jquery-mobile
	// Device detection: http://www.jquery4u.com/mobile/detect-mobile-devices-jquery/
	var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());

	if (isAndroid)  {
		$.mobile.defaultPageTransition = none;
	}	
});
