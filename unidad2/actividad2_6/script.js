
/**
 * Tarea 2.6. Tipos de datos primitivos y objetos
 * @author Hugo Vicente Peligro
 */
{
    document.addEventListener("DOMContentLoaded", function(){
        let fecha = new Date();
        let cadena = new String("Hola soy un objeto de tipo cadena");
        const array = [5,"hola",null, 10000000000n,true, undefined, fecha,cadena, ()=> console.log("hola") ];
        //Primitivos
        for(let value of array) {
            let type = typeof value;
            if (type === "object" || type === "function") {
                try {
                    console.log(`OBJETO - ${value instanceof value.constructor} - de tipo ${value.constructor.name} - ${value}`);
                } catch (error) {
                    
                    console.error(error.message);
                }
                
                
            }
            else{
                console.log(`PRIMITIVO - ${type} -  ${value}`);
            }
            
        }
    });
}