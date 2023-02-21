{

    document.addEventListener("DOMContentLoaded", function () {
        const cadena = document.getElementById("cadena");
        const span = document.getElementById("mensaje");
        document.getElementById("confirma").addEventListener("click",function(){
            span.innerHTML = esPalindromo(cadena.value) ? " Es palíndroma" :  " No es palíndroma";
        });

        
    });



    
    let esPalindromo = function (cadena) {
        let string = cadena.toLowerCase();
        let letrasEspacios = string.split("");

        let cadenaSinEspacios = "";
        for (i in letrasEspacios) {
            if (letrasEspacios[i] != " ") {
                cadenaSinEspacios += letrasEspacios[i];
            }
        }

        let strDelReves = cadenaSinEspacios.split("").reverse().join("");
        let iguales;
        cadenaSinEspacios == strDelReves ? iguales = true : iguales = false;
        
        
        /*for (i in array) {
            if (array[i] != arrayDelReves[i]) {
                return !iguales;
            }
        }*/
        return iguales;

    }
}






