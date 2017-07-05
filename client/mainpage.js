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
	}
})

Template.mainpage.events({
	"click #login" : function(){
		$(".panelForm").css("opacity",1);
	},
	"click #logout" : function(){
		Meteor.logout();
	}
})