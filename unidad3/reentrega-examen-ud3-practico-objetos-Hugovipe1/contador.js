/**
 * @author Hugo Vicente Peligro
 */

document.addEventListener("DOMContentLoaded", function() {
    let divSpan = document.getElementById("divSpan");
    document.getElementById("boton").addEventListener("click", function(){
        window.localStorage.removeItem("contador");
        divSpan.innerHTML = `RESETEADO`;
    });

    document.getElementById("enlace").addEventListener("click", function(e) {
        e.preventDefault();
        history.back();
    });

    let contador = window.localStorage.getItem("contador");
    contador  ==  null ? window.localStorage.setItem("contador",1) : window.localStorage.setItem("contador", parseInt(contador) + 1);
    contador = window.localStorage.getItem("contador");
    console.log(contador);

    switch (contador) {
        case "1":
            divSpan.innerHTML = `Bienvenido a mi humilde morada. Esta es la primera vez que entras. Espero que vuelvas.`;
            break;
        case "2": 
            divSpan.innerHTML = `Hola de nuevo. Ya estás aquí por segunda vez. ¿Volveremos a vernos?.`
            break;
        default:
            divSpan.innerHTML = `Ya empiezas a ser pesado. Esta es la vez número ${contador} que entras. Sigue con tus cosas.`
            break;
    }
});