/**
 * @author Hugo Vicente Peligro
 */
{
    /**
     * Objeto literal
     */
    const hugoVicente = 
    {
        nombre: "Hugo",
        apellido1: "Vicente",
        apellido2: "Peligro",
        mujer: false,
        JS:{
            opinion: "lenguaje muy bueno",
        },

    };
/**
 * Funcion que se encarga de hacer un objeto por defecto
 * @param {Object} alumno 
 * @returns {Object} alumno
 */
const porDefecto = function(alumno = {}){
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
 * 
 * @param {Object} alumno 
 */
const muestraResultado = function(alumno){
    alumno = porDefecto(alumno);
    console.log(`Mi nombre es ${alumno.nombre} ${alumno.apellido1} ${alumno.apellido2}
    Soy alumn${alumno.mujer ? "a" : "o"}  de 2DAW del IES Gran Capitán.
    Sobre la profesora de DWEC no opino
    pero sobre JS, creo que es un ${alumno.JS.opinion}.`);
}

muestraResultado(hugoVicente);
muestraResultado();

}