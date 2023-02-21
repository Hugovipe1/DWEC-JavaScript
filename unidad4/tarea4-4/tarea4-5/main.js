/**
 * @author Hugo Vicente Peligro
 */

document.addEventListener("DOMContentLoaded", function () {
    let fecha = document.getElementById("fecha");
    fecha.max = new Date().toISOString().split("T")[0];
    fecha.value = fecha.max;
    document.getElementById("enviar").addEventListener("click", function (e) {
        if (document.getElementById("form").checkValidity()) {
            console.log(fecha.value);
            let nombre = document.getElementById("nombre");
            let peso = document.getElementById("peso");
            let raza = document.getElementById("raza");
            let ventana = window.open("", "", "width=650, height=650");
            ventana.document.open();
            ventana.document.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="author" content="Hugo Vicente Peligro">
                <script src="ventanaGato.js"></script>
                <title>Ventana Gato</title>
            </head>
            <body>
                <b>Nombre: </b><span id="nombre"></span><br/>
                <b>Fecha de Nacimiento: </b><span id="fecha"></span><br/>
                <b>Raza: </b><span id="raza"></span><br/>
                <b>Peso: </b><span id="peso"></span><br/>
                <b>Estado:</b><div id="estado"></div><img src="../img/gato.jpg" alt="gato" width="500" id="image"><br/>
                <button id="jugar" >Jugar</button>
                <button id="comer" >Comer</button>
            </body>
            </html>`);
            
            ventana.document.close();
            ventana.gato = new Gato(nombre.value, fecha.value, raza.value, peso.value);
        }

    });



});