/**
 * @author Hugo Vicente Peligro
 */
document.addEventListener("DOMContentLoaded",function() {

    let arrayColores = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#8B00FF", "#088800", "#FFF89F", "#F44F4F"];

    document.addEventListener("contextmenu",function(evento) {
        evento.preventDefault();
    });

    let canvas = document.querySelectorAll("canvas");
    canvas.forEach(elemento => 
        {
            rellenar.bind(elemento)();
            elemento.addEventListener(elemento.id, rellenar.bind(elemento));
        }
    );

    function rellenar(evento){
        let contexto = this.getContext("2d");
        this.width = 150;
        this.height = 150;
        let colorAleatorio;

        do {
            colorAleatorio = arrayColores[Math.floor(Math.random() * arrayColores.length)];
        } while (this.dataset.color == colorAleatorio);
        this.dataset.color = colorAleatorio;
        contexto.fillStyle = colorAleatorio;
        contexto.fillRect(0, 0, this.width, this.height);
        if(evento != undefined){
            contexto.font = "20px Arial";
            contexto.fillStyle = "black";
            contexto.fillText(evento.type,10,30);
            contexto.font = "16px Arial";
            contexto.fillText(`(${evento.offsetX},${evento.offsetY})`,10,50);
            contexto.font = "12px Arial";
            contexto.fillText(`(${evento.button},${evento.buttons})`,10,70);
        }

    }




});