
const contenedorTarjetas = document.getElementById("productos-container"); 


function crearTarjetasProductosOfertas(productos){

    productos.forEach(producto => {
        const nuevaOferta = document.createElement("div");
        nuevaOferta.classList = "tarjeta-producto"
        nuevaOferta.innerHTML= `
        <img src="./img/${producto.id}.jpg">
        <h3>${producto.nombre}<h3/>
        <del>$${producto.sindescuento}</del><br>
        <h4>$${producto.precio}</h4>
        <button>AÑADIR AL CARRITO</button>

        `
        
        
        contenedorTarjetas.appendChild(nuevaOferta);
        nuevaOferta.getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarrito(producto))


        
    });

  
}


crearTarjetasProductosOfertas(ofertas);