/**
 * 
 * @author Hugo Vicente Peligro
 */

/*function esFalsy que devuelva true si es un valor falsy, false en otro caso*/

esFalsy = comprueba => 
    !comprueba;


//array literal
let array = [0,false,4,-0,0n,"hola", "",``,'',null,undefined, 10n,NaN]
for (const valor of array) {
    console.log(`${valor} es ${esFalsy(valor)}`);
}

for (const key in array) {
    console.log(`${array[key]} es ${esFalsy(array[key])}`);
}

//objeto literal

let person = {name: 0,
               edad:false,
            dinero: -0,
            direccion: null,
            numeroTelefono: undefined,
            cuentaBancaria: NaN,
            hobby: "",
            numHermanos: 0n,

                }

console.log("-----------------------------Recorremos el objeto---------------------------------");

for (const key in person) {
    console.log(`${key} es ${esFalsy(person[key])}`);

}

console.log("-----------------------------Recorremos el objeto(keys)---------------------------------");
let claves = Object.keys(person); 
for(let i=0; i< claves.length; i++){
  console.log(`${claves[i]} es ${esFalsy(person[claves[i]])}`);
  
}

console.log("-----------------------------Recorremos el objeto(values)---------------------------------");
let valores = Object.values(person); 
for(let i=0; i< valores.length; i++){
  console.log(`${valores[i]} es ${esFalsy(valores[i])}`);
}


console.log("-----------------------------Método objeto por defecto---------------------------------")
//objeto por defecto
function objetoPorDefecto(objeto ={} ) {
    
        objeto.hola ??= "Hola";
        objeto.animal ??= {};
        objeto.animal.nombre ??=  "Garfield";
    
    return objeto; 
}
console.log(objetoPorDefecto());
console.log(objetoPorDefecto({name: "Pepe"}));
console.log(objetoPorDefecto({hola: "Hola Mundo", animal: {raza: "gatuno"}}));
console.log(objetoPorDefecto({hola: "Hola Mundo", animal: {nombre: "Pepe"}}));

