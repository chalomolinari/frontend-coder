function agregarAlCarrito(producto){
   const memoria = JSON.parse(localStorage.getItem("prod"))
   console.log(memoria)
   if(!memoria){
    const nuevoProducto = getNuevoProductoParaMemoria(producto);
    localStorage.setItem("prod",JSON.stringify([nuevoProducto]));
   }else {
        const indiceProducto = memoria.findIndex(product => product.id === producto.id);
        console.log(indiceProducto);
        const nuevaMemoria = memoria;
        if(indiceProducto === -1){
        nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
        } else{
            nuevaMemoria[indiceProducto].cantidad ++;
        }
        localStorage.setItem("prod",JSON.stringify(nuevaMemoria));
    }

    actualizarNumeroCarrito();
}


//-agarra un numero y lo devuelve
function getNuevoProductoParaMemoria(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;

}


const cuentaCarritoElement = document.getElementById("cuenta-carrito");

function actualizarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("prod")) || [];
    const cuenta = memoria.reduce((acum, current) => acum+current.cantidad,0);
    
    cuentaCarritoElement.innerText = cuenta;

}