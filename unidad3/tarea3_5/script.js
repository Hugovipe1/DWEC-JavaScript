/**
 * @author Hugo Vicente Peligro
 */
{
    console.log("------------Ejercicio1------------");
    let set1 = new Set([1,2,3,4,4]);
    console.log(set1.size);
}

{
    console.log("------------Ejercicio2------------");
    let set1 = new Set().add(3).add(4);
    console.log(set1)
}


{
    console.log("------------Ejercicio3------------");
    let set1 = new Set([1,2,3,4,4]);
    console.log("--has()--");
    console.log(set1.has(1));
    console.log("--forEach()--");
    set1.forEach((value, key) => console.log(key+ ": "+ value));
    console.log("--keys()--");
    for (const iterator of set1.keys()) {
        console.log(iterator)
    }
    console.log("--values()--");
    for (const iterator of set1.values()) {
        console.log(iterator)
    }
    console.log("--entries()--");
    for (const iterator of set1.entries()) {
        console.log(iterator)
    }
}

{
    console.log("------------Ejercicio5------------");
    let setAlumnos = new Set(["Pepe","Juan","Pepe", "Oscar","Jesus","Oscar"]);
    setAlumnos.forEach((alumnos) => console.log(alumnos));
}

{
    console.log("------------Ejercicio6------------");
    let mapAlumnos = new Map([["alumno1","Pepe"],["alumno2","Juan"],["alumno3","Pepe"], ["alumno4","Oscar"],["alumno5","Jesus"],["alumno6","Oscar"]]);
    let clave = mapAlumnos.keys();
    let valor = mapAlumnos.values();
    let entries = mapAlumnos.entries()// este es con entries
    let arrayClave = Array.from(clave);
    let arrayValor = Array.from(valor);
    let arrayEntries = Array.from(entries);
    //SEGUIR EN CASA
    console.log("--ArrayClave--");
    console.log(arrayClave);
    console.log("--ArrayValor--");
    console.log(arrayValor);
    console.log("--ArrayEntries--");
    console.log(arrayEntries);
}

{
    console.log("------------Ejercicio7------------");
    let mapAlumnos = new Map();
    mapAlumnos.set("cadena", "Hola Mundo");
    mapAlumnos.set(null, "Hola Mundo");
    mapAlumnos.set(NaN, "Hola Mundo");
    mapAlumnos.set(function map() {
        console.log("hola Mundo");
    }, "Hola Mundo");

    mapAlumnos.forEach(function leeMap(value, key) {
        console.log(`${key}: ${value}`);
    })
}

{
    console.log("------------Ejercicio8------------");
    let mapAlumnos = new Map([["alumno2","Pepe"],["alumno2","Juan"],["alumno3","Pepe"], ["alumno4","Oscar"],["alumno5","Jesus"],["alumno6","Oscar"]]);
    console.log(mapAlumnos);
}

{
    console.log("------------Ejercicio9------------");
    function quitaLosRepes(array) {
        let set = new Set(array);
        return [...set];
    }

    let array1 = [1,2,3,3,4,4,5];
    array1 = quitaLosRepes(array1);
    array1.forEach((i) => {
        console.log(i);
    });
}

{
    console.log("------------Ejercicio10------------");
    let weakSet = new WeakSet();
    weakSet.add({hola: "hola"});
    //weakSet.add(1); Si descomentamos produce una excepción
}

{
    console.log("------------Ejercicio11------------");
    let weakSet = new WeakSet();
    weakSet.add({hola: "hola"});
    weakSet.add({adios: "adiós"});

    let weakMap = new WeakMap();
    weakMap.set({nombre: "Hugo"}, "Hugo Vicente Peligro");
    weakMap.set({nombre: "Pepe"}, "Pepe Ruiz");

    /**for (const key of weakSet) {
        console.log(key);
    }*/
}