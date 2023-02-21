/**
 * @file
 * CRÓNICA DE UNA MUERTE ANUNCIADA......................
 * Se invocarán las siguientes funciones:
 *
 * cambiaH1():  que  Modifica H1 de la siguiente forma:
 * - Añade al contenido actual de h1 tu apellido
 * - Modifica el color o el color de fondo de h1
 *
 *   annadeElementos():
 * Añade al elemento <ul> un <li> con cada uno de los personajes
 * Para ello parte del siguiente array
 * ["Iván Baeza", "Santiago Nasar", "Ángela Vicario", "Pedro Vicario", "Pablo Vicario"]
 * Recórrelo mediante un método
 *
 * @author Carlos Hidalgo Risco
 *
 * */
{
  document.addEventListener("DOMContentLoaded", function () {

    cambiaH1();
    annadeElementos();
    /**
     * - Añade al contenido actual de h1 tu apellido
     * - Modifica el color o el color de fondo de h1
     */
    function cambiaH1() {
        const h1 = document.getElementsByTagName("h1")[0];
        h1.innerHTML = "Javier Epifanio López";
        h1.style.color = "red";
    }

    /**
     * Añade al elemento <ul> un <li> con cada uno de los personajes
     * Para ello parte del siguiente array
     * ["Iván Baeza", "Santiago Nasar", "Ángela Vicario", "Pedro Vicario", "Pablo Vicario"]
     * Recórrelo mediante un método
     */
    function annadeElementos() {
        const ul = document.getElementsByTagName("ul")[0];
        const personajes = ["Iván Baeza", "Santiago Nasar", "Ángela Vicario", "Pedro Vicario", "Pablo Vicario"];
        personajes.map((personaje) => {
            const li = document.createElement("li");
            li.innerHTML = personaje;
            ul.appendChild(li);
        });
    }
  });
}
