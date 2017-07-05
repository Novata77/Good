Template.editarPerfil.onRendered(function(){
  $("select").material_select();
  $('.modal').modal();
});
Meteor.subscribe('userData');
Template.editarPerfil.helpers({

  username : function(){
    return Accounts.user().username
  },
  email : function(){
    return Accounts.user().emails[0].address
  },
  profilefirstname : function(){
    return Accounts.user().profile.firstname
  },
  profilelastname : function(){
    return Accounts.user().profile.lastname
  },
  profilecarreras : function(){
    return Accounts.user().profile.carreras
  }
});
Meteor.subscribe('allUsers');
Template.editarPerfil.events({
  'submit form': function(e) {
    e.preventDefault();
    var usuario = {
      "username" : e.target.username.value  
      };
     var email={
               "email" : e.target.email.value
     };
     var carrera={
               "carreras" : e.target.carreras.value
     };
     var nombre={
               "firstname" : e.target.firstname.value
     };
     var apellido={
               "lastname" : e.target.lastname.value
     };  
   Meteor.users.update( { _id: Meteor.userId() }, 
    { $set: 
      { 'profile.firstname': nombre.firstname,
      'profile.lastname': apellido.lastname, 
      'profile.carreras': carrera.carreras,
      'username': usuario.username,
      'emails': [ { address: email.email} ] 
    }
  }); 
  }
});     
