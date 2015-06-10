define([
	'jquery',
	'underscore',
	'backbone',
	'models/Tapcibo',
	'collections/ItemCollection',
	'views/ItemView',
	'text!templates/itemCollection.html',
	'modernizr'	,
	'catslider'
	],
function($, _, Backbone, Tapcibo, ItemCollection, ItemView, itemCollectionTemplate){
	var ItemCollectionView = Backbone.View.extend({
		baseTemplate : $("#container"),

		initialize : function(){
			var data = new Tapcibo();
			var that = this;
			data.fetch({async : false}).done(function(response){
				that.collection = new ItemCollection(response.menu);
			});
			this.baseTemplate.find('.load').hide();
		},

		render : function(){
			var that = this;
			this.baseTemplate.append(itemCollectionTemplate);
			this.itemTag = $('.mi-slider');
			this.navTag = $('.nav-tapcibo');
			_.each(this.collection.models,function(item){
				that.itemTag.append(that.renderItem(item));
				that.navTag.append("<a href=\"#\">" + item.get("title") + "</a>")
			});
			this.itemTag.find('ul:first').addClass('mi-moveFromLeft mi-current');
			this.itemTag.catslider();
		},

		renderItem : function(item){
			var itemView = new ItemView({ model : item });
			return itemView.render();
		}

	});

	return ItemCollectionView;
});