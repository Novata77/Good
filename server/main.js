import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Meteor.methods({ 
    "insert": function(datos) { 
       CURSO.insert(datos);
       return true;
    },
    "update": function(rol){
      Roles.addUsersToRoles(rol, ['profesor']);
      return true;
    } 
  });
  Meteor.publish('datos', function(){
    return CURSO.find();
  });
  Meteor.users.allow({
    update() { return true; }
  });
  Meteor.publish("allUsers", function () {
    return Meteor.users.find({});
  });
  Meteor.publish('mostrar', function(){
    return Meteor.users.find();
  });
});
