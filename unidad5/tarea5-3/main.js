/**
 * @author Hugo Vicente Peligro
 */

import { validar, rellena, limpiarSpan } from "./validarInput.js";

document.addEventListener("DOMContentLoaded", function () {

    let form = document.getElementById("form");

    document.getElementById("contenedor").style.display = "flex";
    let arrayInput = document.getElementsByTagName("input");
    let select2 = document.getElementById("select");


    select2.addEventListener("blur", validar.bind(this));
    for (const key of arrayInput) {
        if (key.type == "date") {
            key.addEventListener("change", validar.bind(this));
        }
        else if (key.type != "submit" && key.type != "reset") {
            key.addEventListener("blur", validar.bind(this));
        }
    }


    form.addEventListener("submit", function (e) {
        e.preventDefault();
        for (const elemento of arrayInput) {
            if (elemento.type == "date") {
                elemento.dispatchEvent(new Event("change"));
            }
            else if (elemento.type != "submit" && elemento.type != "reset") {
                elemento.dispatchEvent(new Event("blur"));
            }
        }
        select2.dispatchEvent(new Event("blur"));

        let arraySpan = document.getElementsByTagName("span");
        let contador = 0;
        for (const key of arraySpan) {
            if (contador == 0) {
                if (key.innerHTML != "") {
                    if (key.previousElementSibling.tagName == "DIV") {
                        key.previousElementSibling.children[0].checked = true;
                        contador++;
                    }
                    else {
                        key.previousElementSibling.focus();
                        contador++;
                    }
                }
            }

        }
    });

    form.addEventListener("reset", function (e) {
        e.preventDefault;
        limpiarSpan(); //recorremos todos los span y los limpiamos
    });

    document.getElementById("boton").addEventListener("click", function () {
        for (const elemento of arrayInput) {
            if (elemento.type == "date") {
                rellena(elemento);
            }
            else if (elemento.type != "submit" && elemento.type != "reset") {
                rellena(elemento);
            }
        }

        rellena(select2);
        limpiarSpan();

    });


});