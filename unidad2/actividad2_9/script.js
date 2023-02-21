/**
 * 
 * @author Hugo Vicente Peligro
 */

//método que utilice  el parámetro rest
function suma(num1,num2, ...restoNumeros){
    let contador = 0;
    for (const num of restoNumeros) {
        contador += num; 
    }
    console.log(num1 + num2 + contador);
}
suma(1,2,3,4,5);




//tres puntos en la invocación de una función
function resta(num1,num2,num3,num4){
    console.log(num1 - num2 -num3 - num4);
}
let numeros =[1,2,4,5,7,8];
resta(...numeros);



//Tres puntos para duplicar un array
let coches= ["seat",["mercedes","renault"],"BMW"];
let cochesDuplicado =  [...coches];
console.log(cochesDuplicado == coches);
console.log(coches[1] == cochesDuplicado[1]);
console.log(cochesDuplicado);
console.log(coches);



//tres puntos para duplicar un objeto
const person ={
    edad: 10,
    padre: {
        nombre:"juan",
    }

}

const person2 = {...person};
person2.edad = 49;
person2.padre.nombre = "pepe";
console.log(person);
console.log(person2);
console.log(person.padre.nombre == person2.padre.nombre);




