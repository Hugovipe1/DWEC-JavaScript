{
    let calculoFactorial = function (numerosInput) {
        if(numerosInput < 0){
            return "El número no puede ser negativo";
        }
        let resultadoFactorial = numerosInput;
        for (let i = numerosInput - 1; i > 0; i--) {
            resultadoFactorial *= i;
        }
        return resultadoFactorial;
    }


    document.addEventListener("DOMContentLoaded", function () {
        const numerosInput = document.getElementById("numeros");
        const spanFactorial = document.getElementById("mensaje");
        numerosInput.addEventListener("blur", function(){
            spanFactorial.innerHTML = calculoFactorial(this.value);
        });
        /*document.getElementById("confirma").addEventListener("click", function () {
            spanFactorial.innerHTML=calculoFactorial(numerosInput.value);
        });*/


    });
}
