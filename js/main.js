require.config({
	paths : {
		jquery  : 'libs/jquery/dist/jquery.min',
	    underscore: 'libs/underscore/underscore-min',
    	backbone: 'libs/backbone/backbone-min',
        catslider : 'jquery.catslider',
        modernizr : 'modernizr',
    	templates : '../templates'
	},
    text: {
        useXhr: function (url, protocol, hostname, port) {
            //Override function for determining if XHR should be used.
            //url: the URL being requested
            //protocol: protocol of page text.js is running on
            //hostname: hostname of page text.js is running on
            //port: port of page text.js is running on
            //Use protocol, hostname, and port to compare against the url
            //being requested.
            //Return true or false. true means "use xhr", false means
            //"fetch the .js version of this resource".
            return true;
        }
    },
    shim: {
	    "collections/ItemCollection": {
	      exports: "ItemCollection" // define the export
	    }
  	}
});

require(['app'], function(App){
	App.initialize();
});