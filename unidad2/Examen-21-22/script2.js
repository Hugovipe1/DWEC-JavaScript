{
/**
 * valoresNullish: array con los valores nullish
 * valoresFalsy: array con los valores falsy (menos los nullish, 4 elementos)
 */
    const valoresNullish = [null, undefined];
    const valoresFalsy = [0,NaN,"", 0n];
    const arrayDoble = creaCopia(valoresNullish, valoresFalsy);
    function creaCopia(...array){//valores es un operador rest
        return [...array[0], ...array[1]];
    }
    for (const valor of arrayDoble) {
        let tipo = typeof valor;
        if (tipo === "object"){
            console.log(`El valor: ${valor} es de tipo: ${tipo} y NO ES PRIMITIVO`);
        } else {
            console.log(`El valor: ${valor} es de tipo: ${tipo}`);
        }
    }

}