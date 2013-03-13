// Require.js allows us to configure shortcut alias
require.config({
  config: {
    text: {
      useXhr: function (url, protocol, hostname, port) {
        // allow cross-domain requests
        // remote server allows CORS
        return protocol == 'file' ? false: true;
      }
    }
  },	
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		jqueryMobileConfig: {
			deps: ['jquery'],
		},
		jqueryMobile: {
			deps: ['jqueryMobileConfig'],
		},		
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
	    backboneWebSqlStore: {
			deps: ['backbone'],
			exports: 'WebSql'
		}
	},
	paths: {
		jquery: 'empty:', // bundled with requireJS
		jqueryMobileConfig: 'lib/jquery-mobile/config',
		jqueryMobile: 'lib/jquery-mobile/jquery.mobile-1.3.0',
		underscore: 'lib/backbone/underscore-1.4.4',
		backbone: 'lib/backbone/backbone-0.9.10',
		backboneWebSqlStore: 'lib/backbone/backbone-websql',
		text: 'lib/require/text',
		cordova: 'lib/cordova-2.4.0'
	}
});

require(['jqueryMobile', 'routers/router'
], function(jqueryMobile, Workspace ) {
	// Initialize routing and start Backbone.history()
	new Workspace();
	Backbone.history.start();
});

