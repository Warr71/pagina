document.addEventListener('DOMContentLoaded', function () {
  const botones = document.querySelectorAll('.btn-comprar');

  botones.forEach(boton => {
    boton.addEventListener('click', function (e) {
      e.preventDefault();
      alert('Pedido realizado con éxito.');
    });
  });
});