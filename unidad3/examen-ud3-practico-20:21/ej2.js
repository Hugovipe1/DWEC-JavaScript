/**
 * @file
 *
 * AÑADE a cada <li> lo solicitado, NO MACHAQUES
 * Añade también comportamiento a cada botón: volver a la página anterior y cerrar esta página
 *
 * @author Carlos Hidalgo Risco
 */

{
  document.addEventListener("DOMContentLoaded", function () {
    //Protocolo de carga de la página
    document.getElementById("protocolo").innerHTML += window.location.protocol;
    //conexión a la red
    document.getElementById("conexion").innerText += window.navigator.onLine;
    //número de bits utilizados para mostrar un color
    document.getElementById("color").innerText += window.screen.colorDepth;
    //numero random
    const random = Math.floor(Math.random() * 11);
    document.getElementById("aleatorio").innerText += random;
    //random binario
    document.getElementById("aBinario").innerText += random.toString(2);
    //JSON
    const carlos = { nombre: "Javier", apellido: "Epifanio" };
    document.getElementById("aJSON").innerText += JSON.stringify(carlos);
    document.getElementById("aObjeto").innerText += JSON.parse(
      JSON.stringify(carlos)
    ).apellido;
    //set
    const set = new Set([Math.PI, Math.E]);
    const piEpsilon = [...set];
    document.getElementById("set").innerText += piEpsilon;

    const atras = document.getElementsByTagName("button")[0];
    atras.addEventListener("click", function () {
      history.back();
    });

    const cerrar = document.getElementById("cerrar");
    cerrar.addEventListener("click", function () {
      window.close();
    });
  });
}
