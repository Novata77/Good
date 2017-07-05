Template.formcurso.events({
  "submit form": function(e){
    var datos = {
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value,
      fecha: e.target.fecha.value,
      idpro: Accounts.user()._id
    };
    Meteor.call("insert",datos, function(err,result){
    });
    //Curso.insert(datos);
    //e.target.titulo.value = "";
    //e.target.descripcion.value = "";
    //e.target.fecha.value = "";
    //return false;
  }
});