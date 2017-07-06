Template.mainpage.onRendered(function(){
	$('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.slider').slider();
    $(".panelForm").css("opacity",0);
    $('.materialboxed').materialbox();
});
Template.mainpage.helpers({
	username : function(){
		return Accounts.user().username;
	},
	ready: function(){
    return FlowRouter.subsReady("datos");
  },
  Cursover: function(){
    return CURSO.find();
  }
});

Template.mainpage.events({
	"click #login" : function(){
		$(".panelForm").css("opacity",1);
	},
	"click #logout" : function(){
		Meteor.logout();
	}
})

Template.mainpage.onRendered(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
});

Template.cursos.onRendered(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
});

Template.nuevocurso.onRendered(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.modal').modal();
});

Template.formcurso.onRendered(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
});
