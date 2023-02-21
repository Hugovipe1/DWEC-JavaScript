{

    let valores = [true, 5, false, "hola",
    "adios", 2];
    
    let textoMayor = valores[3] > valores[4];
    console.log("¿hola es mayor que adios? "+ textoMayor);
    
    let valoresBooleanos1 = valores[0] || valores[2];
    let valoresBooleanos2 = valores[0] && valores[2];
    console.log("true && false = "+ valoresBooleanos2 + "\n true || false = " + valoresBooleanos1);
    
    //mirar método typeof
    let suma = valores[1] + valores[5];
    let resta = valores[1] - valores[5];
    let multiplicacion = valores[1] * valores[5];
    let division = valores[1] / valores[5];
    let modulo = valores[1] % valores[5];
    
    console.log("suma de 5 + 2 = "+ suma+ "\n resta de 5 - 2 = " + resta + "\n multiplicación de 5 * 2 = "+ multiplicacion+
    "\n division de 5 / 2 = "+ division + "\n módulo de 5 % 2 = " + modulo  );
    
}
