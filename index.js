// condicional
//ciclos
//simulador interactivo
//funciones//





let comprar;

do{

    

        do{
             comprar = prompt("Desea comprar SI/NO");
            
             let total = 0;

            if(comprar.toLowerCase() == "si"){
                let cantidad = parseInt(prompt("Cuantos items desea comprar?"));

                
                    function pedirItem(i){
                let item;
                do{   
                    item = parseFloat(prompt("Cuanto cuesta el  producto " + i ));
                     
                    if(item < 0 || isNaN(item)){
                        console.log("Coloque un valor mayor a 0");
                        
                    }
                }while(item < 0 || isNaN(item))

                    total += item;
                
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
                
                alert("El total de su pedido es:" + total);

                
                
            }else{
                console.log("Hasta luego")
            }
            
            comprar = prompt("¿Desea realizar una nueva compra? SI/NO");
        }while(comprar.toLowerCase() == "si") ;

        
    }while(comprar.toLowerCase() == "si") ;

    console.log("Gracias por su visita");