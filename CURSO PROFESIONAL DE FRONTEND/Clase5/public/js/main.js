$(document).ready(function(){
	console.log('main.js loaded');

	window.views.app = new Puls4.Views.App($("body"));

	window.ponyExpress = new PonyExpress({
		io : window.location.origin
	});

	window.ponyExpress.bind("connect", function(){
		window.plugs.article = new PonyExpress.BackbonePlug({
			collection : window.collections.articles
		});
	});

	window.collections.articles = new Puls4.Collections.Articles();
	window.collections.articles.on('add', function(modelo){
		//console.log('Se agrego un nuevo articulo', modelo.toJSON());
		//Aqui se agregara una vista para cada uno de nuestros articulos
		var view = new Puls4.Views.Article({
			model:modelo
		});

		view.render();
		view.$el.prependTo(".posts");
	});
	window.collections.articles.fetch();
});
