define([
	'jquery',
	'underscore',
	'backbone',
	'models/Tapcibo',
	'views/ItemCollectionView'
	],
function($, _, Backbone, Tapcibo, ItemCollectionView){
	var AppRouter = Backbone.Router.extend({
	});
	var initialize = function(){
		var tapcibo_router = AppRouter;
	 	var itemCollectionView = new ItemCollectionView();
      	itemCollectionView.render();
		Backbone.history.start();
	}

	return {
		initialize : initialize
	}
});