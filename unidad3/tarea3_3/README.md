## Enlace a los ejercicios [Ejercicios JavaScript](script.js)
1. Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.

    Una función callback a la cual le pasas el elemento actual siendo procesado en el array(currentValue), el indice del elemento actual siendo procesado en el array(index), El array en el que forEach() esta siendo aplicado(array).
     
1. Indica la utilidad del operador in con los arrays. Demuestra su uso mediante un ejemplo.

    Es el nombre que se le asigna a la propiedad diferente de cada iteración.


1. Indica la función que comprueba si un objeto es o no un Array. Demuestra su uso mediante un ejemplo.

    Con la función Array.isArray que devuelve true si el objeto es un array y false si no es un array.
    
1. Crea  una función que cree un array de la dimensión indicada, cuyo contenido sean los números naturales comenzando desde 0


1. Crea  una función que devuelva un array con cada uno de los argumentos.


1. Crea  una función que devuelva un array con cada uno de los argumentos. En caso de que alguno de sus argumentos sea un array, que introduzca sus elementos uno a uno.


1. Crea una función que elimine todos los undefined de un array.


1. Indica la diferencia entre los siguientes métodos, y demuestra su uso con algunos arrays:  Array.prototype.forEach(), Array.prototype.every(), Array.prototype.some() y Array.prototype.filter()

    - Array.prototype.forEach() = El método forEach() ejecuta la función indicada una vez por cada elemento del array.
    - Array.prototype.every()= Determina si todos los elementos en el array satisfacen una condición.
    - Array.prototype.some()= El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
    - Array.prototype.filter()= El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
1. Averigua qué método es el más eficiente para manejarse con arrays.  Compruébalo mediante performance.now() o similares

    1. Introduce 100 elementos en un array mediante push(), unshift(), directamente, fijando tamaño en new Array...

    1. Eliminar 100 elementos en un array mediante pop(), shift(), directamente, fijando tamaño...