const contenedorTarjetas = document.getElementById('productos-container');
const unidadesElement = document.getElementById('unidades');
const precioElement = document.getElementById('precio');
//const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesElement = document.getElementById("totales");
const reiniciarCarritoElement = document.getElementById("reiniciar");

function crearTarjetasProductosOfertas() {
  const productos = JSON.parse(localStorage.getItem('prod'));
  console.log(productos);
  contenedorTarjetas.innerHTML = '';
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      const nuevaOferta = document.createElement('div');
      nuevaOferta.classList = 'tarjeta-cart';
      nuevaOferta.innerHTML = `
        <img src="../img/${producto.id}.jpg">
        <h3>${producto.nombre}<h3/>
        <h4>$${producto.precio}</h4>
        
        <div class="botones">
        <button>-</button>
        <span class="cantidad">${producto.cantidad}</span>
        <button>+</button>
        </div>
        `;

      contenedorTarjetas.appendChild(nuevaOferta);
      nuevaOferta
        .getElementsByTagName('button')[1]
        .addEventListener('click', (e) => {
          const cuentaElement =
            e.target.parentElement.getElementsByTagName('span')[0];
          cuentaElement.innerText = agregarAlCarrito(producto);
          actualizarTotales();
        });

      nuevaOferta
        .getElementsByTagName('button')[0]
        .addEventListener('click', (e) => {
          restarAlCarrito(producto);
          crearTarjetasProductosOfertas();
          actualizarTotales();
          revisarMensajeVacio();
        });
    });
  }
}
crearTarjetasProductosOfertas();
actualizarTotales();

function actualizarTotales() {
  const productos = JSON.parse(localStorage.getItem('prod'));
  let unidades = 0;
  let precio = 0;
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      unidades += producto.cantidad;
      precio += producto.precio * producto.cantidad;
    });
    unidadesElement.innerText = unidades;
    precioElement.innerText = precio;


}
revisarMensajeVacio();
}

function revisarMensajeVacio() {
  const productos = JSON.parse(localStorage.getItem('prod'));
  if (!productos || productos.length === 0) {
    Swal.fire({
      icon: 'info',
      title: 'El carrito está vacío',
      text: 'No hay productos en el carrito.',
    });
  }
  contenedorTarjetas.classList.toggle(
    'escondido',
    !(productos && productos.length > 0)
  ); // Añadido: Ocultar/mostrar contenedor de productos
  totalesElement.classList.toggle(
    'escondido',
    !(productos && productos.length > 0)
  );
}

revisarMensajeVacio();

reiniciarCarritoElement.addEventListener("click",reiniciarCarrito);
function reiniciarCarrito(){
    localStorage.removeItem("prod");
    actualizarTotales();
    crearTarjetasProductosOfertas();


}