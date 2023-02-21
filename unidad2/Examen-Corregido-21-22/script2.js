/**
 * 1. Crea dos arrays valoresNullish y valoresFalsy:
 *      valoresNullish: array con los valores nullish
 *      valoresFalsy: array con los valores falsy (menos los nullish, 4 elementos)
 * 2. Invoca la función creaCopia y pásale ambos arrays como argumentos
 * 3. La función creaCopia devuelve un nuevo array con los elementos de los dos arrays. Para ello usa los operadores rest y spread
 * 4. Recorre el nuevo array e indica el tipo de dato que es cada valor. Si no es un valor primitivo indícalo con NO ES PRIMITIVO
 * 
 * @author Javier Epifanio López
*/

// 1.Crea dos arrays valoresNullish y valoresFalsy.
const valoresNullish = [null, undefined];
const valoresFalsy = [false, "", 0, 0n];

// 2.Invoca la función creaCopia y pásale ambos arrays como argumentos
let array = creaCopia(valoresNullish, valoresFalsy);

// 3.La función creaCopia devuelve un nuevo array con los elementos de los dos arrays. Para ello usa los operadores rest y spread
function creaCopia(...valores) { // ...valores es un operador rest
    return [...valores[0], ...valores[1]]; // ...valores es un operador spread
}

// 4.Recorre el nuevo array e indica el tipo de dato que es cada valor. Si no es un valor primitivo indícalo con NO ES PRIMITIVO
for (const i of array){
    let tipo = typeof(i);
    if (tipo === "object"){
        console.log(`El valor: ${i} es de tipo: ${tipo} y NO ES PRIMITIVO`);
    } else {
        console.log(`El valor: ${i} es de tipo: ${tipo}`);
    }
}

