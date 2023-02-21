/**
 * @author Hugo Vicente Peligro
 */

{
    function mensaje(objeto) {
        objeto.hola ??= "hola";
        return cadena =>  objeto.hola +" " + cadena;
        
    }

    
const funcion = mensaje({adios: "adios"});
const funcion1 = mensaje({hola: "Hola"});

console.log(funcion("mundo")); 
console.log(funcion1("mundo"));
}