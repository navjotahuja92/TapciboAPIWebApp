define([	
	'jquery',
	'backbone',
	'text!templates/item.html'
],
function($, Backbone, itemTemplate){
	var ItemView = Backbone.View.extend({
		intialize : function(options){
			this.options = options;
			this.model = this.options.model ? this.options.model : {};
		},

		render : function(){
			var compliledTemplate = _.template(itemTemplate);
			return compliledTemplate({item : this.model});
		}
	});

	return ItemView;
});