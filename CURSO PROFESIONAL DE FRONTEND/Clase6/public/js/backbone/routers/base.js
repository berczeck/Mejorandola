Puls4.Routers.Base = Backbone.Router.extend({
	routes : {
		"" : "root",//ruta base
		"article/:id" : "articleSingle"
	},
	root : function(){
		console.log("Estamos en root");
		window.app.state = "root";
		window.app.article = null;
	},
	articleSingle : function(id){
		console.log("Estamos en articleSingle");

		window.app.state = "articleSingle";
		window.app.article = id;
	}
});