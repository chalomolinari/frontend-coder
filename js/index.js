// condicional
//ciclos
//simulador interactivo
//funciones//





/* let comprar;

class Producto{
    constructor(nombre, precio, marca){
        this.nombre = nombre
        this.precio = precio
        this.marca = marca

    }
};

let productos = [];


do{

    
    let total = 0;
        do{
             comprar = prompt("Desea comprar SI/NO");
            
             

            if(comprar.toLowerCase() == "si"){
                let cantidad = parseInt(prompt("Cuantos items desea comprar?"));

                
                    function pedirItem(i){
                
        
                    let nombre = prompt("Ingrese el nombre del producto" + i + ":");
                    let precio;        
                do{   
                    
                    precio = parseFloat(prompt("Cuanto cuesta el  producto " + i ));
                    
                    
                     
                    if(precio < 0 || isNaN(precio)){
                        console.log("Coloque un valor mayor a 0");
                        
                    }
                }while(precio < 0 || isNaN(precio));

                    let marca = prompt("Ingrese la marca del producto" + i +":");

                    let producto = new Producto(nombre,precio,marca);

                    total += precio;

                    productos.push(producto);
                
                }

                for(let i = 1; i <= cantidad; i++ ){
                    pedirItem(i);
                }

                let envio = prompt("Desea el envío a domicilio SI/NO");
                if(envio.toLowerCase() == "si"){
                    total += 7000 
                    console.log("Se le han sumado $7.000 por el envío.")

                } else{
                    alert("Debe retirarlo en la sucursal mas cercana.");
                }
                
                alert("SUS PRODUCTOS SON:");
                productos.forEach((producto, index) => { 
                    alert(`${index + 1}. ${producto.nombre} - ${producto.marca} - $${producto.precio}`);
                    });
                alert("El total de su pedido es:" + total);

                
                
            }else{
                console.log("Hasta luego")
            }
            
            comprar = prompt("¿Desea realizar una nueva compra? SI/NO");
        }while(comprar.toLowerCase() == "si") ;

        
    }while(comprar.toLowerCase() == "si") ;

    console.log("Gracias por su visita"); */


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