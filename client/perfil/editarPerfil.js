Template.editarperfil.onRendered(function(){
  $("select").material_select();
  $('.modal').modal();
});
Meteor.subscribe('userData');
Template.editarperfil.helpers({

  username : function(){
    return Accounts.user().username
  },
  email : function(){
    return Accounts.user().emails[0].address
  },
  profileNombre : function(){
    return Accounts.user().profile.firstname
  },
  profileApellido : function(){
    return Accounts.user().profile.lastname
  },
  profileCarrera : function(){
    return Accounts.user().profile.carreras
  }
});
Meteor.subscribe('allUsers');
Template.editarperfil.events({
  'submit form': function(e) {
    e.preventDefault();
    var usuario = {
      "username" : e.target.username.value  
      };
     var email={
               "email" : e.target.email.value
     };
     var carrera={
               "carrera" : e.target.Carrera.value
     };
     var nombre={
               "Nombre" : e.target.Nombre.value
     };
     var apellido={
               "Apellido" : e.target.Apellido.value
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
