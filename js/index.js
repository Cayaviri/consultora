function validar(formulario) {

    if (formulario.nombre.value.trim().length == 0) {
      alert("Nombre obligatorio");
      return false;
    }
  
    if (formulario.apellido.value.trim().length == 0) {
        alert("Apellido obligatorio");
        return false;
    }

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)) {
      alert("Email inválido");
      return false;
    }
  
    if (formulario.telefono.value.trim().length == 0) {
      alert("Teléfono obligatorio");
      return false;
    }
    
    if (formulario.pais.value == "") {
      alert("País es obligatorio");
      return false;
    }
  
    if (!formulario.terminos.checked) {
      alert("Debe aceptar los términos y condiciones");
      return false;
    }
  
    return true;
  }
  