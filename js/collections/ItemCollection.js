define([
	'backbone',
	'models/Item'
	],
function(Backbone, Item){
	var ItemCollection = Backbone.Collection.extend({
		model : Item
	});
	return ItemCollection;
});