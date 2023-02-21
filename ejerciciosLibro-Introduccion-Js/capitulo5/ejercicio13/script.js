{

    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("confirmar").addEventListener("click", function () {
            let elemento = document.createElement("li");
            let contenido = document.createTextNode("Hola Mundo");

            elemento.appendChild(contenido);
            let lista = document.getElementById("lista");
            lista.appendChild(elemento);
        });

    });
}