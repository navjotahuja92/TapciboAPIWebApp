define([
	'backbone'
	],
function(Backbone){
	var ItemModel = Backbone.Model.extend({
		defaults : {
		      "kitchen_id": null,
		      "menu_id": null,
		      "dz_id": null,
		      "price": null,
		      "is_add_on": null,
		      "is_complimentary": null,
		      "is_veg": null,
		      "description": null,
		      "title": null,
		      "sold_image": null,
		      "item_image_small": null,
		      "item_image_big": null,
		      "is_gradient_required": null,
		      "left_qty":null,
		      "edt": null,
		      "priority_order": null
		    }
	});

	return ItemModel;
});
