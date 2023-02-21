document.addEventListener("DOMContentLoaded", function () {
    let select = this.getElementById("select");
    let inputNumero1 = this.getElementById("inputNumero1");
    let inputNumero2 = this.getElementById("inputNumero2");
    let inputResultado = this.getElementById("inputResultado");
    let submitSumar = this.getElementById("submitSumar");
    let submitMultiplicar = this.getElementById("submitMultiplicar");

    submitSumar.addEventListener("click", function () {
        if (select.value == "binario") {
            let sumaDecimal = parseInt(inputNumero1.value, 2) + parseInt(inputNumero2.value, 2);
            inputResultado.value = sumaDecimal.toString(2);
        }
        if (select.value == "octal") {
            let sumaDecimal = parseInt(inputNumero1.value, 8) + parseInt(inputNumero2.value, 8);
            inputResultado.value = sumaDecimal.toString(8);
        }
        if (select.value == "decimal") {
            let sumaDecimal = parseInt(inputNumero1.value) + parseInt(inputNumero2.value);
            inputResultado.value = sumaDecimal;
        }
        if (select.value == "hexadecimal") {
            let sumaDecimal = parseInt(inputNumero1.value, 16) + parseInt(inputNumero2.value, 16);
            inputResultado.value = sumaDecimal.toString(16);

        }
    });


    submitMultiplicar.addEventListener("click", function () {
        if (select.value == "binario") {
            let multiplicaDecimal = parseInt(inputNumero1.value, 2) * parseInt(inputNumero2.value, 2);
            inputResultado.value = multiplicaDecimal.toString(2);
        }
        else if (select.value == "octal") {
            let multiplicaDecimal = parseInt(inputNumero1.value, 8) * parseInt(inputNumero2.value, 8);
            inputResultado.value = multiplicaDecimal.toString(8);
        }
        else if (select.value == "decimal") {
            let multiplicaDecimal = parseInt(inputNumero1.value) * parseInt(inputNumero2.value);
            inputResultado.value = multiplicaDecimal;
        }
        else {
            let multiplicaDecimal = parseInt(inputNumero1.value, 16) * parseInt(inputNumero2.value, 16);
            inputResultado.value = multiplicaDecimal.toString(16);
        }
    })
});