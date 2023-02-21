{
    let parOImpar = function (numero) {
        return(numero % 2 == 0)?"Es par":"Es impar";
    }

    document.addEventListener("DOMContentLoaded", function () {
        const numero = document.getElementById("numero");
        const span = document.getElementById("mensaje");
        document.getElementById("confirma").addEventListener("click", function () {
            span.innerHTML = parOImpar(numero.value);
        })
    });
}
