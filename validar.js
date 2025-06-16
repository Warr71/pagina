document.getElementById('registroForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let valid = true;

  function validarCampo(id, condicion) {
    const campo = document.getElementById(id);
    if (condicion) {
      campo.classList.remove('is-invalid');
    } else {
      campo.classList.add('is-invalid');
      valid = false;
    }
  }

  validarCampo('nombres', document.getElementById('nombres').value.trim() !== '');
  validarCampo('apellidos', document.getElementById('apellidos').value.trim() !== '');
  validarCampo('correo', /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(document.getElementById('correo').value));

  validarCampo('direccion', document.getElementById('direccion').value.trim() !== '');
  validarCampo('distrito', document.getElementById('distrito').value.trim() !== '');
  validarCampo('provincia', document.getElementById('provincia').value.trim() !== '');
  validarCampo('departamento', document.getElementById('departamento').value !== '');
  validarCampo('edad', /^\d+$/.test(document.getElementById('edad').value) && parseInt(document.getElementById('edad').value) > 0);

  const terminos = document.getElementById('terminos');
  const terminosError = document.getElementById('terminosError');
  if (!terminos.checked) {
    terminosError.style.display = 'block';
    valid = false;
  } else {
    terminosError.style.display = 'none';
  }

  if (valid) {
    alert('Formulario enviado correctamente');
this.submit();
  }
});