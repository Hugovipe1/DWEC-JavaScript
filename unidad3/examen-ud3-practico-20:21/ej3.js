/**
 * @file
 * Almacena en el navegador los dos valores indicados.
 * - en diaSemana el día de la semana actual, en español (lunes, martes...)
 * - en numeros extrae los números del textarea separados por espacios. Usa los grupos de captura en las regexp
 *
 * Añade también comportamiento a cada botón para que borre TODO lo almacenado
 *
 * @author Carlos Hidalgo Risco
 */
{
  document.addEventListener("DOMContentLoaded", function () {
    //diaSemana
    const hoy = new Date().getDay();
    const dias = new Map();
    dias.set(1, "lunes");
    dias.set(2, "martes");
    dias.set(3, "miércoles");
    dias.set(4, "jueves");
    dias.set(5, "viernes");
    dias.set(6, "sábado");
    dias.set(0, "domingo");
    sessionStorage.setItem("diaSemana", dias.get(hoy));
    document.getElementsByTagName("li")[0].innerText += dias.get(hoy);
    
    //numeros
    document.getElementById("numeros").addEventListener("blur", function () {
        const regexp = /(\d\.)?\d+/g;
        const numeros = this.value.match(regexp);
      console.log(numeros);

        sessionStorage.setItem("numeros",  sessionStorage.getItem("numeros") != null ?sessionStorage.getItem("numeros")+numeros.join(" ") : numeros.join(" "));
    });

    document.getElementById("borrar").addEventListener("click", function () {
        window.sessionStorage.clear();
    });
  });
}
