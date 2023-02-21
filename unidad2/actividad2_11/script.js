/**
 * @author Hugo Vicente Peligro
 */

//Función anonima autoejecutable
let palabra = "Pepa";
(function (palabra) {
    let nombre = "Hola";
    for (const letra of nombre) {
        if (letra == "a"){
            break;
        }
        console.log(letra);
    }
    for (const letra of palabra) {
        if (letra == "p"){
            continue;
        }
        console.log(letra);
    }
})(palabra);

//for-of sobre una cadena
console.log("----------------------for-of sobre cadena----------------------");
for (const letra of palabra) {
    console.log(letra);
}

//console.log("----------------------for-of sobre objeto----------------------");
/*for (const atr of {name: "Hugo", edad: 18}) {
    console.log(atr);
}*/

console.log("----------------------for-in sobre array----------------------");
let array = [1,2,3,4,5]
for (const indice in array) {
    console.log(array[indice])
}

console.log("----------------------for-in sobre objeto----------------------");
let person = {name: "Hugo", edad: 18};
for (const atr in person){
    console.log(person[atr]);
}

console.log("----------------------for-in sobre Array()----------------------");
let array2 = new Array(1,2,3,4);
for (const indice in array2) {
    console.log(array2[indice]);
}

