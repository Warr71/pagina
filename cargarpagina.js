function cargarPagina(pagina){
    fetch(pagina)
    .then(response => {
        if (!response.ok){
            throw new Error('Error al cargar la página');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('contenido').innerHTML= data;
    })
    .catch(error => console.error('Error:',error));
}

document.addEventListener("DOMContentLoaded", function(){
    cargarPagina("inicio.html")
})


