# Tarea 3.5. Listado Set, Map, WeakSet, WeakMap

[ScriptEjercicios](script.js)

1. Indica qué es un Set y crea uno partiendo del array [1, 2, 3, 4, 4]. Justifica su tamaño.

    Es un objeto que permite almacenar valores únicos de cualquier tipo, ya sea valores primitivos o referencias a objetos.
    Su tamaño es 4 y no 5, ya que intenta añadir el valor 4 una segunda vez pero Set almacena valores únicos.
1. Justifica por qué funciona el encadenamiento en los métodos de set "new Set().add(11).add(22)"

    Por que cuando haces un Set.add() devuelve el mismo objeto entonces se puede concatenar y añadir más add().
1. Indica cómo se devuelve un valor de un set

    Con el método forEach() o con el for in, con el metodo has(), keys, values y entries (estos tres últimos dentro de un for).
1. Comparativa entre un array y un set: búsqueda de elementos, eliminación de elementos, búsqueda del elemento NaN, control de duplicados.

    Para la busqueda de elementos en un array lo haremos con el método find y con el método indexOf() que nos devuelve el primer elemento que ha encontrado con la condición que se le pasa ha dicha función y -1 en caso de no encontrarlo.

    Y en un Set se hace con el método has() que nos devolvera true o false si el set contiene ese elemento.

    Un array nos permite eliminar el último valor del array, pop, borrar el primer valor, shift, o borrar un valor o rango de ellos con el método splice.

    Pero en un Set sólo podremos borrar el set completamente, clear, o borrar un único elemento con delete, indicando como parámetro el índice que queremos eliminar.

    Los duplicados. En un array podemos almacenar valores duplicados, salvo que tu indiques lo contrario, mientras que en Set no está permitido.



1. Crea un set donde se almacenen los alumnos ausentes. Repítelos y muéstralos.

1. Indica qué es un Map y crea uno partiendo del array. Partiendo de él, crea tres arrays: Uno con las claves, otro con los valores y otro con los objetos.

1. Demuestra que un Map admite claves de cualquier tipo: cadenas, null, NaN, null, funciones...
1. Crea un map donde se almacenen los alumnos ausentes. Repítelos y muéstralos.
1. Crea una función "quitaLosRepes(array)" que devuelva un array con los elementos sin repetir. Utiliza la característica del objeto Set: no admite valores duplicados
1. Averigua mediante código si un WeakSet admite objetos primitivos. Captura la excepción.
No, no admite valores primitivos.

    ![Ejercicio10](image/Captura%20de%20Pantalla%202022-11-12%20a%20las%2021.02.07.png)
1. Averigua mediante código si  WeakSet o WeakMap son iterables. Puedes utilizar for..of

    No son iterables.