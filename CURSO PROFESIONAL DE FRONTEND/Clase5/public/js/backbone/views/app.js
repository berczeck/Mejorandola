Puls4.Views.App = Backbone.View.extend({
	events:{
		"click .publicar" : "showForm",
		"submit form" : "cretePost"
	},
	initialize : function ($el) {
            this.$el = $el;
    },
    showForm : function(){
    	this.$el.find("form").show();
    	return false;
    },
    cretePost : function(e){
    	e.preventDefault();

    	var titulo = $('input[name=titulo]').val();
		var autor = $('input[name=autor]').val();
		var tag = $('input[name=tag]').val();

		var data = {
			title : titulo,
			user : autor,
			image : "/imagenes/img4.jpg",
			tag : tag,
			votos : 0
		};

		var modelo = new Puls4.Models.Article(data);
		modelo.save();

    }
});