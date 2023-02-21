/**
 * @author Hugo Vicente Peligro
 */

// Ejemplo del ejercicio 1
{
  console.log("------------------Ejercicio 1------------------");
    let array = [1,2,3,4,5];
    array.forEach(myFunction);
    function myFunction(item, index) {
        console.log(index + ": " + item ); 
      }
}

// Ejemplo del ejercicio 2

{
  console.log("------------------Ejercicio 2------------------");
  let array = [1,2,3,4,5];
  for (const prop in array) {
    console.log(`Indice del array ${prop} valor ${array[prop]}`);
  }
}

// Ejemplo del ejercicio 3
{
  console.log("------------------Ejercicio 3------------------");
  let array = [1,2,3,4,5];
  let cadena = "Hola mundo";
  console.log(`¿La variable array es un array? ${Array.isArray(array)}`);
  console.log(`¿La variable cadena es un array? ${Array.isArray(cadena)}`)
}

//Ejemplo del ejercicio 4
{
  console.log("------------------Ejercicio 4------------------");
  let array = arrayPersonalizado(25);
  
  console.log(array);
  function arrayPersonalizado(tamaño){
    let arrayNuevo = new Array(tamaño);
    for(let i = 0; i<tamaño; i++){
      arrayNuevo[i] = i;
    }
    return arrayNuevo;
  }
}

// Ejercicio 5
{
  console.log("------------------Ejercicio 5------------------"); 
  let array = devuelveArgumentos(1,"hola", 4);
  console.log(array);
  function devuelveArgumentos(...argumentos) {
    return argumentos;
  }
}

// Ejercicio 6
{
  console.log("------------------Ejercicio 6------------------"); 
  
  let array = devuelveArgumentos(1,"hola",[1,2,3,4], 4);
  console.log(array);

  // También se puede hacer creando otro Array y añadiendo elemento a elemento y devolver dicho Array
  function devuelveArgumentos(...argumentos) {
    arrayCopia = [];
    for (const key in argumentos) {
      if (Array.isArray(argumentos[key])) {
        for (const key2 of argumentos[key]) {
          arrayCopia.push(key2);
        }
      }
      else{
        arrayCopia.push(argumentos[key]);
      }
    }
    return arrayCopia;
  }
}

// Ejercicio 7
{
  console.log("------------------Ejercicio 7------------------");
  // También se puede hacer con filter.
  let array = [undefined,1,2,undefined,3,4];
  arrayCopia = eliminaUndefined(array);
  console.log(arrayCopia);
  function eliminaUndefined(array1){
    arrayCopia = array1.filter(e => typeof  e != "undefined");
    return arrayCopia;
  }
  /*function eliminaUndefined(array1) {
    for (const key in array1) {
      if (typeof array1[key] == "undefined") {
        array1.splice(key,1);
      }
    }
  }*/
}

// Ejercicio 8
{
  console.log("------------------Ejercicio 8------------------");
  // El ejemplo de for each esta en el primer ejercicio.
  console.log("------------------Ejemplo every------------------");
  let array = [1,2,3,4,5];
  console.log(array.every(condicion => condicion < 3));

  console.log("------------------Ejercicio some------------------");
  console.log(array.some(condicion => condicion < 3));

  console.log("------------------Ejercicio filter------------------");
  console.log(array.filter(condicion => condicion < 3));
}

// Ejercicio 9
{
  console.log("------------------Ejercicio 9-1------------------");
  let array = new Array(100);
  let tiempoInicio = performance.now();
  for(let i = 0; i < 100000; i++){
    array.push(i);
  }
  
  let tiempoFinal = performance.now();

  console.log(`Se ha tardado en añadir 100 elementos con push  ${tiempoFinal - tiempoInicio} milisegundos`);


  let tiempoInicioUnshift = performance.now();
  
  for(let i = 0; i < 100000; i++){
    array.unshift(i);
  }
  let tiempoFinalUnshift = performance.now();
  console.log(`Se ha tardado en añadir 100 elementos con unshift  ${tiempoFinalUnshift - tiempoInicioUnshift} milisegundos`);
  


  console.log("------------------Ejercicio 9-2------------------");

  let tiempoInicioPop = performance.now();
  for(let i = 0; i < 100000; i++){
    array.pop(i);
  }
  let tiempoFinalPop = performance.now();
  console.log(`Se ha tardado en eliminar 100 elementos con pop  ${tiempoFinalPop - tiempoInicioPop} milisegundos`);
  let tiempoInicioShift = performance.now();
  for(let i = 0; i < 100000; i++){
    array.shift(i);
  }
  let tiempoFinalShift = performance.now();
  console.log(`Se ha tardado en eliminar 100 elementos con shift  ${tiempoFinalShift - tiempoInicioShift} milisegundos`);

}