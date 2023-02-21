/**
 * @file Fichero con las respuestas del examen práctico de la unidad 2.
 * @author Hugo Vicente Peligro
 */


//Utiliza el operador ternario

{
    /**
     * 
     * @param {*} cadena 
     * @returns {boolean} true o false si es o no string
     */
    console.log("-----------------------Operador ternario-----------------------");
    let isString = function(cadena){
        return (typeof cadena == "string") ? "Es una cadena" : "No es una cadena";// Operador ternario
    }
    let cadena = "Hola Lourdes";
    let numero = 55;
    console.log(isString(cadena));
    console.log(isString(numero));
}

{
    /*
    Utiliza el bucle for-of. Debe hacer al menos 10 pasadas.
     En cada pasada modifica una variable*/
     console.log("-----------------------bucle for-of-----------------------");
    let contador = 0;
    let suma = function(...numeros) {
        for (const num of numeros) {
            contador += num;
        }
        return contador;
    }

    console.log(suma(1,2,3,4,5,6,7,8,9,10,11,12));

}

{
    console.log("-----------------------bucle for-in-----------------------");
const persona =
{
    nombre: "Hugo",
    apellido1: "Vicente",
    apellido2: "Peligro",
    edad: 19,
    telefono: 111111111,
    instituto: "IES Gran Capitán",
    numHermanos: 2,
    nombrePadre: "Juan Carlos",
    nombreMadre: "María Dolores",
    mascotas: 1,
}
for (const key in persona) {
    console.log(`${key}: ${persona[key]}`);
}
}


//Realiza un intercambio de valores de dos variables mediante destructuring
{
    console.log("-----------------------destructuring-----------------------");
    let a = 5;
    let b = 10;
    [b,a] = [a,b];
    console.log(a);
    console.log(b);
}
