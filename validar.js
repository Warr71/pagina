document.getElementById("miFormulario").addEventListener("submit",function (e){
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const distrito = document.getElementById("distrito").value.trim();
    const provincia = document.getElementById("provincia").value.trim();
    const departamento = document.getElementById("departamento").value;
    const edad = document.getElementById("edad").value.trim();
    const condicion = document.getElementById("condicion").checked;

if(nombre === "" || apellido === "" || direccion === "" || distrito === "" || provincia === ""){
alert("Completar todos los campos por favor.");
return;

}

if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)){
    alert("correo electrónico no válido");
    return;
}

if(!/^\d{6}$/.test(contraseña)){
    alert("La contraseña debe tener solo 6 dígitos");
    return;
}

if(departamento === "0"){
    alert("Selecciona un departamento por favor.");
    return;
}

if(!/^\d+$/.test(edad)){
    alert("La edad debe contener solo números.");
    return;
}

if(!terminos){
    alert("Debes aceptar los términos y condiciones.");
    return;

}

alert("Formulario enviado con éxito");
this.submit();

});