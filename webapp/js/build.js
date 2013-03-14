({
    appDir: "../",
    baseUrl: "js/",
    dir: "../../assets/www",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    // optimize: "none",
    
    // optimizeAllPluginResources: true, // such as templates to optimized javascripts
    
    paths: {
		jquery: 'empty:', // bundled with requireJS
		jqueryMobileConfig: 'lib/jquery-mobile/config',
		jqueryMobile: 'lib/jquery-mobile/jquery.mobile-1.3.0',
		underscore: 'lib/backbone/underscore-1.4.4',
		backbone: 'lib/backbone/backbone-0.9.10',
		backboneWebSqlStore: 'lib/backbone/backbone-websql',
		text: 'lib/require/text',
		cordova: 'lib/cordova-2.4.0'
    },

    modules: [
        //Optimize the application files. jQuery is not 
        //included since it is already in require-jquery.js
      /* {
           name: "views/dummy"  //created to build optimized js for html files in templates directory
       } */
    ]
})
