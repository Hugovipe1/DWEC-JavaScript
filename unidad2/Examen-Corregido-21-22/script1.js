{
    // 1. Define las funciones porDefecto y muestraResultado según indica su comentario JS. Utiliza el fichero script1.txt
    /**
    * Partiendo del parámetro alumno, devuelve el objeto alumno con los siguientes valores por defecto:
    * - nombre: Severo
    * - apellido1: Ochoa
    * - apellido2: de Albornoz
    * - mujer: false
    * - curso: 2DAW
    * - ies: Gran Capitán
    * 
    * Dentro del objeto existe la propiedad JS que a su vez es otro objeto literal con el campo
    * - opinión: débilmente tipado
    * 
    * @param {Object} [alumno] - El alumno del que parte la información
    * @returns {Object} alumno 
    */
    function porDefecto(alumno) {
        alumno ??= {};
        alumno.nombre ??= "Severo";
        alumno.apellido1 ??= "Ochoa";
        alumno.apellido2 ??= "de Albornoz";
        alumno.mujer ??= false;
        alumno.curso ??= "2DAW";
        alumno.ies ??= "Gran Capitán";
        alumno.JS ??= {};
        alumno.JS.opinion ??= "débilmente tipado";
        return alumno;
    }

    /**
    * Muestra por consola un mensaje de cuatro líneas 
    * La información mostrada se obtiene del parámetro alumno
    * En caso de que el objeto no tenga los campos necesarios, se rellenan con los valores por defecto
    * Fíjate que se muestra alumno o alumna según la propiedad mujer
    * @param {Object} alumno 
    */
    function muestraResultado(alumno) {
        alumno = porDefecto(alumno);
        console.log("Mi nombre es " + alumno["nombre"] + " " + alumno["apellido1"] + " " + alumno["apellido2"] +
            "\nSoy alumn" + (alumno["mujer"] ? "a " : "o ") + "del " + alumno["ies"] + "." +
            "\nSobre la profesora de DWEC no opino, pero sobre JS creo que " + alumno["JS"]["opinion"]); // ternario
    }

    // 2. Declara una variable "nombreApellido1" (en mi caso lourdesMagarin) que sea un objeto literal con las siguientes propiedades referentes a tu persona: nombre, apellido1, apellido2, mujer, JS, con la opinión sobre el lenguaje. La propiedad JS será un objeto con una única propiedad opinion
    const javierEpifanio = {
        nombre: "Javier",
        apellido1: "Epifanio",
        apellido2: "López",
        curso: "2DAW",
        mujer: false,
        JS: { opinion: "es más fácil que Java" }
    };

    const prueba = {
        nombre: "Javier",
        apellido1: "Epifanio",
        apellido2: "López",
        curso: "2DAW",
        mujer: false,
        JS: { opinion: "es más fácil que Java" }
    };

    // 3. Invoca a muestraResultado con la variable "nombreApellido1"
    muestraResultado(javierEpifanio);

    // 4. Invoca a muestraResultado sin parámetros
    muestraResultado();
}
