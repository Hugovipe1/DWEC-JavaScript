/**
 * @author Hugo Vicente Peligro
 */

const patrones = {
    regexpTexto: [/^[\w]+$/, "Debes introducir una letra o palabra o un número"]
    , regexpNumEntero: [/^[\d]+$/, "Debes introducir un número entero"]
    , regexpNumDecimal: [/^[\d]+[\.][\d]+$/, "Debes introducir un número decimal"]
    , regexpCorreo: [/^([\w]|[\w]+[\.]?[A-z]+)+[@]([A-z]+[\.][A-z]+)+$/, "Formato válido: hola.quetal@adios.see.you.com"]
    , regexpUrl: [/^(http|https):\/\/([\w]+[\.]?[\w]+)+$/, "Formato válido: https://hola.quease24.com"]
    , regexpFecha: [/^([\d]{2})(?<separador>[ -\/])([\d]{2})\k<separador>([\d]{4})$/, "Formato válido: 10/10/2010"]
    , regexpDni: [/^(\d{8})[- ]?([A-Z])$/i, "Formatos DNI válidos: 12345678Z, 12345678z, 12345678-Z, 12345678 Z"]
    , regexpTelefono: [/^(\+?[\d]+|\(\+?[\d]+\))?[ \.]?([\d]{9}|[\d]{3}(?<separador>[ \.])[\d]{3}\k<separador>[\d]{3})$/, "Formatos válidos: (+34) 123 456 789, (+1907) 123 456 789, (34) 123 456 789, 34 123 456 789, 34.123.456.789, 34-123-456-789, 34 123456789, 34.123.456.789, 123.456.789, 123456789"],
}

export function validar(evento) {
    let span;
    //Elegimos el span más cercano
    if (evento.target.dataset.tipo == "select") {
        span = document.querySelector("select~span");
    }
    else if (evento.target.dataset.tipo == "radio") {
        span = evento.target.closest("div").nextElementSibling;
    }
    else {
        span = document.querySelector(`#${evento.target.id}~span`);
    }
    span.className = "error";

    switch (evento.target.dataset.tipo) {
        case "texto":
            validarInputs(evento.target.value, patrones.regexpTexto, span);
            break;
        case "checkbox":
            if (!evento.target.checked) {
                span.innerHTML = "Por favor, activa esta casilla de verificación";
            }
            else{
                vaciarSpan(span);
            }
            break;
        case "radio":
            let seleccionado = false;
            let radio = document.querySelectorAll('input[data-tipo$="radio"]');
            for (const key of radio) {
                if (key.checked) {
                    seleccionado = true;
                    break;
                }
            }
            if (!seleccionado) {
                span.innerHTML = "Por favor, selecciona una opción";
            }
            else {
                vaciarSpan(span);
            }
            break;
        case "select":
            if (evento.target.selectedIndex == null || evento.target.selectedIndex == 0) {
                span.innerHTML = "Selecciona una opción";
            }
            else{
                vaciarSpan(span);
            }
            break;
        case "date":
            if (!evento.target.value) {
                span.innerHTML = "Introduce un formato de fecha válido: 2020-01-31";
            }
            else{
                vaciarSpan(span);
            }
            break;
        case "numEntero":
            validarInputs(evento.target.value, patrones.regexpNumEntero, span);
            break;
        case "numDecimal":
            validarInputs(evento.target.value, patrones.regexpNumDecimal, span);
            break;
        case "correo":
            validarInputs(evento.target.value, patrones.regexpCorreo, span);
            break;
        case "url":
            validarInputs(evento.target.value, patrones.regexpUrl, span);
            break;
        case "fecha":
            let resultado = evento.target.value.trim().match(patrones.regexpFecha[0]);
            if (resultado) {
                let [dia, mes, year] = [resultado[1], resultado[3], resultado[4]];
                let fecha = new Date(year, mes - 1, dia);
                if (fecha.getFullYear() != year || fecha.getMonth() + 1 != mes || fecha.getDate() != dia) {
                    span.innerHTML = "La fecha no existe";
                }
                else{
                    vaciarSpan(span);
                }
            }
            else {
                span.innerHTML = patrones.regexpFecha[1];
            }
            break;
        case "dni":
            const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
                'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
            let resultado1 = evento.target.value.trim().match(patrones.regexpDni[0]);
            if (resultado1) {
                let letra = resultado1[2];
                if (letra != letras[resultado1[1] % 23]) {
                    span.innerHTML = "El dni no existe";
                }
                else{
                    vaciarSpan(span);
                }
            }
            else {
                span.innerHTML = patrones.regexpDni[1];
            }
            break;
        case "telefono":
            validarInputs(evento.target.value, patrones.regexpTelefono, span);
            break;
    }
}

function vaciarSpan(span) {
    if (span.innerHTML != "") {
        span.innerHTML = "";
    }
}

function validarInputs(texto, arrayPatron, span) {

    if (!texto.trim().match(arrayPatron[0])) {
        span.innerHTML = arrayPatron[1];
    }
    else{
        vaciarSpan(span);
    }
}

export function rellena(elemento) {
    switch (elemento.dataset.tipo) {
        case "texto":
            elemento.value = "Hola";
            break;
        case "checkbox":
            elemento.checked = true;
            break;
        case "radio":
            elemento.checked = true;
            break;
        case "select":
            elemento.value = 1;
            break;
        case "date":
            elemento.value = "2020-12-31";
            break;
        case "numEntero":
            elemento.value = "123";
            break;
        case "numDecimal":
            elemento.value = "123.5";
            break;
        case "correo":
            elemento.value = "hola@gmail.com";
            break;
        case "url":
            elemento.value = "http://www.instagram.com";
            break;
        case "fecha":
            elemento.value = "31-12-2020";
            break;
        case "dni":
            elemento.value = "12345678Z";
            break;
        case "telefono":
            elemento.value = "678889922";
            break;
    }
}

export function limpiarSpan() {
    let span = document.getElementsByTagName("span");

    for (const key of span) {
        if (key.innerHTML != "") {
            key.innerHTML = "";
        }
    }
}
