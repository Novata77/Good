
FlowRouter.route("/",{
	subscriptions: function(params, queryParams){
		this.register("datos", Meteor.subscribe("datos"));

	},
     action : function(params,queryParams) {
        var curso=" ";
        if (CURSO.find().count()==0) {
        	curso=" ";
        }else {
        	curso="cursos";
        }
        BlazeLayout.render("mainpage",{content:"curso",banner:"banner"});
        BlazeLayout.render("mainpage",{banner:"banner",content:"curso"});
 }
});

FlowRouter.route('/cursos/',{
	action: function(params, queryParams){
		BlazeLayout.render("mainpage",{content:"vercurso"});
	}
});
FlowRouter.route('/nuevo_curso/',{
	action: function(params, queryParams){
		BlazeLayout.render("mainpage",{content:"nuevocurso"});
	}
});

FlowRouter.route('/nuevo_curso/form',{
	action: function(params, queryParams){
		BlazeLayout.render("nuevo",{content:"formcurso"});
	}
});

FlowRouter.route('/editar_perfil',{
    action: function(params, queryParams){
        BlazeLayout.render("mainpage", {content:"editarPerfil", banner:"banner"}),
        $('.modal').modal();    
        BlazeLayout.render("mainpage", {content:"editarPerfil", banner:"banner", cuadro:"cuadro"})    
    }
});

FlowRouter.route('/admin',{
    subscriptions: function(params, queryParams){
        Meteor.subscribe("mostrar");
    },
    action: function(params, queryParams){
        BlazeLayout.render("mainpage", {content:"admin"});
    }
});


FlowRouter.route("/soporte",{
 subscriptions: function(params,queryParams){
  //console.log(queryParams);
  this.register("getMSN",Meteor.subscribe("getMSN",queryParams.idus,queryParams.id));
  this.register("getConnections",Meteor.subscribe("getConnections")); 
 },
 action : function(params,queryParams) {
  BlazeLayout.render("mainpage",{banner:"banner",content:"soporteTemplate"});
 }
});

/*FlowRouter.route("/curso",{
  action: function(params,queryParams){
  	BlazeLayout.render("mainpage",{content:"curso"});
  }
});*/