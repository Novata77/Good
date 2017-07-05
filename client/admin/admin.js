Template.admin.helpers({ 
    lista: function() { 
         return Meteor.users.find();
    }  
}); 
Template.admin.events({
    'click a' : function(e){
        var rol = e.target.name;
        //Roles.addUsersToRoles(rol, ['profesor']);
        Meteor.call("update",rol);
    }
     
});