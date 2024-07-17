document.addEventListener('DOMContentLoaded', () => {
  const productosContainer = document.getElementById('productos-dinamicos');

  
  const apiUrl = 'https://fakestoreapi.com/products/category/health-care';

  
  const fetchProductos = async () => {
    try {
      const response = await fetch(apiUrl);
      const productos = await response.json();
      displayProductos(productos);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  
  const displayProductos = (productos) => {
    productosContainer.innerHTML = '';
    productos.forEach((producto) => {
      const productoDiv = document.createElement('div');
      productoDiv.classList.add('pu');
      productoDiv.innerHTML = `
                <img src="${producto.image}" alt="${producto.title}">
                <h3>${producto.title}</h3>
                <h4>$${producto.price}</h4>
                <button>AÑADIR AL CARRITO</button>
            `;
      productosContainer.appendChild(productoDiv);
    });
  };

  
  fetchProductos();
});
