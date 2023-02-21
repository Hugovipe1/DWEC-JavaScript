# Tarea 4.6. Listado Arrays y otros
## Autor: Hugo Vicente Peligro

[Ejercicios](./main.js)
1. Indica qué hace miArray.slice();

    El método slice devuelve una copia del array que lo invoca. Tiene dos parámetros en la cual se le pasa el indice desde el cuál se quiere realizar la copia y el indice donde finaliza dicha copia.

    Ejemplo: 
    var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
    var masculinos = nombres.slice(1, 3);

    // masculinos contiene ['Pedro','Miguel']

1. Indica qué hace 
JSON.parse( JSON.stringify( miArray ));

    Se utiliza el método JSON.parse() que  se encarga de pasar una cadena de texto en formato JSON a JavaScript.
    el parametro que lleva ese método tiene que ser una cadena de texto en formato JSON, por lo tanto utiliza el método JSON.stringyfy() que convierte un valor en JavaScript en JSON.

    Por lo tanto esta función acaba obteniendo el mismo array que se la pasa a JSON.stringyfy().
1. Indica la diferencia de funcionalidad entre las dos sentencias anteriores

    El método slice() realiza una copia de la primera capa del array que la invoca.
    JSON.parse( JSON.stringify( miArray )) realiza una copia de todas las capas del array;
1. Realiza el siguiente ejercicio con ambos métodos e indica la diferencia.

    1. Crea el siguiente array a=[1, 2, {3:3, 5:5}]; 
    1. Utiliza los métodos anteriores obteniendo las variables c1 y c2;
    1. En el objeto a modifica el tercer elemento: modifica el valor 5 en 55. NO CAMBIES la clave 5, sino el valor 5.
    1. Comprueba los valores de c1 y c2.

    La diferencia que en c1 = a.slice() se hace la copia de "a" solo de la primera capa del array entonces al cambiar "a[2]" se cambia también en "c1". Mientras que si hacemos c2 = JSON.parse( JSON.stringify(a)) se copia  todo el array en profundida, por lo tanto los cambios que hagamos en "a" no se ven afectados en c2.

1. Utilizando la destructuración de un array, y sin definir ninguna función, convierte la siguiente cadena en las variables nombre y apellido: "Zenda Menchú";

    cadena = "Zenda Menchú";

    let [nombre,apellido] = cadena.split(" ");
    console.log(nombre,apellido);
1. Usando funciones arrow básicas (evita return)

    1. Ordena alfabéticamente mediante el método sort() array= ['dolar', 'dólar', 'Amigo', 'ánimo', 'Ágora', 'Decisicón'];

        let array= ['dolar', 'dólar', 'Amigo', 'ánimo', 'Ágora', 'Decisicón'];

        array.sort((a, b) => a.localeCompare(b));

        console.log(array);
    1. Ordena por apellido let alumnas = [    { nombre: 'Anacleta', apellido: 'Cándida' },    { nombre: 'Manola', apellido: 'CÁNTICO' },    { nombre: 'Simona', apellido: 'Carola' }];

        let alumnas = [    { nombre: 'Anacleta', apellido: 'Cándida' },    { nombre: 'Manola', apellido: 'CÁNTICO' },    { nombre: 'Simona', apellido: 'Carola' }];
    
        alumnas.sort((a, b) => a["apellido"].localeCompare(b["apellido"]));

        console.log(alumnas);