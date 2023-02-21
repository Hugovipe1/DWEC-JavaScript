{
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
        'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    
        let numerosInput;
        let letraInput;
        let mensajeSpan;

        let confirmarLetra = function(){
            console.log(numerosInput.value);
            if (numerosInput > 99999999) {
                console.log("El número de DNI no puede ser mayor de 99999999");
            }
            else if (numerosInput < 0) {
                console.log("El número de DNI no puede ser menor de 0");
            }
        
            let numero = numerosInput.value.trim() % 23;
            let letraArray = letras[numero];
            
            //Operador ternario
            letraArray == letraInput.value.trim() ?
                console.log("El número y la letra del DNI es correcto"): console.log("La letra que ha indicado no es correcta");
            

        }

    
    document.addEventListener("DOMContentLoaded", function(){
        numerosInput = document.getElementById("numeros");
        letraInput = document.getElementById("letra");
        mensajeSpan = document.getElementById("mensaje");
        document.getElementById("confirma").addEventListener("click", confirmarLetra);
    });
    
}