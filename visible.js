window.addEventListener("scroll", function() {
    let productos = document.querySelectorAll(".producto");

    productos.forEach((producto, index) => {
        let posicion = producto.getBoundingClientRect().top;
        let alturaVentana = window.innerHeight;

        if (posicion < alturaVentana - 100) { 
            setTimeout(() => {
                producto.classList.add("visible");
            }, index * 200); // Retraso progresivo para cada producto
        }
    });
});



