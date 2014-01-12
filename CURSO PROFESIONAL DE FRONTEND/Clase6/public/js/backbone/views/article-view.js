Puls4.Views.Article = Backbone.View.extend({
	events:{
		//selector css
		"click .acciones .votos .up" : "upvote",
		"click .acciones .votos .down" : "downvote",
		"click" : "navigate"
	},
	tagName:"article",
	className:"post",
	initialize : function(){
		var self = this;
		//this.$el objeto que tiene el dom de la vista
		console.log(this.$el);

		this.model.on('change',function(){
			if(window.app.state === "asrticleSingle"){
				self.extendedRender();	
			}else{
				self.render();
			}			
		});

		window.routers.base.on("route:root", function(){
			self.$el.css("display","");
			self.render();
		});

		window.routers.base.on("route:articleSingle", function(){
			if(window.app.article === self.model.get("id")){
				console.log("Render extendido");
				self.extendedRender();
			}else{
				self.$el.hide();
			}
		});

		//this.template = _.template($("#article-template").html());
		this.template = swig.compile($("#article-template").html());
		this.templateExtended = swig.compile($("#article-extended-template").html());
	},
	navigate: function(argument){
		Backbone.history.navigate("article/"+this.model.get("id"),{trigger: true});
	},
	upvote: function(e){
		e.stopPropagation();
		e.preventDefault();
		var votes = parseInt(this.model.get('votes'),10);
		this.model.set('votes',++votes);
		this.model.save();
	},
	downvote: function(e){
		e.stopPropagation();
		e.preventDefault();
		var votes = parseInt(this.model.get('votes'),10);
		this.model.set('votes',--votes);
		this.model.save();
		return false;
	},
	extendedRender : function(){
		var data = this.model.toJSON();

		var html = this.templateExtended(data);

		this.$el.html(html);
	},
	render : function(){
		var data = this.model.toJSON();

		var html = this.template(data);

		this.$el.html(html);
	}
	<!--58:00-->
});