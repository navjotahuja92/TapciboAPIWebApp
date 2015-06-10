define([
	'backbone'
	],
function(Backbone){
	var tapcibo = Backbone.Model.extend({
		url : './getTapciboMenu.php'
	});
	return tapcibo;
});

