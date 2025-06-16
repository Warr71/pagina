document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formContacto');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    let valid = true;

    const nombres = document.getElementById('validationDefault01');
    const apellidos = document.getElementById('validationDefault02');
    const correo = document.getElementById('exampleFormControlInput1');
    const comentario = document.getElementById('exampleFormControlTextarea1');

    
    [nombres, apellidos, correo, comentario].forEach(field => {
      field.classList.remove('is-invalid');
    });

   
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/;

    if (nombres.value.trim() === "" || !soloLetras.test(nombres.value)) {
      nombres.classList.add('is-invalid');
      valid = false;
    }

    if (apellidos.value.trim() === "" || !soloLetras.test(apellidos.value)) {
      apellidos.classList.add('is-invalid');
      valid = false;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo.value)) {
      correo.classList.add('is-invalid');
      valid = false;
    }

  
    if (comentario.value.trim().length < 10) {
      comentario.classList.add('is-invalid');
      valid = false;
    }

    if (valid) {
      alert("Formulario enviado correctamente");
      form.reset(); 
    }
  });
});