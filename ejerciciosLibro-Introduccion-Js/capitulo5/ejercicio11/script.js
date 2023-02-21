{

    document.addEventListener("DOMContentLoaded", function () {
        const enlaces = document.getElementsByTagName("a")
        const solucion = document.getElementById("solucion");
        solucion.innerHTML = "Hay " + enlaces.length + " enlaces en este HTML </br>";

        solucion.innerHTML += "Dirección del penultimo enlace: " + enlaces[enlaces.length - 2].href+"</br>";
        let contador = 0;
        for (let i = 0; i < enlaces.length; i++) {
            if (enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/") {
                contador++;
            }
        }

        solucion.innerHTML += "Numero de enlaces que apuntan a http://prueba " + document.querySelectorAll("a[href='http://prueba']").length+"</br>";

        const parrafos = document.getElementsByTagName("p");
        let enlaceParrafo3 = parrafos[2].getElementsByTagName("a");
        solucion.innerHTML += "Número de enlaces del tercer párrafo: " + enlaceParrafo3.length+"</br>";


    });
}