const calculadora = {
    input: undefined,

    ultimaOperacion: undefined,

    ultimoSimbolo: undefined,

    resetea: false,

    init: () => {
        const div = document.createElement("div");
        div.style.width = "350px";
        div.style.border = "1px solid black";
        div.style.margin = "0 auto";
        div.style.padding = "10px";
        div.style.borderRadius = "2%";
        div.appendChild(calculadora.crearInput());
        div.appendChild(calculadora.crearBotones());
        document.body.appendChild(div);
    },

    crearInput: () => {

        const input = document.createElement("input");
        input.setAttribute("readonly", "");
        input.setAttribute("value", "0");
        input.style.textAlign = "right";
        input.style.width = "98%";
        input.style.border = "1px solid black";
        input.style.marginBottom = "6%";
        calculadora.input = input;
        return input;
    },

    crearBotones: () => {
        const contenidoBotones = ["CE", "←", "%", "+", "7", "8", "9", "-", "4", "5", "6", "x", "1", "2", "3", "÷", "0", "±", ",", "="];
        const divBotones = document.createElement("div");
        divBotones.style.display = "grid";
        divBotones.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
        divBotones.style.gap = "15px";
        divBotones.style.marginTop = "10px";
        let boton;
        contenidoBotones.forEach(element => {
            boton = document.createElement("button");
            boton.setAttribute("class", "boton");
            boton.innerHTML = element;
            boton.addEventListener("click", calculadora.addFuncionamiento(element));
            divBotones.appendChild(boton);

        });
        return divBotones;
    },

    addFuncionamiento: (element) => {
        if (element == "+") {
            return () => {
                if (calculadora.ultimoSimbolo == undefined) {
                    calculadora.ultimaOperacion = calculadora.input.value;
                    calculadora.ultimoSimbolo = "+";
                    calculadora.resetea = true;
                }
                else{
                    calculadora.calcular();
                    calculadora.ultimoSimbolo = "+";
                    calculadora.ultimaOperacion = calculadora.input.value;
                    calculadora.resetea = true;
                }
            }
        }
        if (element == "x") {
            return () => {
                if (calculadora.ultimoSimbolo == undefined) {
                    calculadora.ultimaOperacion = calculadora.input.value;
                    calculadora.ultimoSimbolo = "x";
                    calculadora.resetea = true;
                }
                else{
                    calculadora.calcular();
                    calculadora.ultimoSimbolo = "x";
                    calculadora.ultimaOperacion = calculadora.input.value;
                    calculadora.resetea = true;
                }
            }
        }
        if (element == "÷") {
            return () => {
                if (calculadora.ultimoSimbolo == undefined) {
                    calculadora.ultimaOperacion = calculadora.input.value;
                    calculadora.ultimoSimbolo = "÷";
                    calculadora.resetea = true;
                }
                else{
                    calculadora.calcular();
                    calculadora.ultimoSimbolo = "÷";
                    calculadora.ultimaOperacion = calculadora.input.value;
                    calculadora.resetea = true;
                }
            }
        }
        if (element == "-") {
            return () => {
                if (calculadora.ultimoSimbolo == undefined) {
                    calculadora.ultimaOperacion = calculadora.input.value;
                    calculadora.ultimoSimbolo = "-";
                    calculadora.resetea = true;
                }
                else{
                    calculadora.calcular();
                    calculadora.ultimoSimbolo = "-";
                    calculadora.ultimaOperacion = calculadora.input.value;
                    calculadora.resetea = true;
                }
            }
        }
        if (element == "%") {
            return () => {
                if (calculadora.ultimoSimbolo == undefined) {
                    calculadora.ultimaOperacion = calculadora.input.value;
                    calculadora.ultimoSimbolo = "-";
                    calculadora.resetea = true;
                }
                else{
                    calculadora.calcular();
                    calculadora.ultimoSimbolo = "-";
                    calculadora.ultimaOperacion = calculadora.input.value;
                    calculadora.resetea = true;
                }
            }
        }
        if (/[0-9]/.test(element)) {
            return () => {
                if (calculadora.resetea) {
                    calculadora.input.value = element;
                    calculadora.resetea = false;
                }
                else {
                    if (calculadora.input.value === "0") {
                        calculadora.input.value = element;
                    }
                    else {
                        calculadora.input.value += element;
                    }
                }
            }
        }
        if (element == "CE") {
            return () => {
                calculadora.input.value = 0;
                calculadora.resetea = false;
                calculadora.ultimaOperacion = undefined;
                calculadora.ultimoSimbolo = undefined;
            }

        }
        if (element == "←") {
            return () => {
                if (/^-?[0-9]*.?[0-9]*$/.test(calculadora.input.value)) {
                    calculadora.input.value = calculadora.input.value.substring(0, calculadora.input.value.length - 1);
                    if (calculadora.input.value == "-") {
                        calculadora.input.value = 0;
                    }
                    if (calculadora.input.value == "-0") {
                        calculadora.input.value = 0;
                    }
                }
            }

        }
        if (element == "±") {
            return () => {
                if (/^[0-9]*$/.test(calculadora.input.value)) {
                    calculadora.input.value = -calculadora.input.value
                }

                else if (/^-?[0-9]*.?[0-9]*$/.test(calculadora.input.value)) {
                    calculadora.input.value = -calculadora.input.value
                }
            }
        }
        if (element == ",") {
            return () => {
                if (calculadora.input.value == "0") {
                    calculadora.input.value += ".";
                }
                if (/^-?[0-9]*$/.test(calculadora.input.value)) {
                    if (!calculadora.input.value.includes(".")) {
                        calculadora.input.value += ".";
                    }
                }
            }
        }

        if (element == "=") {
            return () =>{
            calculadora.calcular();
            calculadora.ultimoSimbolo = undefined;
            }
        }
    },

    calcular: () => {
        let nuevoResultado = 0;
        switch (calculadora.ultimoSimbolo) {
            case "+":
                    nuevoResultado = parseFloat(calculadora.input.value) + parseFloat(calculadora.ultimaOperacion);
                    calculadora.input.value = nuevoResultado;
                    calculadora.ultimaOperacion = nuevoResultado;
                break;
            case "x":
                    nuevoResultado = parseFloat(calculadora.input.value) * parseFloat(calculadora.ultimaOperacion);
                    calculadora.input.value = nuevoResultado;
                    calculadora.ultimaOperacion = nuevoResultado;
                    break;

            case "÷":
                    nuevoResultado = parseFloat(calculadora.ultimaOperacion) / parseFloat(calculadora.input.value);
                    calculadora.input.value = nuevoResultado;
                    calculadora.ultimaOperacion = nuevoResultado;
                    break;
            case "-":
                    nuevoResultado = parseFloat(calculadora.ultimaOperacion) - parseFloat(calculadora.input.value);
                    calculadora.input.value = nuevoResultado;
                    calculadora.ultimaOperacion = nuevoResultado;
                    break;
                
            case "%":
                    nuevoResultado = (parseFloat(calculadora.input.value) * parseFloat(calculadora.ultimaOperacion)) / 100;
                    calculadora.input.value = nuevoResultado;
                    calculadora.ultimaOperacion = nuevoResultado;
                    break;
        }
    }
}

document.addEventListener("DOMContentLoaded", calculadora.init);